import React, { FC } from 'react';
import styles from './QuestionCard.module.scss';
import { Button, Divider, Space, Tag } from 'antd';
import { Link } from 'react-router-dom';
import {
  EditOutlined,
  LineChartOutlined,
  DeleteOutlined,
  CopyOutlined,
  StarOutlined,
} from '@ant-design/icons';

//定义类型
type PropsType = {
  _id: string;
  title: string;
  isPulished: boolean;
  isStar: boolean;
  answerCount: number;
  creatAt: string;
};

const QuestionCard: FC<PropsType> = (props: PropsType) => {
  const { _id, title, creatAt, answerCount, isPulished, isStar } = props;
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        {/* 标题 */}
        <div className={styles.left}>
          <Link
            to={isPulished ? `/question/stat/${_id}` : `/question/edit/${_id}`}
          >
            <Space>
              {isStar && <StarOutlined style={{ color: 'red' }} />}
              {title}
            </Space>
          </Link>
        </div>
        <div className={styles.right}>
          <Space>
            {isPulished ? (
              <Tag color="processing">已发布</Tag>
            ) : (
              // <span className={styles.pub}>已发布</span>
              <Tag>未发布</Tag>
            )}
            <span>答卷：{answerCount}</span>
            <span>{creatAt}</span>
          </Space>
        </div>
      </div>
      <Divider style={{ margin: '10px 0' }} />
      {/* 下部分 */}
      <div className={styles['button-container']}>
        <div className={styles.left}>
          <Button type="text" icon={<EditOutlined />}>
            编辑问卷
          </Button>
          <Button type="text" icon={<LineChartOutlined />}>
            数据统计
          </Button>
        </div>
        <div className={styles.right}>
          <Button type="text" icon={<StarOutlined />}>
            标星
          </Button>
          <Button type="text" icon={<CopyOutlined />}>
            复制
          </Button>
          <Button type="text" icon={<DeleteOutlined />}>
            删除
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
