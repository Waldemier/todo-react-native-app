import React, {FC} from 'react';
import {FlatList, ScrollView, StyleSheet, View} from "react-native";
import {Todo} from "../models/Todo";
import {Item} from "./Item";

interface Props {
    todos: Array<Todo>,
    onRemove: Function
}

export const List: FC<Props> = ({todos, onRemove}) => {
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <FlatList
                nestedScrollEnabled
                keyExtractor={(item: Todo) => item.id as string}
                data={todos}
                renderItem={({ item }) => (<Item todo={item} onRemove={onRemove} />)} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
   container: {
       marginTop: 30
   }
});

