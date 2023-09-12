import React from 'react';
import arrow from '../assets/images/icon-arrow.svg';

const ArrowIcon = () => {
  return (
    <div className='icon_section'>
        {/* <hr className='icon_line'></hr> */}
        <div className="icon_line"></div>
        <img src={arrow} className='icon'></img>
    </div>
  )
}

export default ArrowIcon