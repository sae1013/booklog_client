import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const DropDownMenu = () => {
  const [openDropdownMenu, setOpendropdownMenu] = useState(false);
  const dropdownMenuWrapperRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setOpendropdownMenu((prev) => !prev);
  };

  const onOutsideClickListener = (event: MouseEvent) => {
    if (
      openDropdownMenu &&
      event.target instanceof Node &&
      !dropdownMenuWrapperRef.current?.contains(event.target)
    ) {
      setOpendropdownMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", onOutsideClickListener);
    return () => {
      window.removeEventListener("click", onOutsideClickListener);
    };
  });

  return (
    <div className="relative inline-block text-left">
      <div onClick={toggleDropdown} ref={dropdownMenuWrapperRef}>
        <button
          id="dropdown-default-button"
          data-dropdown-toggle="dropdown"
          type="button"
          className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none"
        >
          카테고리
          <Image
            width="20"
            height="20"
            alt="right-arrow"
            className=""
            src="/right-arrow.svg"
            priority
          />
        </button>
      </div>
      {openDropdownMenu && (
        <div
          className="absolute z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          tabIndex={-1}
        >
          <div id="dropdown-group" className="py-1" role="none">
            <ul aria-labelledby="dropdown-default-button">
              <li>
                <a
                  href="#"
                  className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-0"
                >
                  카테고리 명명
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-1"
                >
                  리액트
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-1"
                >
                  리액트
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-1"
                >
                  리액트
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDownMenu;
