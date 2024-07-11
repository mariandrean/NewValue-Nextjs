"use client";

import DashboardMenu from "@/components/DashboardMenu";
import { useUserContext } from "@/context/UserContext";
import { redirect } from "next/navigation";

export default function PrivateLayout({ children }) {
  const token = localStorage.getItem("token");
  const { userAuth } = useUserContext();

  if (!token && !userAuth) {
    redirect("/login");
  }

  else return (
    <>
      <DashboardMenu />
      <main className="max-w-[1000px] p-5">
        {children}
      </main>
    </>
  );
}