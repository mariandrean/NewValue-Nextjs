import LoadingCircle from "@/components/LoadingCircle";

export default function Loading() {

  return (
    <div role="status" className='flex flex-col place-items-center w-full'>
      <LoadingCircle />
      <span>Cargando noticias...</span>
    </div>
  )
}