import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import {uuid} from 'uuidv4';
import AsyncStorage from '@react-native-async-storage/async-storage';

const exampleCheckList: ITodo = {
  title: 'Minhas tarefas :)',
  version: 'V1',
  date: new Date().getTime(),
  todos: [
    {
      id: uuid(),
      title: 'Exercícios',
      status: 'toDo',
      everyDay: true,
    },
    {
      id: uuid(),
      title: 'Estudos',
      status: 'toDo',
      everyDay: true,
    },
    {
      id: uuid(),
      title: 'Atividades',
      status: 'toDo',
      everyDay: true,
    },
  ],
};

type IStore = {
  current: ITodo;
  initialConfig: ITodo;
  history: ITodo[];
  resetConfigs: () => void;
  resetHistory: () => void;
};

export const useToDo = create<IStore>()(
  persist(
    set => ({
      current: exampleCheckList,
      initialConfig: exampleCheckList,
      history: [],
      resetConfigs: () =>
        set(() => ({
          current: exampleCheckList,
          initialConfig: exampleCheckList,
        })),
      resetHistory: () => set(() => ({history: []})),
    }),
    {name: 'todo-main', storage: createJSONStorage(() => AsyncStorage)},
  ),
);
