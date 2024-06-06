import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { LOGIN_PATHNAME } from '../router';

const UserInfo: FC = () => {
  return (
    <div>
      <Link to={LOGIN_PATHNAME}>登录</Link>
    </div>
  );
};

export default UserInfo;
