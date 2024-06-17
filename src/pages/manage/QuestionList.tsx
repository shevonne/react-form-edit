import React, { FC, useEffect, useState } from 'react';
import styles from './Common.module.scss';
import { useTitle, useRequest } from 'ahooks';
import QuestionCard from '../../components/QuestionCard';
import { Empty, Typography } from 'antd';
import ListSearch from '../../components/ListSearch';
import { getQustionListService } from '../../services/question';

const { Title } = Typography;
const List: FC = () => {
  useTitle('我的');

  const { data = {}, loading } = useRequest(getQustionListService);
  const { list = [], total = 0 } = data;
  //请求列表数据
  // const [list, setList] = useState([]);
  // const [total, setTotal] = useState(0);
  // useEffect(() => {
  //   async function load() {
  //     const data = await getQustionListService();
  //     const { list, total } = data;
  //     setList(list);
  //     setTotal(total);
  //   }
  //   load();
  // }, []);

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
        {list.length > 0 &&
          list.map((item: any) => {
            const { _id } = item;
            return <QuestionCard key={_id} {...item} />;
          })}
      </div>
      <div className={styles.footer}>Load more ...</div>
    </>
  );
};

export default List;
