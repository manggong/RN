import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/eslint-config';

interface Props {
  children: JSX.Element | Array<JSX.Element>;
}

const TodoListContext = createContext<ITodoListContext>({
  todoList: [],
  addTodoList: (todo: string): void => {},
  removeTodoList: (index: number): void => {},
});
