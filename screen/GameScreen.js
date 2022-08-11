import { StyleSheet, Text, View, Pressable, Alert } from "react-native";
import React, { useState, useRef, useEffect } from "react";

export default function GameScreen(props) {
    const generateRandomBetween = (min, max, exclude) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        const res = Math.floor(Math.random() * (max - min)) + min;

        if (res === exclude) {
            return generateRandomBetween(min, max, exclude);
        } else {
            return res;
        }
    };

    const HighValue = useRef(100);
    const LowValue = useRef(1);
    const [rounds, setrounds] = useState(0);
    const [randomNo, setrandomNo] = useState(
        generateRandomBetween(1, 100, props.userChoiseNo)
    );

    useEffect(() => {
        if (props.userChoiseNo === randomNo) {
            Alert.alert("You Won!", "You have guessed the correct number");
            props.onGameEnd(rounds);
        }
    }, [randomNo]);

    const nextGuessHandler = (direction) => {
        if (
            (direction === "lower" && randomNo < props.userChoiseNo) ||
            (direction === "higher" && randomNo > props.userChoiseNo)
        ) {
            Alert.alert("Don't lie!", "You know that this is wrong...", [
                { text: "Sorry!", style: "cancel" },
            ]);
            return;
        }
        if (direction === "lower") {
            HighValue.current = randomNo;
        } else if (direction === "higher") {
            LowValue.current = randomNo;
        }
        const nextNumber = generateRandomBetween(
            LowValue.current,
            HighValue.current,
            randomNo
        );
        setrandomNo(nextNumber);
        setrounds((current) => current + 1);
    };

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Opponent's Guess No is</Text>
            <Text style={styles.number}>{randomNo}</Text>
            <View style={styles.buttonContainer}>
                <Pressable
                    style={styles.btn}
                    onPress={nextGuessHandler.bind(this, "lower")}
                >
                    <Text style={styles.text}>Lower</Text>
                </Pressable>
                <Pressable
                    style={styles.btn}
                    onPress={nextGuessHandler.bind(this, "higher")}
                >
                    <Text style={styles.text}>Greater</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        boxSizing: "border-box",
        boxshadow: "0px 0px 10px #000",
        width: 300,
        shadowRadius: 6,
        shadowOpacity: 0.26,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        maxWidth: "80%",
        backgroundColor: "white",
        elevation: 8,
        margin: 10,
        padding: 10,
        borderRadius: 10,
    },
    number: {
        fontSize: 20,
        marginVertical: 10,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "black",
    },
    title: {
        fontSize: 25,
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
