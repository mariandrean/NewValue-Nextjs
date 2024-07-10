import LoginForm from '@/components/LoginForm';
import React from 'react'

function LoginPage() {

  return (
    <div className="flex flex-col items-center justify-center gap-5 m-10">
      <h1 className="text-3xl text-center font-semibold">Iniciar sesión</h1>
      <p className="text-center">(Sólo personal del sitio)</p>
      <LoginForm />
    </div>
  )
}

export default LoginPage;