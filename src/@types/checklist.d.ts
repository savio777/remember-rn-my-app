declare type ICheckList = {
  id: string;
  title: string;
  status: 'done' | 'blocked' | 'toDo';
  everyDay?: boolean;
};
