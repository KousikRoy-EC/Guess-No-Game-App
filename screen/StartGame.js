import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableWithoutFeedback,
    Pressable,
    Keyboard,
    Alert,
} from "react-native";

const StartGame = (props) => {
    const [Number, setNumber] = useState("");
    const [entered, setentered] = useState();
    const onChangeNumber = (no) => {
        setNumber(no.replace(/[^0-9]/g, ""));
    };

    const resetInput = () => {
        setNumber("");
    };

    const submitInput = () => {
        setentered(parseInt(Number));
        props.setNoChoise(parseInt(Number));
        setNumber("");
    };

    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss();
            }}
        >
            <View style={styles.screen}>
                <Text style={styles.title}>Start a new Game!</Text>
                <View style={styles.align}>
                    <Text>Enter a Number</Text>
                    <TextInput
                        onChangeText={onChangeNumber}
                        value={Number}
                        style={styles.inputContainer}
                        keyboardType="number-pad"
                        blurOnSubmit
                        maxLength={2}
                    />
                    <View style={styles.buttonContainer}>
                        <Pressable style={styles.btn} onPress={resetInput}>
                            <Text style={styles.text}>Reset</Text>
                        </Pressable>
                        <Pressable style={styles.btn} onPress={submitInput}>
                            <Text style={styles.text}>Confirm</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center",
    },
    align: {
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
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
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "white",
    },
    title: {
        fontSize: 25,
    },
    inputContainer: {
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: "grey",
        marginVertical: 10,
        paddingHorizontal: 10,
        paddingVertical: 0,
        textAlign: "center",
    },
    buttonContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
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
});

export default StartGame;
