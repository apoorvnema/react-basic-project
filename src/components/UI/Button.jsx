import React from 'react'
import './Button.css'

const Button = ({onClick, isDel, title}) => {
  return (
    <>
        <button onClick={onClick} className={`btn ${isDel ? 'del' : ''}`}>{title}</button>
    </>
  )
}

export default Button