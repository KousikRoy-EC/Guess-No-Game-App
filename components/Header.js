import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Header(props) {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: 90,
        backgroundColor: "#f7287b",
        paddingTop: 36,
        alignItems: "center",
        justifyContent: "center",
    },
    headerTitle: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold",
    }
})