import React, { FC } from 'react';
import './QuestionCard.css';
//自定义传递类型
type PropsType = {
  id: string;
  title: string;
  isPublished: boolean;
};

//单个问卷条目子组件
const QuestionCard: FC<PropsType> = (props) => {
  const { id, title, isPublished } = props;
  return (
    <div key={id} className="item-list">
      <strong>{title}</strong>
      {isPublished ? (
        <button className="item-list-pub">已发布</button>
      ) : (
        <button>未发布</button>
      )}
    </div>
  );
};

export default QuestionCard;
