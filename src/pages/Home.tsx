import React, { FC } from 'react';
import { HOME_PATHNAME, MANAGE_INDEX_PATHNAME } from '../router';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.scss';
import { Button, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const Home: FC = () => {
  const nav = useNavigate();
  const goToLogin = () => {
    nav({
      pathname: MANAGE_INDEX_PATHNAME,
      search: 'username=shevon',
    });
  };
  return (
    <div className={styles.container}>
      <Title>问卷调查 | 在线投票</Title>
      <Paragraph>
        已累计创建问卷1090份，发布问卷100份，收到答卷10000份
      </Paragraph>
      <div>
        <Button onClick={goToLogin} type="primary" size="large">
          开始使用
        </Button>
      </div>
    </div>
  );
};

export default Home;
