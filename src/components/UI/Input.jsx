import React from 'react'
import './Input.css'

const Input = ({title, value, onChange}) => {
  return (
    <div className='input-container'>
        <label className='label' htmlFor={title}>{title}</label>
        <input className='input' type="text" id={title} value={value} onChange={onChange}/>
    </div>
  )
}

export default Input