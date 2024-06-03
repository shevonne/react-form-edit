import React, { FC } from 'react';
import styles from './QuestionCard.module.scss';

type PropsType = {
  _id: string;
  title: string;
  isPulished: boolean;
  isStar: boolean;
  answerCount: number;
  creatAt: string;
};
const QuestionCard: FC<PropsType> = (props: PropsType) => {
  const { _id, title, creatAt, answerCount, isPulished } = props;
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.left}>
          <a href="#"> {title}</a>
        </div>
        <div className={styles.right}>
          {isPulished ? (
            <span className={styles.pub}>已发布</span>
          ) : (
            <span>未发布</span>
          )}
          <span>答卷：{answerCount}</span>
          <span>{creatAt}</span>
        </div>
      </div>
      {/* 下部分 */}
      <div className={styles['button-container']}>
        <div className={styles.left}>
          <button>编辑问卷</button>
          <button>数据统计</button>
        </div>
        <div className={styles.right}>
          <button>标星</button>
          <button>复制</button>
          <button>删除</button>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
