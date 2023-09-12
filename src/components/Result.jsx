import React from 'react'

const Result = (props) => {
  return (
    <div className='result'>
        <div className="result_item">
            <span className='result_value'>{props.result.years}</span>
            <span className='result_text'>years</span>
        </div>
        <div className="result_item">
            <span className='result_value'>{props.result.months}</span>
            <span className='result_text'>months</span>
        </div>
        <div className="result_item">
            <span className='result_value'>{props.result.days}</span>
            <span className='result_text'>days</span>
        </div>
    </div>
  )
}

export default Result