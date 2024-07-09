import React from 'react'

function EditNews({ params }) {
  const {newsId} = params;
  
  return (
    <div>EditNews {newsId}</div>
  )
}

export default EditNews