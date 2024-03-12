import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

// F0E7D9
// -5px 3px 8px rgba(0,0,0,0.5)
// F5F0E8
// 0 20px 20px rgba(0,0,0,0.15)
export default function Home() {
  return (
    <main className="py-16">
      <p className="text-xl font-bold text-decorate-float-box">*** 님의 서재</p>
      <p className="text-lg my-3 font-300 text-gray-500">총 N 권을 읽으셨어요!</p>
      <section className="my-8">
        <p className="text-xl mb-5 text-decorate-under">내가 읽은 책</p>
        <div className="flex space-x-4">
          <div className="flex flex-col items-center">
            <div className=" shadow-horizontal">
              <Image
                alt="book"
                src="/book.png"
                width={200}
                height={200}
              ></Image>
            </div>
            <div className="relative transform -translate-y-6  -z-10 shadow-200">
              <div className="bg-beige-500 w-80 h-10 block"></div>
              <div className="bg-beige-400 w-80 h-5 block"></div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className=" shadow-horizontal">
              <Image
                alt="book"
                src="/book.png"
                width={200}
                height={200}
              ></Image>
            </div>
            <div className="relative transform -translate-y-6  -z-10 shadow-200">
              <div className="bg-beige-500 w-80 h-10 block"></div>
              <div className="bg-beige-400 w-80 h-5 block"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
