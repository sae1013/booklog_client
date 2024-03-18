import { useState, FormEvent, useRef, useEffect } from "react";
import Dropdown from "@/components/Dropdown";
import Image from "next/image";
import AxiosInstance from "@/utils/AxiosInstance";
import { Book } from "@/store/types";
import { FaCircleCheck as IconFaCircleCheck } from "react-icons/fa6";
import { useSelectedBookStore } from "@/store/stores";

export default function BookSearchModal() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { selectedBook, setSelectedBook, clearSelectedBook } =
    useSelectedBookStore();

  const [searchOption, setSearchOption] = useState<"title" | "isbn">("title");
  const [searchedBooks, setSearchedBooks] = useState<Book[]>([]);

  const fetchData = async (userInput: string) => {
    try {
      const response = await AxiosInstance.get(
        `/book/search/naver?title=${userInput}`
      );
      return response.data;
    } catch (err) {
      return err;
    }
  };
  const isPending = false;
  const clickBookSearch = async (event: FormEvent) => {
    event.preventDefault();
    const userInput = inputRef.current?.value;
    const data = await fetchData(userInput as string);
    setSearchedBooks(data.items);
  };
  useEffect(() => {
    console.log("rerender", selectedBook);
  });

  return (
    <form
      className="max-w-md mx-auto"
      onSubmit={clickBookSearch}
      style={{
        maxHeight: "740px",
      }}
    >
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          ref={inputRef}
          type="search"
          id="search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={`${
            searchOption === "title"
              ? "책 제목을 입력해주세요"
              : "ICBN을 입력해주세요"
          }`}
          required
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>
      <Dropdown setSearchOption={setSearchOption} />
      {isPending ? (
        <div>Loading...</div>
      ) : (
        <div
          style={{ overflow: "scroll", maxHeight: "600px" }}
          className="w-full mt-5 space-y-4 pb-4"
        >
          {searchedBooks?.map((book) => {
            return (
              <div
                onClick={() => {
                  setSelectedBook(book);
                }}
                key={book.isbn}
                className={`flex relative border rounded-xl p-4 hover:outline hover:border hover:border-blue-400 hover:outline-none shadow-md ${
                  selectedBook?.isbn === book.isbn && "border-2 border-blue-400"
                }`}
              >
                {selectedBook?.isbn === book.isbn && (
                  <IconFaCircleCheck
                    className="absolute right-4 top-4"
                    fill="green"
                    size={30}
                    color="white"
                  />
                )}

                <Image
                  alt={book.title}
                  width={100}
                  height={200}
                  className="outline outline-neutral-300"
                  src={book.image}
                ></Image>
                <div className="p-4 space-y-2">
                  <h1>{book.title}</h1>
                  <h3>{book.publisher}</h3>
                  <p>{book.author}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </form>
  );
}
