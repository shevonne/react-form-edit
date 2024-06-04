import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
const MainLayout: FC = () => {
  return (
    <>
      <div>Mainlayout header</div>
      <Outlet />
      <div>Mainlayout footer</div>
    </>
  );
};

export default MainLayout;
