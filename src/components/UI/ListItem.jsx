import React from 'react'
import './ListItem.css'
import Button from './Button'

const ListItem = ({ url, title, handleEdit, handleDelete }) => {
  return (
    <div className='list-container'>
      <h3 className='title'>{title}</h3>
      <a className='url' href={url} target="_blank" rel="noopener noreferrer">{url}</a>
        <Button onClick={handleEdit} title="Edit" />
        <Button onClick={handleDelete} isDel title="Delete" />
    </div>
  )
}

export default ListItem