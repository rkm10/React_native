import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  FlatList,
  type ViewProps,
  Dimensions,
} from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";
import { MaterialIcons } from "@expo/vector-icons";

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
  const paginationRef = useRef(null);

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
      ref={paginationRef}
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
        animationType="none"
        onRequestClose={toggleDropdown}
      >
        <View
          style={StyleSheet.absoluteFillObject}
          onStartShouldSetResponder={toggleDropdown}
        >
          <View
            style={[
              styles.modalContainer,
              { backgroundColor, borderColor, borderWidth: 1 },
            ]}
          >
            <FlatList
              data={pages}
              renderItem={renderPageItem}
              keyExtractor={(item) => item.toString()}
              initialNumToRender={5}
              initialScrollIndex={
                currentPage > 2 ? currentPage - 3 : currentPage - 1
              } // Start with current page in the middle
              getItemLayout={(data, index) => ({
                length: 44,
                offset: 44 * index,
                index,
              })}
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
    padding: 4,
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
    position: "static",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -20 }, { translateY: 150 }],
    borderRadius: 4,
    // padding: 16,
    maxHeight: 150,
    width: 50, // Adjust width as needed
    // backgroundColor: "white",
  },
  dropdownItem: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  selectedDropdownItem: {
    // backgroundColor: "#DDD",
  },
  dropdownItemText: {
    fontSize: 16,
  },
});
