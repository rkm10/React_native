import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  FlatList,
  type ViewProps,
} from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";
import { MaterialIcons } from "@expo/vector-icons"; // Import MaterialIcons

export type ThemedPaginationProps = ViewProps & {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  lightColor?: string;
  darkColor?: string;
};

export function ThemedPagination({
  currentPage,
  totalPages,
  onPageChange,
  lightColor,
  darkColor,
  style,
  ...otherProps
}: ThemedPaginationProps) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [selectedPage, setSelectedPage] = useState(currentPage);

  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );
  const textColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "text"
  );
  const borderColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "border"
  );

  useEffect(() => {
    setSelectedPage(currentPage);
  }, [currentPage]);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handlePageSelect = (page) => {
    setSelectedPage(page);
    onPageChange(page);
    setIsDropdownVisible(false);
  };

  const renderPageItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.dropdownItem,
        item === selectedPage && styles.selectedDropdownItem,
      ]}
      onPress={() => handlePageSelect(item)}
    >
      <Text style={[{ color: textColor }, styles.dropdownItemText]}>
        {item}
      </Text>
    </TouchableOpacity>
  );

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <View
      style={[{ backgroundColor }, styles.container, style]}
      {...otherProps}
    >
      <TouchableOpacity
        onPress={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        style={[styles.button, currentPage === 1 && styles.disabledButton]}
      >
        <Text
          style={[
            { color: textColor, borderColor, borderWidth: 1 },
            styles.text,
          ]}
        >
          Previous
        </Text>
      </TouchableOpacity>

      {/* Dropdown Icon and Page Info */}
      <TouchableOpacity onPress={toggleDropdown} style={styles.pageInfo}>
        <Text style={[{ color: textColor }, styles.text]}>
          Page {currentPage} of {totalPages}
        </Text>
        <MaterialIcons name="arrow-drop-down" size={24} color={textColor} />
      </TouchableOpacity>

      {/* Modal */}
      <Modal
        visible={isDropdownVisible}
        transparent
        animationType="slide"
        onRequestClose={toggleDropdown}
      >
        <View style={styles.modalContainer}>
          <View
            style={[
              styles.dropdownContainer,
              { backgroundColor, width: `${String(currentPage).length * 10}%` }, // Adjust width based on the current page number
            ]}
          >
            <FlatList
              data={pages}
              renderItem={renderPageItem}
              keyExtractor={(item) => item.toString()}
              initialNumToRender={5}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </Modal>

      <TouchableOpacity
        onPress={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        style={[
          styles.button,
          currentPage === totalPages && styles.disabledButton,
        ]}
      >
        <Text
          style={[
            { color: textColor, borderColor, borderWidth: 1 },
            styles.text,
          ]}
        >
          Next
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 4,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  disabledButton: {
    opacity: 0.5,
  },
  text: {
    fontSize: 16,
    padding: 10,
    borderRadius: 10,
  },
  pageInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  dropdownContainer: {
    width: "80%",
    maxHeight: 200,
    borderRadius: 8,
    padding: 16,
  },
  dropdownItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  selectedDropdownItem: {
    backgroundColor: "#DDD",
  },
  dropdownItemText: {
    fontSize: 16,
  },
});
