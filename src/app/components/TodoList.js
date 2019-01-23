import React from 'react'
import {
    View,
    Text
} from 'react-native'

const TodoList = ({ items, actions }) => (
    <View>
        {items.map((todo) => (
            <Text key={todo.key} {...actions}>{todo.title}</Text>
        ))}
    </View>
);

export default TodoList