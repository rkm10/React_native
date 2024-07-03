import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import AnimeList from './Subcomponents/AnimeList';
import { ThemedView } from '@/components/ThemedView';

export default function Homeanime() {
    const [apiData, setApiData] = useState(null);
    const [pending, setPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://api.jikan.moe/v4/anime")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Searching data not found");
                }
                return response.json();
            })
            .then((datas) => {
                setApiData(datas.data);
                setPending(false);
            })
            .catch((err) => {
                setError(err.message);
                setPending(false);
            });
    }, []);

    return (
        <>
            {error && <Text style={styles.errorText}>{error}</Text>}
            {pending && <ThemedView style={styles.spinner}><Spinner /></ThemedView>}
            {apiData && (
                <ThemedView style={styles.Home}>
                    <ThemedView style={styles.flexWrapContainer}>
                        <AnimeList apiData={apiData} />
                    </ThemedView>
                </ThemedView>
            )}
        </>
    );
}

const Spinner = () => {
    return (
        <View style={styles.spinner}>
            <Animated.View style={[styles.spinnerBefore, animatedStyleBefore]} />
            <Animated.View style={[styles.spinnerAfter, animatedStyleAfter]} />
        </View>
    );
};

const styles = StyleSheet.create({
    Home: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    spinner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    spinnerBefore: {
        width: 100,
        height: 100,
        backgroundColor: 'transparent', // Add your background color if needed
        position: 'absolute',
        transform: [{ rotateX: '60deg' }, { rotateY: '45deg' }, { rotateZ: '45deg' }],
    },
    spinnerAfter: {
        width: 100,
        height: 100,
        backgroundColor: 'transparent', // Add your background color if needed
        position: 'absolute',
        transform: [{ rotateX: '240deg' }, { rotateY: '45deg' }, { rotateZ: '45deg' }],
    },
    flexWrapContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    errorText: {
        color: 'red',
        fontSize: 20,
        textAlign: 'center',
    },
});

// Keyframe animations are not directly supported in React Native. Use Animated API instead.
const rotateBefore = new Animated.Value(0);
const rotateAfter = new Animated.Value(0);

Animated.loop(
    Animated.timing(rotateBefore, {
        toValue: 1,
        duration: 750,
        useNativeDriver: true,
    })
).start();

Animated.loop(
    Animated.timing(rotateAfter, {
        toValue: 1,
        duration: 750,
        useNativeDriver: true,
    })
).start();

const animatedStyleBefore = {
    transform: [
        { rotateX: '60deg' },
        { rotateY: '45deg' },
        { rotateZ: rotateBefore.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '-360deg'] }) }
    ],
};

const animatedStyleAfter = {
    transform: [
        { rotateX: '240deg' },
        { rotateY: '45deg' },
        { rotateZ: rotateAfter.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '360deg'] }) }
    ],
};
