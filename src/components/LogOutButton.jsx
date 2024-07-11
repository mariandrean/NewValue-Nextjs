"use client";

import { redirect } from 'next/navigation';
import { useUserContext } from '../context/UserContext';

const LogOutButton = () => {
  const { setUser, setUserAuth } = useUserContext();
  
  const handleLogOut = () => {
    localStorage.removeItem('token');
    setUser(null);
    setUserAuth(null);
    return redirect("/");
  }

  return (
    <button onClick={handleLogOut} className="flex gap-3 items-center px-2 hover:text-black hover:bg-white ">
      <p>Cerrar Sesión</p>
    </button>
  );
}

export default LogOutButton;