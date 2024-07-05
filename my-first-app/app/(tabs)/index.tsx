import React, { useState, useEffect } from "react";
import { Image, StyleSheet, ActivityIndicator, View } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { HelloWave } from "@/components/HelloWave";
import { ThemedPagination } from "@/components/ThemedPagination";
import PokemonCard from "@/components/PokemonCard";

export default function HomeScreen() {
  const [apiData, setApiData] = useState([]);
  const [currentPageData, setCurrentPageData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;
  const initialFetchLimit = 50;

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=${initialFetchLimit}`
        );
        let json = await response.json();
        const firstBatch = json.results;

        const detailedDataPromises = firstBatch.map((pokemon) =>
          fetch(pokemon.url).then((response) => response.json())
        );
        const firstBatchDetails = await Promise.all(detailedDataPromises);

        setApiData(firstBatchDetails);
        setTotalPages(Math.ceil(1000 / itemsPerPage));
        setLoading(false);
        setCurrentPageData(firstBatchDetails.slice(0, itemsPerPage));

        response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${initialFetchLimit}&limit=${
            1000 - initialFetchLimit
          }`
        );
        json = await response.json();
        const remainingBatch = json.results;

        const remainingDetailedDataPromises = remainingBatch.map((pokemon) =>
          fetch(pokemon.url).then((response) => response.json())
        );
        const remainingBatchDetails = await Promise.all(
          remainingDetailedDataPromises
        );

        setApiData((prevData) => [...prevData, ...remainingBatchDetails]);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
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
  New@expo

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
            <PokemonCard key={index} data={data} />
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
});
