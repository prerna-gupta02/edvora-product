import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import ProductCard from './ProductCard';

const ProductList = ({ data, productName }) => {
    // console.log(data.data)
    const [productList, setProductList] = useState([]);
    useEffect(() => {
        setProductList(data.data.filter(i =>
            i.product_name  === productName
        ))
    }, []);
    // setProductList(itemArr);
  return <div className='product-list'>
      <h1 className='product-name'>{productName}</h1>
      <hr />
      <div className='product-cards'>
          {
              productList.map((item, index) => <ProductCard item={item} key={index} /> )
          }
      </div>
  </div>;
};

export default ProductList;
