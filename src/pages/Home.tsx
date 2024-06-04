import React, { FC } from 'react';
import { useNavigate, Link } from 'react-router-dom';
const Home: FC = () => {
  const nav = useNavigate();
  const goToLogin = () => {
    nav({
      pathname: '/login',
      search: 'username=shevon',
    });
  };
  return (
    <div>
      <p>
        <Link to="/manage/list">我的列表</Link>
      </p>
      <div>
        <button onClick={goToLogin}>登录</button>
      </div>
    </div>
  );
};

export default Home;
