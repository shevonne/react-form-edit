import React, { useState, FC, useEffect } from 'react';
import type { ChangeEvent } from 'react';
import { Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useSearchParams, useLocation } from 'react-router-dom';
import { LIST_SEARCH_PARAM_KEY } from '../constant';
const { Search } = Input;

const ListSearch: FC = () => {
  const nav = useNavigate();

  const pathname = useLocation().pathname;
  //input输入框值
  const [value, setValue] = useState('');
  const handleSearch = (value: string) => {
    //跳转页面，增加url参数
    nav({
      pathname,
      search: `${LIST_SEARCH_PARAM_KEY}=${value}`,
    });
  };
  //搜索框change
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    console.log('change');
  };

  //获取url参数，并设置到input val
  const [searchParams] = useSearchParams();
  useEffect(() => {
    const curVal = searchParams.get(LIST_SEARCH_PARAM_KEY) || '';
    setValue(curVal);
  }, [searchParams]);

  return (
    <div>
      <Search
        placeholder="输入关键字检索"
        allowClear
        value={value}
        enterButton
        onSearch={handleSearch}
        onChange={handleChange}
        style={{ width: '200px' }}
      />
    </div>
  );
};

export default ListSearch;
