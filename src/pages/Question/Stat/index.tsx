//统计
import React, { FC } from 'react';
import useLoadQuestionData from '../../../Hooks/useLoadQuestionData';

const Stat: FC = () => {
  const { loading, questionData } = useLoadQuestionData();
  return (
    <div>
      <p>问卷统计</p>
      {loading ? <p>加载中</p> : <p>{JSON.stringify(questionData)}</p>}
    </div>
  );
};

export default Stat;
