import Image from "next/image";
export default function BookShelveList() {
  return (
    <div className="flex flex-col items-center">
      <div className="shadow-horizontal">
        <Image alt="book" src="/book.png" width={200} height={200}></Image>
      </div>
      <div className="relative transform -translate-y-6 -z-10 shadow-200">
        <div className="bg-beige-500 w-80 h-10 block"></div>
        <div className="bg-beige-400 w-80 h-5 block"></div>
      </div>
    </div>
  );
}
