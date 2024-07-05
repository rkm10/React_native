import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { Link } from "expo-router";

const PokemonCard = ({ data }) => {
    return (
        <ThemedView style={styles.card}>
            <Link href={`/user/${data.name}`}>
                <ThemedText>{data.name}</ThemedText>
                <Image
                    source={{ uri: data.sprites.front_default }}
                    style={styles.pokemonImage}
                />
            </Link>
        </ThemedView>
    );
};

const styles = StyleSheet.create({
    card: {
        width: "45%",
        margin: 8,
        padding: 16,
        borderWidth: 1,
        borderRadius: 8,
        alignItems: "center",
    },
    pokemonImage: {
        width: 100,
        height: 100,
        marginTop: 8,
    },
});

export default PokemonCard;
