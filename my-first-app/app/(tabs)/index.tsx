import { Image, StyleSheet, Platform, Button } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useState, useEffect } from "react";
import { Card, CardContent, Typography } from "@mui/material";

export default function HomeScreen() {
  const navigation = useNavigation();
  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  const [apiData, setApiData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
      .then((response) => response.json())
      .then((json) => setApiData(json.results))
      .catch((error) => setError(error));
  }, []);
  console.log(apiData);

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
      <ThemedView style={styles.cardsContainer}>
        {apiData.map((data, index) => {
          return (
            <div key={index} style={{ width: "45%" }}>
              <Text>{apiData[index].name}</Text>
            </div>
          );
        })}
        {/* {apiData.map((data, index) => {
          return (
            <Card key={index} sx={{ width: { xs: "45%" } }}>
              <CardContent>
                <Typography>Pokemon:{apiData[index].name}</Typography>
              </CardContent>
            </Card>
          );
        })} */}
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
    marginBottom: 8,
  },
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    flex: 2,
    alignItems: "center",
    gap: 8,
  },
  reactLogo: {
    height: 250,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
