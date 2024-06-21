import { nanoid } from 'nanoid';

export type TodoType = {
  id: string;
  title: string;
};

export type ActionType = {
  type: string;
  payload?: any; //附加的内容  要新增的todo
};

const initialState: TodoType[] = [
  { id: nanoid(5), title: '吃饭' },
  { id: nanoid(5), title: '睡觉' },
];

export default initialState;
