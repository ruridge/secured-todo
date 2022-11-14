import React, { useRef, useState } from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  View,
} from 'react-native';
import type { ListRenderItemInfo, TextInput, ViewStyle } from 'react-native';
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
  onCheckboxPress: (id: number, completed: boolean) => void;
  onRemovePress: (id: number) => void;
  onPress: (id: number) => void;
}
function TodoItem({
  id,
  text,
  completed,
  onCheckboxPress,
  onRemovePress,
  onPress,
}: TodoItemProps) {
  return (
    <View style={todoItemStyles}>
      <Checkbox
        style={{
          marginRight: SPACING[4],
          marginTop: SPACING[0.5],
        }}
        value={completed}
        onValueChange={(isChecked) => onCheckboxPress(id, isChecked)}
      />
      <Pressable style={{ flex: 1 }} onPress={() => onPress(id)}>
        <Text style={{ color: COLORS.gray[600] }}>{text}</Text>
      </Pressable>
      <Text
        size="sm"
        style={{ color: COLORS.gray[600] }}
        onPress={() => onRemovePress(id)}
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
  const [textInputValue, setTextInputValue] = useState('');
  const [selectedTodoID, setSelectedTodoID] = useState<number | null>(null);

  const textInputRef = useRef<TextInput>(null);

  function createNewTodo() {
    // prevent empty todos from being created on keyboard return press
    if (textInputValue === '') {
      return;
    }
    const newTodo: Todo = {
      id: Math.random(),
      text: textInputValue,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setTextInputValue('');
  }

  function editTodo() {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === selectedTodoID) {
          return {
            ...todo,
            text: textInputValue,
          };
        }
        return todo;
      }),
    );
    setTextInputValue('');
    setSelectedTodoID(null);
  }

  function handleSubmit() {
    if (selectedTodoID) {
      editTodo();
    } else {
      createNewTodo();
    }
  }

  function handleTodoPress(id: number) {
    const selectedTodo = todos.find((todo) => todo.id === id);
    if (selectedTodo) {
      setSelectedTodoID(id);
      setTextInputValue(selectedTodo.text);
      textInputRef.current?.focus();
    }
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
      onCheckboxPress={handleCheckboxPress}
      onRemovePress={() => {
        setTodos((prevTodos) =>
          prevTodos.filter((todo) => todo.id !== item.id),
        );
      }}
      onPress={handleTodoPress}
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
          onSubmit={handleSubmit}
          onChangeText={setTextInputValue}
          value={textInputValue}
          disabled={textInputValue === ''}
          textInputRef={textInputRef}
          buttonText={selectedTodoID ? 'EDIT' : 'ADD'}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
