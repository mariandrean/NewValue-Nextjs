import { getNewsById } from '@/services/newsServices'
import dateConverter from '@/utils/dateConverter';
import parse from 'html-react-parser'
import React from 'react'

async function NewsDetails({ params }) {
  const { newsId } = params;
  const news = await getNewsById(newsId);
  const categories = news.category.split(",");

  return (
    <div className='max-w-[1000px]'>
      <h1 className="font-semibold text-lg mb-5">ACTUALIDAD</h1>
      {
        <section className='flex-col md:grid grid-cols-9 gap-12 place-content-center place-items-center'>
          <img src={news.image} alt={news.title} className='col-span-4 object-cover place-self-start h-full max-h-[700px] mb-6' />
          <div className='col-span-5 place-self-start flex flex-col gap-5'>
            <p className='text-xs'>{dateConverter(news.date)}</p>
            <h1 className='font-semibold'>{news.title}</h1>
            {news.subtitle && <h3 className='font-normal'>{news.subtitle}</h3>}
            <div>{parse(news.content)}</div>
            {categories &&
              <div className='flex gap-5'>
                {categories.map((category, index) =>
                  <a key={index} className={category ? "cursor-pointer self-center text-xs border-2 rounded py-1 px-2 hover:bg-gray-200 transition duration-300 ease-in-out" : "hidden"}>
                    {category}
                  </a>)}
              </div>
            }
            <hr />
          </div>
        </section>
      }
    </div>
  )
}

export default NewsDetails