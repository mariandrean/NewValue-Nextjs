import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <>

      <main className="max-w-[1000px] m-5">
        {children}
      </main>
      <Footer />
    </>
  );
}
