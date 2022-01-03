import React, {FC, useState} from 'react';
import {Text, StyleSheet, TextInput, TouchableOpacity, View} from "react-native";
import {Todo} from "../models/Todo";

interface Props {
    onSubmit: Function
}

export const Interact: FC<Props> = ({ onSubmit }) => {
    const [value, setValue] = useState('');

    const onSubmitHandler = () => {
        onSubmit(new Todo({ id: Date.now().toString(), task: value }));
        setValue('');
    }

    return (
        <View style={styles.container}>
            <TextInput value={value} style={styles.text} onChangeText={(x: string) => setValue(x) } />
            <TouchableOpacity style={styles.addButton} onPress={onSubmitHandler}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    text: {
        width: '60%',
        marginRight: 15,
        borderBottomColor: '#000',
        borderStyle: 'solid',
        borderBottomWidth: 2
    },
    addButton: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        width: 45,
        backgroundColor: '#DC143C',
        borderRadius: 30,
    },
    buttonText: {
        color: '#ffffff',
        fontWeight: '600',
        fontSize: 20
    }
});
