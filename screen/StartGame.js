import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


const StartGame = props => {
    return (<View style={styles.screen}>
        <Text style={styles.title}>Start a new Game!</Text>
        <View style={styles.inputContainer}>
            <Text>Select a Number</Text>
            <TextInput />
            <View style={styles.buttonContainer}>
                <Button title='Reset' onPress={() => { }} />
                <Button title='Confirm' onPress={() => { }} />
            </View>
        </View>
    </View>)
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center",
    },
    title: {
        fontSize: 25,
    },
    inputContainer: {

    },
    buttonContainer: {
        flexDirection: "row",
    },
});

export default StartGame;