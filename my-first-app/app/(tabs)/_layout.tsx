import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

import { drawerIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
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
          name="explore" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Explore",
            title: "Explore",
            drawerIcon: ({ color, size }) =>
              drawerIcon({ name: "desktop-sharp", color, size }),
          }}
        />
        <Drawer.Screen
          name="new" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "new",
            title: "New",
            drawerIcon: ({ color, size }) =>
              drawerIcon({ name: "desktop", color, size }),
          }}
        />
        <Drawer.Screen
          name="start" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Start",
            title: "Start",
            drawerIcon: ({ color, size }) =>
              drawerIcon({ name: "desktop-outline", color, size }),
          }}
        />
        <Drawer.Screen
          name="something" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Something",
            title: "Something",
            drawerIcon: ({ color, size }) =>
              drawerIcon({ name: "skull-outline", color, size }),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
