//问卷编辑
import React, { FC } from 'react';
// import { useParams } from 'react-router-dom';
// import { getQuestionService } from '../../../services/question';
import useLoadQuestionData from '../../../Hooks/useLoadQuestionData';

const Edit: FC = () => {
  const { loading, data } = useLoadQuestionData();
  return (
    <div>
      <p>问卷编辑</p>
      {loading ? <p>加载中</p> : <p>{JSON.stringify(data)}</p>}
    </div>
  );
};

export default Edit;
