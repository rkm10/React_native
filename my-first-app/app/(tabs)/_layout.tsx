import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

import { drawerIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import CustomDrawerContent from "@/components/navigation/CustomDrawerContent";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={CustomDrawerContent}
        screenOptions={{
          drawerStatusBarAnimation: "none",
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
