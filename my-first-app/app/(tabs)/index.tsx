import React, { useState, useEffect } from "react";
import { Image, StyleSheet, ActivityIndicator, View } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { HelloWave } from "@/components/HelloWave";
import { ThemedPagination } from "@/components/ThemedPagination";

export default function HomeScreen() {
  const [apiData, setApiData] = useState([]);
  const [currentPageData, setCurrentPageData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1000")
      .then((response) => response.json())
      .then(async (json) => {
        const pokemonList = json.results;
        console.log(pokemonList);
        const detailedDataPromises = pokemonList.map((pokemon) =>
          fetch(pokemon.url).then((response) => response.json())
        );
        console.log(detailedDataPromises);

        const detailedData = await Promise.all(detailedDataPromises);
        setApiData(detailedData);
        setTotalPages(Math.ceil(detailedData.length / itemsPerPage));
        setLoading(false);
        setCurrentPageData(detailedData.slice(0, itemsPerPage));
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (apiData.length > 0) {
      const offset = (page - 1) * itemsPerPage;
      setCurrentPageData(apiData.slice(offset, offset + itemsPerPage));
    }
  }, [page, apiData]);

  const handlePageChange = (value) => {
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
        <ThemedView style={styles.errorContainer}>
          <ThemedText>Error fetching data: {error.message}</ThemedText>
        </ThemedView>
      ) : (
        <ThemedView style={styles.cardsContainer}>
          {currentPageData.map((data, index) => (
            <ThemedView key={index} style={styles.card}>
              <ThemedText style={{ textTransform: "uppercase" }}>
                {data.name}
              </ThemedText>
              <Image
                source={{ uri: data.sprites.front_default }}
                style={styles.pokemonImage}
              />
            </ThemedView>
          ))}
        </ThemedView>
      )}
      <ThemedView style={styles.paginationContainer}>
        <ThemedPagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    padding: 16,
  },
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  card: {
    width: "45%",
    margin: 8,
    padding: 16,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
  },
  reactLogo: {
    height: 250,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  errorContainer: {
    padding: 16,
    alignItems: "center",
  },
  paginationContainer: {
    marginTop: 16,
    alignItems: "center",
  },
  pokemonImage: {
    width: 100,
    height: 100,
    marginTop: 8,
  },
});
