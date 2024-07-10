//统计
import React, { FC } from 'react';
import useLoadQuestionData from '../../../Hooks/useLoadQuestionData';

const Stat: FC = () => {
  const { loading, data } = useLoadQuestionData();
  return (
    <div>
      <p>问卷统计</p>
      {loading ? <p>加载中</p> : <p>{JSON.stringify(data)}</p>}
    </div>
  );
};

export default Stat;
