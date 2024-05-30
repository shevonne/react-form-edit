import React, { FC, useState } from 'react';
import QuestionCard from './components/QuestionCard';
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
    setQuestionList(
      questionList.concat({
        id: 'req' + randomNumber,
        title: '问卷列表' + randomNumber,
        show: false,
      })
    );
  }

  //删除
  function deleteQuestion(id: string) {
    setQuestionList(
      questionList.filter((q) => {
        if (q.id === id) return false;
        else return true;
      })
    );
  }

  //发布
  function publishQuestion(id: string) {
    setQuestionList(
      questionList.map((q) => {
        if (q.id !== id) return q;
        else {
          return {
            ...q,
            show: true,
          };
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
          <div>
            <QuestionCard
              key={id}
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
