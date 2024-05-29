import React, { FC, useState } from 'react';
import QuestionCard from './components/QuestionCard';
const List: FC = () => {
  const [questionList, setQuestionList] = useState([
    { id: 'req1', title: '问卷列表1', show: false },
    { id: 'req2', title: '问卷列表2', show: true },
    { id: 'req3', title: '问卷列表3', show: false },
    { id: 'req4', title: '问卷列表4', show: true },
  ]);
  return (
    <div>
      <h1>问卷调查列表</h1>
      {questionList.map((item) => {
        const { id, title, show } = item;
        return (
          <div>
            <QuestionCard
              id={id}
              title={title}
              isPublished={show}
            ></QuestionCard>
          </div>
        );
      })}
    </div>
  );
};

export default List;
