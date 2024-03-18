import { useUserStore } from "@/store/stores";
import AxiosInstance from "@/utils/AxiosInstance";
import { useRef, useEffect, Dispatch, SetStateAction, forwardRef } from "react";

import { LegacyRef } from "react";

interface TopBarDropdownMenuProps {
  onClick: () => void;
}
export default forwardRef(function ProfileDropdownMenu(
  props: TopBarDropdownMenuProps,
  ref: LegacyRef<HTMLDivElement>
) {
  const { user, setUser, clearUser } = useUserStore();

  const clickMenuItem = async (event: MouseEvent) => {
    if (event.target instanceof Node && event.target.id == "signout") {
      const { data } = await AxiosInstance.get("/auth/logout");
      clearUser();
    }
  };
  return (
    <div
      className="absolute top-24 right-4 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabIndex={-1}
      ref={ref}
      onClick={clickMenuItem}
    >
      <div className="py-1" role="none">
        {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
        <a
          href="#"
          className="text-gray-700 block px-4 py-2 text-sm"
          role="menuitem"
          tabIndex={-1}
          id="menu-item-0"
        >
          Account settings
        </a>
        <a
          href="#"
          className="text-gray-700 block px-4 py-2 text-sm"
          role="menuitem"
          tabIndex={-1}
          id="menu-item-1"
        >
          Support
        </a>
        <a
          href="#"
          className="text-gray-700 block px-4 py-2 text-sm"
          role="menuitem"
          tabIndex={-1}
          id="menu-item-2"
        >
          License
        </a>
        <form method="POST" action="#" role="none">
          <button
            type="submit"
            className="text-gray-700 block w-full px-4 py-2 text-left text-sm"
            role="menuitem"
            tabIndex={-1}
            id="signout"
          >
            Sign out
          </button>
        </form>
      </div>
    </div>
  );
});
