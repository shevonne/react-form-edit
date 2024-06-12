// 星标问卷
import React, { FC, useState } from 'react';
import styles from './Common.module.scss';
import { useTitle } from 'ahooks';
import QuestionCard from '../../components/QuestionCard';
import { Empty, Typography } from 'antd';
import ListSearch from '../../components/ListSearch';
//mock数据
const rowQuestionList = [
  {
    _id: 'req1',
    title: '问卷1',
    isPulished: true,
    isStar: true,
    answerCount: 3,
    creatAt: '3月11日 13:20',
  },
  {
    _id: 'req2',
    title: '问卷2',
    isPulished: false,
    isStar: true,
    answerCount: 0,
    creatAt: '3月12日 14:30',
  },
];

const { Title } = Typography;

const Star: FC = () => {
  useTitle('星标问卷');
  const [questionList, SetQuestionList] = useState(rowQuestionList);
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>我的问卷</Title>
        </div>
        <div className={styles.right}>
          <ListSearch />
        </div>
      </div>
      <div className={styles.content}>
        {questionList.length === 0 && <Empty description="暂无数据" />}
        {questionList.map((item) => {
          const { _id } = item;
          return <QuestionCard key={_id} {...item} />;
        })}
      </div>
      <div className={styles.footer}>分页</div>
    </>
  );
};

export default Star;
