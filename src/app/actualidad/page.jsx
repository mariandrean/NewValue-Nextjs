import Card from '@/components/Card';
import { getAllNews } from '@/services/newsServices'
import React from 'react'

async function Actualidad () {
  const news = await getAllNews();

  return (
    <div className='max-w-[1000px] '>
      <h1 className="font-semibold text-lg mb-5">ACTUALIDAD</h1>

      {
          <>
            <section className='grid grid-cols-2 gap-5 lg:gap-8 sm:grid-cols-3 md:grid-cols-4 place-content-center' >
              {news.map((newsItem, index) => (
                <article key={index} className={(index == 0) ? 'col-span-2 row-span-2' : ''}>
                  <Card news={newsItem} index={index} />
                </article >
              ))}
            </section>
          </>
      }
    </div>

  )
}

export default Actualidad