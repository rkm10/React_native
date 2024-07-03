import { Image, StyleSheet, Platform, Button } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import HomeAnime from "@/pages/AllAnime";

export default function HomeScreen() {
  const navigation = useNavigation();
  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/pokemon-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome Pokie's.!!!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView>
        <Button title="Open drawer" onPress={openDrawer} />
        {/* <news /> */}
        {/* <HomeAnime /> */}
        {/* <Image source={require("@/assets/images/pokemon-logo.png")} /> */}
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 250,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
