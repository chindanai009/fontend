'use client';
import Carousel from "./components/carousel";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
    <Carousel />
    <div className="min-h-screen bg-white text-zinc-900 dark:text-white">
      <Footer/>
      {/* Hero */}
      <section
       className="relative text-center py-24 px-6 bg-gradient-to-tr from-indigo-600 via-purple-500 to-pink-500 text-white overflow-hidden">
      </section>
    </div>
    </>
  );
}
