import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function PublicLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="mt-14 max-w-[1000px] p-5">
        {children}
      </main>
      <Footer />
    </>
  );
}
