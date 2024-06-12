// 回收站
import React, { FC, useState } from 'react';
import styles from './Common.module.scss';
import { useTitle } from 'ahooks';
import QuestionCard from '../../components/QuestionCard';
import { Empty, Typography, Table, Tag, Space, Button, Modal } from 'antd';
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
    isStar: false,
    answerCount: 0,
    creatAt: '3月12日 14:30',
  },
  {
    _id: 'req3',
    title: '问卷3',
    isPulished: true,
    isStar: false,
    answerCount: 5,
    creatAt: '3月13日 10:45',
  },
  {
    _id: 'req4',
    title: '问卷4',
    isPulished: false,
    isStar: true,
    answerCount: 2,
    creatAt: '3月14日 09:00',
  },
];

//表格头数据
const columns = [
  {
    title: '标题',
    dataIndex: 'title',
  },
  {
    title: '是否发布',
    dataIndex: 'isPulished',
    render: (isPulished: boolean) => {
      return isPulished ? (
        <Tag color="processing">已发布</Tag>
      ) : (
        <Tag>未发布</Tag>
      );
    },
  },
  {
    title: '答卷',
    dataIndex: 'answerCount',
  },
  {
    title: '创建时间',
    dataIndex: 'creatAt',
  },
];
const { Title } = Typography;

const Trash: FC = () => {
  useTitle('我的');
  const [questionList, SetQuestionList] = useState(rowQuestionList);
  const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>(
    'checkbox'
  );
  const [selectList, SetSelectList] = useState<string[]>([]);

  const { confirm } = Modal;

  //删除
  const del = () => {
    confirm({
      title: 'Confirm',
      content: `确认删除${selectList}吗？`,
      okText: '确认',
      cancelText: '取消',
    });
  };

  //table表格jsx
  const TableElem = (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <Space>
          <Button type="primary">恢复</Button>
          <Button danger onClick={del}>
            删除
          </Button>
        </Space>
      </div>
      <Table
        dataSource={questionList}
        columns={columns}
        rowKey="_id"
        pagination={false}
        rowSelection={{
          type: selectionType,
          onChange: (item) => {
            SetSelectList(item as string[]);
            console.log(selectList);
          },
        }}
      />
    </div>
  );
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
        {questionList.length > 0 && TableElem}
      </div>
    </>
  );
};

export default Trash;
