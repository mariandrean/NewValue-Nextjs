import { getAllNews } from '@/services/newsServices'
import Link from 'next/link';
import React from 'react'

async function Dashboard() {
  const news = await getAllNews();

  return (
    <div className='flex flex-col gap-5'>

      {/*     {role === 'admin' && (
      <div className="flex justify-center w-full">
        <button type="button" onClick={handleRegister} className=" text-sm bg-black text-white border-green-900 rounded-lg font-semibold py-2 px-4 hover:bg-gray-800 transition duration-300 ease-in-out">
          Registrar moderador
        </button>
      </div>
    )} */}

      <div className="flex justify-between items-center w-full">
        <h3 className="font-semibold text-lg sm:text-xl">Noticias publicadas</h3>
        <Link href='/dashboard/add' className="text-sm bg-teal-500 text-white border-green-900 rounded-lg font-semibold py-2 px-4 hover:bg-teal-800 transition duration-300 ease-in-outtext-sm">
          Nueva Noticia
        </Link>
      </div>

      {
        <div className='flex flex-col gap-3 w-full'>
          {news.map((newsItem, index) => (
            <article key={index} >
              <hr className='mb-3' />
              <div className="flex items-center gap-3 h-[120px]">
                <Link href={`/actualidad/${newsItem.id}`} className='h-full w-1/3 sm:w-[300px]' >
                  <img src={newsItem.image} className='h-full w-full  object-cover rounded-lg' />
                </Link>
                <div className="flex flex-col w-2/3 sm:w-full justify-between h-full p-0.5">
                  <Link href={`/actualidad/${newsItem.id}`} className='flex flex-col justify-around'>
                    <p className="text-gray-500 text-xs sm:text-sm">{newsItem.date}</p>
                    <h2 className="text-sm sm:text-base md:text-lg text-gray-900 mb-2">
                      {newsItem.title.length < 70 ? newsItem.title : (newsItem.title?.slice(0, 70) + "...")}
                    </h2>
                  </Link>
                  <div className='flex gap-2 justify-end'>
                    <Link href={`/dashboard/edit/${newsItem.id}`} className="bg-teal-500 text-white border-green-900 rounded-lg font-semibold py-2 px-4 hover:bg-teal-800 transition duration-300 ease-in-out text-xs ">Editar</Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      }
    </div>
  )
}

export default Dashboard