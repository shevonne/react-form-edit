import React, { FC, useState } from 'react';
import styles from './QuestionList.module.scss';
//mock数据
const rowQuestionList = [
  {
    id: 'req1',
    title: '问卷1',
    isPulished: true,
    isStar: true,
    answerCount: 3,
    creatAt: '3月11日 13:20',
  },
  {
    id: 'req2',
    title: '问卷2',
    isPulished: false,
    isStar: false,
    answerCount: 0,
    creatAt: '3月12日 14:30',
  },
  {
    id: 'req3',
    title: '问卷3',
    isPulished: true,
    isStar: false,
    answerCount: 5,
    creatAt: '3月13日 10:45',
  },
  {
    id: 'req4',
    title: '问卷4',
    isPulished: false,
    isStar: true,
    answerCount: 2,
    creatAt: '3月14日 09:00',
  },
  {
    id: 'req5',
    title: '问卷5',
    isPulished: true,
    isStar: true,
    answerCount: 7,
    creatAt: '3月15日 11:55',
  },
  {
    id: 'req6',
    title: '问卷6',
    isPulished: false,
    isStar: true,
    answerCount: 1,
    creatAt: '3月16日 16:10',
  },
];

const List: FC = () => {
  const [questionList, SetQuestionList] = useState(rowQuestionList);

  return (
    <>
      <p>我的问卷</p>
    </>
  );
};

export default List;
