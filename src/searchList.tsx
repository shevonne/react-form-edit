import React, { FC, useState } from 'react';
const SearchList: FC = () => {
  // const [listdata, SetListData] = useState([
  //   { category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
  //   { category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit' },
  //   { category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit' },
  //   { category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach' },
  //   { category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin' },
  //   { category: 'Vegetables', price: '$1', stocked: true, name: 'Peas' },
  // ]);

  type ChildItem = {
    category: string;
    price: string;
    stocked: boolean;
    name: string;
  };

  type CategoryItem = {
    category: string;
    child: ChildItem[];
  };
  //数据分组
  const filterArray = [
    {
      category: 'Fruits',
      child: [
        { category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
        { category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit' },
        {
          category: 'Fruits',
          price: '$2',
          stocked: false,
          name: 'Passionfruit',
        },
      ],
    },
    {
      category: 'Vegetables',
      child: [
        { category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach' },
        {
          category: 'Vegetables',
          price: '$4',
          stocked: false,
          name: 'Pumpkin',
        },
        { category: 'Vegetables', price: '$1', stocked: true, name: 'Peas' },
      ],
    },
  ];

  // //头部组件
  // function TopSearch() {
  //   return <div></div>;
  // }

  //列表组件
  function NamePriceList(filterArray: CategoryItem) {
    return (
      <div>
        <p className="table-title">
          <span>Name</span>
          <span>Price</span>
        </p>
        {filterArray.map((item) => {
          <CataLogList cateTitle={item.category} data={item.child} />;
        })}
      </div>
    );
  }

  //ul列表
  function CataLogList(cateTitle: string, data: Object) {
    return (
      <div>
        <h3>cateTitle</h3>
        {data.map((item) => {
          return (
            <div key={item.name}>
              <ItemList name={item.name} price={item.price} />
            </div>
          );
        })}
      </div>
    );
  }

  //定义li组件
  type PropsType = {
    name: string;
    price: string;
  };

  function ItemList(props: PropsType) {
    const name = props.name;
    const price = props.price;
    return (
      <li>
        <span>{name}</span>
        <span>{price}</span>
      </li>
    );
  }

  return <div>{NamePriceList(filterArray)}</div>;
};

export default SearchList;
