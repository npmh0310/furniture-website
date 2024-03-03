import React from 'react';
import { products } from '../data';

import ProductSlider from './ProductSlider';
const Products = () => {

  const { title, subtitle, pages } = products

  return <section className='section text-center'>
    <div className='container m-auto'>
      <div>
        <h2 className='title'>{title}</h2>
        <p className='max-w-[639px] mx-auto mb-[50px] lg:mb-[70px]'>{subtitle}</p>
      </div>
      {/* slide */}
      <ProductSlider />
    </div>
  </section>;
};

export default Products;
