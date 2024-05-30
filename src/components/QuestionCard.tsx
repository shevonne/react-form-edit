import React, { FC } from 'react';
import './QuestionCard.css';
//自定义传递类型
type PropsType = {
  id: string;
  title: string;
  isPublished: boolean;
  deleteQuestion: (id: string) => void;
  publishQuestion: (id: string) => void;
};

//单个问卷条目子组件
const QuestionCard: FC<PropsType> = (props) => {
  const { id, title, isPublished, deleteQuestion, publishQuestion } = props;
  return (
    <div key={id} className="item-list">
      <strong>{title}</strong>
      {isPublished ? (
        <span className="item-list-pub">已发布</span>
      ) : (
        <span>未发布</span>
      )}

      <button
        onClick={() => {
          deleteQuestion(id);
        }}
      >
        删除问卷
      </button>
      <button
        onClick={() => {
          publishQuestion(id);
        }}
      >
        发布问卷
      </button>
    </div>
  );
};

export default QuestionCard;
