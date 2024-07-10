import React, { FC, createContext, useReducer } from 'react';
import initialState, { ActionType } from './store';
import List from './list';
import reducer from './reducer';

export const TodoContext = createContext({
  state: initialState,
  dispatch: (action: ActionType) => {},
});

const Index: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <div>todolist</div>
      <List />
    </TodoContext.Provider>
  );
};

export default Index;
