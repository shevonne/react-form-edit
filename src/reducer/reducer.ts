import type { TodoType } from './store';

export type ActionType = {
  type: string;
  payload?: any;
};

export default function reducer(state: TodoType[], action: ActionType) {
  switch (action.type) {
    case 'add':
      //返回新的state,不可变数据
      return state.concat(action.payload);
    case 'delete':
      //返回新的state,不可变数据
      return state.filter((todo) => todo.id !== action.payload);
    default:
      throw new Error();
  }
}
