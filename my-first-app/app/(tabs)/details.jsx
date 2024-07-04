import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

const Details = ({ route }) => {
    const { pokemon } = route.params;

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
