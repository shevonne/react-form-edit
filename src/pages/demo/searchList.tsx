import React, { FC } from 'react';
const SearchList: FC = () => {
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
  const filterArray: CategoryItem[] = [
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
  function NamePriceList(dataArray: CategoryItem[]) {
    return (
      <div>
        <p className="table-title">
          <span>Name</span>
          <span>Price</span>
        </p>
        {dataArray.map((item) => {
          return (
            <CataLogList
              cateTitle={item.category}
              data={item.child}
              key={item.category}
            />
          );
        })}
      </div>
    );
  }

  //ul列表
  function CataLogList({
    cateTitle,
    data,
  }: {
    cateTitle: string;
    data: ChildItem[];
  }) {
    return (
      <div>
        <h3>{cateTitle}</h3>
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
    const { name, price } = props;
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
