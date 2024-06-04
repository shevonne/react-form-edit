import React, { FC } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import styles from './ManageLayout.module.scss';
import { Button, Space } from 'antd';
import {
  PlusOutlined,
  UnorderedListOutlined,
  StarOutlined,
  DeleteOutlined,
} from '@ant-design/icons';

const ManageLayout: FC = () => {
  //跳转导航
  const nav = useNavigate();
  //获取当前url
  const pathName = useLocation().pathname;
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Space direction="vertical" size="middle">
          <Button type="primary" icon={<PlusOutlined />}>
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
