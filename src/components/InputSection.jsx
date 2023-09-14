import React from 'react'

const InputSection = (props) => {

  return (
    <div className='input_section'>
        <div className="input_item">
            <label className='input_label'>DAY</label>
            <input name="day" className='input_text' defaultValue={props.day} onChange={e => props.setDay(e.target.value)}></input>
        </div>
        <div className="input_item">
            <label className='input_label'>MONTH</label>
            <input name="month" className='input_text' defaultValue={props.month} onChange={e => props.setMonth(e.target.value)}></input>
        </div>
        <div className="input_item">
            <label className='input_label'>YEAR</label>
            <input name="year" className='input_text' defaultValue={props.year} onChange={e => props.setYear(e.target.value)}></input>
        </div>
    </div>
  )
}

export default InputSection