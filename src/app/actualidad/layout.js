import React from 'react'

function Layout({ children }) {
  return (
    <main className='flex flex-col place-items-center'>
      {children}
    </main>
  );
}

export default Layout