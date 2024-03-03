import React from 'react';
import TestimonialSlider from './TestimonialSlider';
import { testimonial } from '../data';
const Testimonial = () => {

  const { title, image, persons } = testimonial;

  return <section className='section'>
    <div className='container mx-auto'>
      <div className='flex  flex-col lg:flex-row lg:gap-x-10 gap-y-2'>
        <div className='lg:max-w-[50%]'>
          <h2 className='title mb-9'>{title}</h2>
          {/* slide */}
          <TestimonialSlider />
        </div>
        <div className='order-1'>
          <img src={image.type} alt="" />
        </div>
      </div>
    </div>
  </section>;
};

export default Testimonial;
