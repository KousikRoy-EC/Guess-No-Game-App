import React from "react";
import { View, Text, StyleSheet, Button, Pressable } from "react-native";

export default function GameOver(props) {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>The Game is Over</Text>
            <Text style={styles.title}>The Entered No was : {props.userScore}</Text>
            <Text style={styles.title}>
                The No of Rounds Of Game : {props.roundsOfGame}
            </Text>
            <Pressable style={styles.btn} onPress={props.onRestart}>
                <Text style={styles.text}>Restart Game</Text>
            </Pressable>
        </View>
    );
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    btn: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: "black",
        margin: 10,
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "white",
    },
});
