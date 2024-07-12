"use client";

import { deleteNews } from '@/services/newsServices';
import { useRouter } from 'next/navigation';
import React from 'react'
import Swal from 'sweetalert2';

function DeleteNewsButton({newsId}) {
  const router = useRouter();
  const token = localStorage.getItem('token');

  const handleDelete = (id) => {
    Swal.fire({
      title: '¿Eliminar noticia?',
      showDenyButton: true,
      confirmButtonText: "Eliminar",
      denyButtonText: `Cancelar`
    }).then(async (result) => {
      if (result.isConfirmed) {
        console.log(id,token);
        await deleteNews(id, token);
        Swal.fire({
          icon: 'success',
          title: 'Noticia eliminada',
          showConfirmButton: true,
          timer: 2000,
        });
        router.push('/dashboard');
      }
    })
    ;
  }

  return (
    <button type="button" onClick={() => handleDelete(newsId)} className="bg-red-500 text-white border-red-900 rounded-lg font-semibold py-2 px-4 hover:bg-red-700 transition duration-300 ease-in-out text-xs ">Eliminar</button>
  )
}

export default DeleteNewsButton