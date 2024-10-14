import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

const exampleCheckList: ITodo = {
  title: 'Meu Checklist',
  version: 'V1',
  date: new Date().getTime(),
  todos: [
    {title: 'Exercícios', status: 'toDo'},
    {title: 'Estudos', status: 'toDo'},
    {title: 'Atividades', status: 'toDo'},
  ],
};

type IStore = {
  current: ITodo;
  initialConfig: ITodo;
};

export const useToDo = create<IStore>()(
  persist(
    set => ({current: exampleCheckList, initialConfig: exampleCheckList}),
    {name: 'todo-main', storage: createJSONStorage(() => AsyncStorage)},
  ),
);
