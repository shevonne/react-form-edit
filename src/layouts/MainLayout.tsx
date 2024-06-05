import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import styles from './MainLayout.module.scss';
const { Header, Footer, Content } = Layout;
const MainLayout: FC = () => {
  return (
    <Layout>
      <Header className={styles.header}>
        <div className={styles.left}>LOGO</div>
        <div className={styles.right}>登录 </div>
      </Header>
      <Content className={styles.main}>
        <Outlet />
      </Content>
      <Footer className={styles.footer}>
        低代码问卷 &copy; 2024 - present. Created by shevon
      </Footer>
    </Layout>
  );
};

export default MainLayout;
