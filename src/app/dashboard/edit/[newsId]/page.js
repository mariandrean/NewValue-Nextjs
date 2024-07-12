import DeleteNewsButton from '@/components/DeleteButton';
import React from 'react'

function EditNews({ params }) {
  const { newsId } = params;

  return (
    <div>EditNews {newsId}
      <DeleteNewsButton newsId={newsId} />
    </div>
  )
}

export default EditNews