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
import { View } from "react-native";
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
