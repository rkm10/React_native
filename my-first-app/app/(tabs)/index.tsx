import React, { useState, useEffect } from "react";
import { Image, StyleSheet, ActivityIndicator, View } from "react-native";
import { Card, CardContent, Pagination, Typography } from "@mui/material";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { HelloWave } from "@/components/HelloWave";

export default function HomeScreen() {
  const [apiData, setApiData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${(page - 1) * 10}`
    )
      .then((response) => response.json())
      .then((json) => {
        setApiData(json.results);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [page]);

  const handlePageChange = (event, value) => {
    setPage(value);
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

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : error ? (
        <ThemedText type="error">
          Error fetching data: {error.message}
        </ThemedText>
      ) : (
        <View style={styles.cardsContainer}>
          {apiData.map((data, index) => {
            return (
              <ThemedView key={index} style={{ width: "45%" }}>
                <ThemedText>{apiData[index].name}</ThemedText>
              </ThemedView>
            );
          })}
        </View>
      )}

      <Pagination
        count={10}
        variant="outlined"
        shape="rounded"
        page={page}
        onChange={handlePageChange}
      />
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
