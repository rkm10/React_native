import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

import { drawerIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
// import CustomDrawerContent from "@/components/navigation/CustomDrawerContent";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useRouter } from "expo-router";
import { Image, View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function CustomDrawerContent(props: any) {
  const router = useRouter();
  const { top, bottom } = useSafeAreaInsets();
  return (
    <View style={{ flex: 1, backgroundColor: "#dde3fe" }}>
      <DrawerContentScrollView
        {...props}
        scrollEnabled={false}
        contentContainerStyle={{
          backgroundColor: "#dde3fe",
        }}
      >
        <View
          style={{
            padding: 10,
          }}
        >
          <Image
            source={{
              uri: "https://cdn.pixabay.com/photo/2020/01/16/17/32/pokemon-4771238_1280.jpg",
            }}
            style={{
              width: 100,
              height: 100,
              alignSelf: "center",
              borderRadius: 50,
            }}
          />
          <Text
            style={{
              alignSelf: "center",
              fontWeight: "500",
              fontSize: 18,
              paddingTop: 10,
              color: "#1163d1",
            }}
          >
            Pokemon
          </Text>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View
        style={{
          borderTopColor: "#000000",
          borderTopWidth: 1,
          padding: bottom,
        }}
      >
        <DrawerItem label={"Logout"} onPress={() => router.replace("/")} />
      </View>
    </View>
  );
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={CustomDrawerContent}
        screenOptions={{
          drawerPosition: "left",
          drawerHideStatusBarOnOpen: false,
          swipeEnabled: true,
          drawerActiveTintColor: "#fff",
          drawerActiveBackgroundColor: "rgba(0, 122, 255, 1)",
        }}
      >
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Home",
            title: "overview",
            drawerIcon: ({ color, size }) =>
              drawerIcon({ name: "home", color, size }),
          }}
        />
        <Drawer.Screen
          name="news" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "News",
            title: "News",
            drawerIcon: ({ color, size }) =>
              drawerIcon({ name: "newspaper", color, size }),
          }}
        />
        <Drawer.Screen
          name="profile" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "profile",
            title: "profile",
            drawerIcon: ({ color, size }) =>
              drawerIcon({ name: "person-outline", color, size }),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
