import React, { FC, useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import styles from './ManageLayout.module.scss';
import { Button, Space, message } from 'antd';
import { useRequest } from 'ahooks';
import {
  PlusOutlined,
  UnorderedListOutlined,
  StarOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
import { createQuestionService } from '../services/question';

const ManageLayout: FC = () => {
  //跳转导航
  const nav = useNavigate();
  //获取当前url
  const pathName = useLocation().pathname;
  //增加loading 放置按钮发出请求后多次点击不停发送
  //const [loading, setLoading] = useState(false);
  //创建
  // async function handleCreateClick() {
  //   setLoading(true);
  //   const data = await createQuestionService();
  //   console.log(data);
  //   const { id } = data || {};
  //   if (id) {
  //     nav(`/question/edit/${id}`);
  //     message.success('创建成功');
  //     setLoading(false);
  //   }
  // }

  const {
    loading,
    error,
    run: handleCreateClick,
  } = useRequest(createQuestionService, {
    manual: true,
    onSuccess(result) {
      nav(`/question/edit/${result.id}`);
      message.success('创建成功');
    },
  });

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Space direction="vertical" size="middle">
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={handleCreateClick}
            disabled={loading}
          >
            新建问卷
          </Button>
          <Button
            type={pathName.startsWith('/manage/list') ? 'default' : 'text'}
            icon={<UnorderedListOutlined />}
            onClick={() => nav('/manage/list')}
          >
            我的问卷
          </Button>
          <Button
            type={pathName.startsWith('/manage/star') ? 'default' : 'text'}
            icon={<StarOutlined />}
            onClick={() => nav('/manage/star')}
          >
            星标问卷
          </Button>
          <Button
            type={pathName.startsWith('/manage/trash') ? 'default' : 'text'}
            icon={<DeleteOutlined />}
            onClick={() => nav('/manage/trash')}
          >
            回收站
          </Button>
        </Space>
      </div>
      <div className={styles.right}>
        <Outlet />
      </div>
    </div>
  );
};

export default ManageLayout;
