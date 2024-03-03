import React from 'react';
import { navigation } from '../data';

const NavMobile = () => {
  return <div className='bg-white w-full h-full shadow-2xl'>
    <ul className='text-center h-full flex justify-center items-center flex-col gap-y-6'>
      {navigation.map((item, index) => {
        return <li className='capitalize text-xl font-medium' key={index}>
          <a href={item.href}>{item.name}</a>
        </li>
      })}
    </ul>
  </div>;
};

export default NavMobile;
