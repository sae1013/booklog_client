"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Button, Text, Modal } from "@mantine/core";
import { modals } from "@mantine/modals";
import { useDisclosure } from "@mantine/hooks";
import BookSearchModal from "@/components/BookSearchModal";
import { useRecoilState } from "recoil";
import AxiosInstance from "@/utils/AxiosInstance";
import { useSelectedBookStore } from "@/store/stores";
import { useRef } from "react";
export default function LibaryPage() {
  const { selectedBook, setSelectedBook, clearSelectedBook } =
    useSelectedBookStore();

  const selectedBookRef = useRef(selectedBook);
  const handleClickConfirm = () => {
    AxiosInstance.post("/book/save", {
      data: selectedBookRef.current,
    });
  };
  useEffect(() => {
    selectedBookRef.current = selectedBook;
  }, [selectedBook]);

  const openModal = () =>
    modals.openConfirmModal({
      title: "도서검색",
      children: <BookSearchModal />,
      labels: { confirm: "선택", cancel: "취소" },
      onClose: () => {
        clearSelectedBook();
      },

      onConfirm: handleClickConfirm,
    });
  return (
    <main className="py-16">
      <p className="text-xl font-bold text-decorate-float-box">*** 님의 서재</p>
      <p className="text-lg my-3 font-300 text-gray-500">
        총 N 권을 읽으셨어요!
      </p>
      {/* <section>
        <p className="text-xl mb-5 text-decorate-under">읽고있는 책</p>
        <div className="flex space-x-4">
          <div className="w-52 h-72 bg-red-400"></div>
          <div className="w-52 h-72 bg-red-400"></div>
          <div className="w-52 h-72 bg-red-400"></div>
          <div onClick={openModal} className="w-52 h-72 bg-red-400"></div>
        </div>
      </section> */}
      <section className="my-10">
        <p className="text-xl mb-5 text-decorate-under">내가 읽은 책</p>
        <div className="flex space-x-4">
          <div className="flex flex-col items-center">
            <div className=" shadow-horizontal">
              <Image
                alt="book"
                src="/book.png"
                width={200}
                height={296}
              ></Image>
            </div>
          </div>
        </div>
        <div className="relative transform -translate-y-6  -z-10 shadow-200">
          <div className="bg-beige-500 w-full h-10 block"></div>
          <div className="bg-beige-400 w-full h-5 block"></div>
        </div>
      </section>
    </main>
  );
}
