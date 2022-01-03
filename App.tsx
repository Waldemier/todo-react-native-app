import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Header} from './app/components/Header';
import {useState} from "react";
import {Todo} from "./app/models/Todo";
import {Interact} from "./app/components/Interact";
import {List} from "./app/components/List";

export default function App() {
    const [todos, setTodo] = useState([] as Todo[]);

    const onSetHandler = (task: Todo) => {
        if (task.task?.trim()) {
            setTodo(prev => [...prev, task]);
        }
    }

    const onRemove = (task: Todo) => {
        setTodo(prevState => prevState.filter((x: Todo) => {
            return x.id !== task.id
        }));
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <Interact onSubmit={onSetHandler} />
            <List todos={todos.reverse()} onRemove={onRemove} />
            <StatusBar style="dark" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
