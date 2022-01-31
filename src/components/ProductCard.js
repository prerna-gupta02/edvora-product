import React from 'react';

const ProductCard = ({item}) => {
  return (
      <div className='product-card'>
              <div className='info'>
                  <img src={item.image} />
                  <div className='info-details'>
                      <h4 className='product-name-head'>{item.product_name}</h4>
                      <h5 className='brand-name'>{item.brand_name}</h5>
                      <p className='price'><span>$</span>{item.price}</p>
                  </div>
              </div>
              <div className='info'>
                  <p className='location'>Location</p>
                  <p className='date'>Date : {item.date && item.date.slice(0,10)}</p>
              </div>
              <div className='info'>
                  <p className='description'>{item.discription}</p>
              </div>
          </div>
  );
};

export default ProductCard;
