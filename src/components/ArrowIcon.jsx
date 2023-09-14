import React from 'react';
import arrow from '../assets/images/icon-arrow.svg';

const ArrowIcon = (props) => {
  return (
    <div className='icon_section'>
        {/* <hr className='icon_line'></hr> */}
        <div className="icon_line"></div>
        <img src={arrow} className='icon' onClick={e => props.calculate_age()}></img>
    </div>
  )
}

export default ArrowIcon