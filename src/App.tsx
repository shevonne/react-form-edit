import React from 'react';
// import './App.css';
import { title } from 'process';

const requstlist = [
  { id: 'req1', title: '问卷列表1', show: false },
  { id: 'req2', title: '问卷列表2', show: true },
  { id: 'req3', title: '问卷列表3', show: false },
  { id: 'req4', title: '问卷列表4', show: true },
];

function App() {
  return (
    <div>
      <h1>调查问卷</h1>
      <div>
        {requstlist.map((item) => {
          const { id, title, show } = item;
          return (
            <li key={id}>
              {title}
              {show ? <button>可编辑</button> : <button>不可编辑</button>}
            </li>
          );
        })}
      </div>
    </div>
  );
}

export default App;
