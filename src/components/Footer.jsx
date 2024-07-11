import React from 'react'
import Linkedin from '../../public/footer/linkedin-icon.svg'
import Instagram from '../../public/footer/instagram-icon.svg'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='w-full flex flex-col py-3 px-5 gap-2 items-center align-center bg-black text-white text-sm sm:flex-row sm:justify-between'>
      <div className="flex gap-5">
        <a href="https://newvalue.es/politica-privacidad" className="politica">política de cookies </a>
        <a href="https://newvalue.es/politica-privacidad" className="aviso"> aviso legal</a>
      </div>
      <div className="flex gap-3 place-items-center">
        <p className='self-center flex gap-2 mr-2'>
          <a href="mailto:info@newvalue.es?subject=" className="underline">info@newvalue.es</a>
          |
          <a href="tel:+34611135293" className="underline">+34 611 135 293</a>
        </p>
        <a href="https://www.linkedin.com/company/new-value-generation/">
          <Image priority src={Linkedin} alt="icon-linkedin" width={25} /> </a>
        <a href="https://www.instagram.com/newvaluegeneration/">
          <Image priority src={Instagram} alt="icon-instagram" width={28} /> </a>
      </div>
    </footer>
  )
}

export default Footer