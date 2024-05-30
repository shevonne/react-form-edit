import React, { FC, useState } from 'react';
import QuestionCard from './components/QuestionCard';
import { produce } from 'immer';

const List: FC = () => {
  const [questionList, setQuestionList] = useState([
    { id: 'req1', title: '问卷列表1', show: false },
    { id: 'req2', title: '问卷列表2', show: true },
    { id: 'req3', title: '问卷列表3', show: false },
    { id: 'req4', title: '问卷列表4', show: true },
  ]);

  function add() {
    //后三位随机数
    let randomNumber = Math.random().toString().slice(-3);
    //方式1：
    // setQuestionList(
    //   questionList.concat({
    //     id: 'req' + randomNumber,
    //     title: '问卷列表' + randomNumber,
    //     show: false,
    //   })
    // );
    //immer方式
    setQuestionList(
      produce((draft) => {
        draft.push({
          id: 'req' + randomNumber,
          title: '问卷列表' + randomNumber,
          show: false,
        });
      })
    );
  }

  //删除
  function deleteQuestion(id: string) {
    //方式1：
    // setQuestionList(
    //   questionList.filter((q) => {
    //     if (q.id === id) return false;
    //     else return true;
    //   })
    // );
    //immer方式
    setQuestionList(
      produce((draft) => {
        const index = draft.findIndex((q) => q.id === id);
        draft.splice(index, 1);
      })
    );
  }

  //发布
  function publishQuestion(id: string) {
    //方式1：
    // setQuestionList(
    //   questionList.map((q) => {
    //     if (q.id !== id) return q;
    //     else {
    //       return {
    //         ...q,
    //         show: true,
    //       };
    //     }
    //   })
    // );

    //immer方式：
    setQuestionList(
      produce((draft) => {
        const item = draft.find((q) => q.id === id);
        if (item) {
          item.show = true;
        }
      })
    );
  }

  return (
    <div>
      <h1>问卷调查列表</h1>
      {questionList.map((item) => {
        const { id, title, show } = item;
        return (
          <div key={id}>
            <QuestionCard
              id={id}
              title={title}
              isPublished={show}
              deleteQuestion={deleteQuestion}
              publishQuestion={publishQuestion}
            ></QuestionCard>
          </div>
        );
      })}
      <div>
        <button onClick={add}>新增问卷</button>
      </div>
    </div>
  );
};

export default List;
