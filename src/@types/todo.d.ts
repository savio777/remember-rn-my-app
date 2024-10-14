declare type ITodo = {
  version: 'V1';
  date: number; // new Date().getTime()
  title: string;
  todos: ICheckList[];
};
