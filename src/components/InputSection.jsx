import React from 'react'

const InputSection = () => {
  return (
    <div className='input_section'>
        <div className="input_item">
            <label for="day" className='input_label'>DAY</label>
            <input name="day" className='input_text' value="DD"></input>
        </div>
        <div className="input_item">
            <label for="month" className='input_label'>MONTH</label>
            <input name="month" className='input_text' value="MM"></input>
        </div>
        <div className="input_item">
            <label for="year" className='input_label'>YEAR</label>
            <input name="year" className='input_text' value="YYYY"></input>
        </div>
    </div>
  )
}

export default InputSection