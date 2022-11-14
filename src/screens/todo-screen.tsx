import React, { useState } from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  View,
} from 'react-native';
import type { ListRenderItemInfo, ViewStyle } from 'react-native';
import Checkbox from 'expo-checkbox';
import { Text } from '../components/atoms';
import { ButtonInput } from '../components/button-input';
import { COLORS, RADIUS, SPACING } from '../theme';

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
  handleCheckboxPress: (id: number, completed: boolean) => void;
  handleRemovePress: (id: number) => void;
}
function TodoItem({
  id,
  text,
  completed,
  handleCheckboxPress,
  handleRemovePress,
}: TodoItemProps) {
  return (
    <View style={todoItemStyles}>
      <Checkbox
        style={{
          marginRight: SPACING[4],
          marginTop: SPACING[0.5],
        }}
        value={completed}
        onValueChange={(isChecked) => handleCheckboxPress(id, isChecked)}
      />
      <Text style={{ flex: 1, color: COLORS.gray[600] }}>{text}</Text>
      <Text
        size="sm"
        style={{ color: COLORS.gray[600] }}
        onPress={() => handleRemovePress(id)}
      >
        REMOVE
      </Text>
    </View>
  );
}

const todoItemStyles: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: SPACING[4],
  backgroundColor: COLORS.white,
  borderRadius: RADIUS.DEFAULT,
};

export function TodoScreen() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState('');

  function createNewTodo() {
    if (text === '') {
      return;
    }
    const newTodo: Todo = {
      id: Math.random(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setText('');
  }

  function handleCheckboxPress(id: number, completed: boolean) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      }),
    );
  }

  const renderItem = ({ item }: ListRenderItemInfo<Todo>) => (
    <TodoItem
      id={item.id}
      text={item.text}
      completed={item.completed}
      handleCheckboxPress={handleCheckboxPress}
      handleRemovePress={() => {
        setTodos((prevTodos) =>
          prevTodos.filter((todo) => todo.id !== item.id),
        );
      }}
    />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <Text
          size="2xl"
          style={{
            marginHorizontal: SPACING[4],
            color: COLORS.blue[700],
            fontWeight: 'bold',
            marginBottom: SPACING[4],
          }}
        >
          TODO:
        </Text>
        <FlatList
          data={todos}
          renderItem={renderItem}
          keyExtractor={(item) => String(item.id)}
          ItemSeparatorComponent={() => <View style={{ height: SPACING[4] }} />}
          style={{ paddingHorizontal: SPACING[4] }}
        />
        <ButtonInput
          onSubmit={createNewTodo}
          onChangeText={setText}
          value={text}
          disabled={text === ''}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
