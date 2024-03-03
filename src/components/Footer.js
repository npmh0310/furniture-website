import React from 'react';
import Logo from '../assets/img/logo.svg'
import { footer } from '../data';
const Footer = () => {
  return <footer className='bg-primary text-white section'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row justify-between border-b border-opacity-75 border-gray-700 pb-7 lg:pb-14 mb-14'>
        <a className='mb-6 lg:mb-0' href="#">
          <img src={Logo} alt="" />
        </a>
        <div className='flex gap-x-4'>{footer.social.map((item, index) => {
          return (
            <div className='w-12 h-12 text-2xl bg-gray-700 flex justify-center items-center rounded-full hover:bg-accent transition' key={index}>
              <a href={item.href}>{item.icon}</a>
            </div>
          )
        })}</div>
      </div>
      <div className='text-center'>
        <p>&copy; {footer.copyright}</p>
      </div>
    </div></footer>;
};

export default Footer;
