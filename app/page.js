'use client';
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white">
      {/* Hero */}
      <section className="text-center py-20 px-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
       <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-yellow-400 to-green-500 bg-clip-text text-transparent animate-gradient-x">
        ยินดีต้อนรับสู่เว็บไซต์!
        </h1>
        <p className="text-lg sm:text-xl mb-6">Next.js + Tailwind CSS พร้อม Dark Mode</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/about">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-gray-100 font-semibold transition-transform duration-300 hover:scale-105">
              เกี่ยวกับเรา
            </button>
          </Link>
          <Link href="/service">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-gray-100 font-semibold transition-transform duration-300 hover:scale-105">
              ดูสินค้า
            </button>
          </Link>
        </div>
      </section>

      {/* สินค้า / Feature */}
      <section className="py-16 px-8 text-center">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-indigo-500 to-blue-400 bg-clip-text text-transparent">
          สินค้าแนะนำ
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[1, 2, 3].map((id) => (
            <div
              key={id}
              className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-transform duration-300 hover:scale-105 dark:bg-zinc-800"
            >
              <Image
                src="/next.svg"
                alt={`สินค้า ${id}`}
                width={80}
                height={80}
                className="mx-auto mb-4 dark:invert transition-transform duration-500 hover:rotate-12"
              />
              <h3 className="text-xl font-semibold">สินค้า {id}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">รายละเอียดสินค้า</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm bg-zinc-100 dark:bg-zinc-800 rounded-t-lg shadow-inner">
        <p>© 2025 เว็บไซต์ของคุณ สงวนลิขสิทธิ์</p>
      </footer>
    </div>
  );
}
