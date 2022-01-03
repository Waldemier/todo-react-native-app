import React, {FC, useState} from 'react';
import {Todo} from "../models/Todo";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";

interface Props {
    todo: Todo,
    onRemove: Function
}

export const Item: FC<Props> = ({ todo, onRemove }) => {
    const [cross, setCross] = useState(false);

    const onCrossHandler = () => {
        setCross(prevState => !prevState);
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.todo} onLongPress={onCrossHandler}>
                <Text>{todo.task}</Text>
            </TouchableOpacity>
            { cross ?
                (<TouchableOpacity style={styles.crossContainer} onPress={() => onRemove(todo)}>
                    <Text style={styles.cross}>X</Text>
                </TouchableOpacity>)
            : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    todo: {
        alignItems: 'center',
        width: 300,
        borderStyle: 'solid',
        borderColor: '#808080',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginBottom: 10
    },
    crossContainer: {
        paddingTop: 10,
        paddingLeft: 10
    },
    cross: {
        color: '#DC143C'
    }
});

