import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { useSearchParams } from 'expo-router';

const Details = () => {
    const { name, url } = useSearchParams();
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        const fetchPokemonDetails = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setPokemon(data);
            } catch (error) {
                console.error("Error fetching Pokémon details:", error);
            }
        };

        if (url) {
            fetchPokemonDetails();
        }
    }, [url]);

    if (!pokemon) {
        return (
            <ThemedView style={styles.container}>
                <ThemedText>Loading...</ThemedText>
            </ThemedView>
        );
    }

    return (
        <ThemedView style={styles.container}>
            <ThemedText type="title">{pokemon.name}</ThemedText>
            <Image
                source={{ uri: pokemon.sprites.front_default }}
                style={styles.pokemonImage}
            />
            <ThemedText>Height: {pokemon.height}</ThemedText>
            <ThemedText>Weight: {pokemon.weight}</ThemedText>
            <ThemedText>Base Experience: {pokemon.base_experience}</ThemedText>
        </ThemedView>
    );
};
(0, _expoRouter.useSearchParams) is not a function
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    pokemonImage: {
        width: 200,
        height: 200,
        marginTop: 16,
        marginBottom: 16,
    },
});

export default Details;
