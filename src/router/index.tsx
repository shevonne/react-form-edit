import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

//引入路由
import MainLayout from '../layouts/MainLayout';
import ManageLayout from '../layouts/ManageLayout';
import QuestionLayout from '../layouts/QusetionLayout';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import NotFound from '../pages/NotFound';
import List from '../pages/manage/QuestionList';
import Trash from '../pages/manage/Trash';
import Star from '../pages/manage/Star';
import Edit from '../pages/Question/Edit';
import Stat from '../pages/Question/Stat';

import Todo from '../reducer/index';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/manage',
        element: <ManageLayout />,
        children: [
          {
            path: 'list', //子路由不需要加/
            element: <List />,
          },
          {
            path: 'star',
            element: <Star />,
          },
          {
            path: 'trash',
            element: <Trash />,
          },
        ],
      },
      {
        path: '/todo', //todo
        element: <Todo />,
      },
      {
        path: '*', //404路由 最后
        element: <NotFound />,
      },
    ],
  },
  {
    path: '/question',
    element: <QuestionLayout />,
    children: [
      {
        path: 'edit/:id',
        element: <Edit />,
      },
      {
        path: 'stat/:id',
        element: <Stat />,
      },
    ],
  },
]);

export default router;

//-------------------------------- 常用的路由 -----------------
export const HOME_PATHNAME = '/';
export const LOGIN_PATHNAME = '/login';
export const REGISTER_PATHNAME = '/register';
export const MANAGE_INDEX_PATHNAME = '/manage/list';
