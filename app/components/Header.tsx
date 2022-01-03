import React from 'react';
import {StyleSheet, View, Text} from "react-native";

export const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Todo application</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        backgroundColor: '#DC143C',
        width: '100%'
    },
    text: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: '600'
    }
});
