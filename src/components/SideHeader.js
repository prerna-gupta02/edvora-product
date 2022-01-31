import React from 'react';
import ProductList from './ProductList';

const SideHeader = ({ distinctP, data }) => {
  return <div className='product-section'>
      <div className='heading'>
        <h1>Edvora</h1>
        <h3>Products</h3>
      </div>
      {console.log(distinctP)}
      {distinctP && distinctP.map(product => <ProductList key={product} data={data} productName={product} />)}
  </div>;
};

export default SideHeader;
