import DeleteNewsButton from '@/components/DeleteButton';
import NewsForm from '@/components/NewsForm';
import { getNewsById } from '@/services/newsServices';
import React from 'react'

async function EditNews({ params }) {
  const { newsId } = params;
  const newsData = await getNewsById(newsId);

  return (
    <div>
      <NewsForm newsId={newsId} method="put" newsData={newsData}/>
      <DeleteNewsButton newsId={newsId} />
    </div>
  )
}

export default EditNews