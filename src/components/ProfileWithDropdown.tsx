import { useState, useRef, useEffect } from "react";
import ProfileDropdownMenu from "./ProfileDropdownMenu";
import Image from "next/image";

interface ProfileDropdownMenu {
  onClick?: () => void;
}
export default function ProfileWithDropdown({ onClick }: ProfileDropdownMenu) {
  const [showDropdown, setShowDropdown] = useState(false);
  const ProfileRef = useRef<null | HTMLElement>(null);
  const dropdownMenuRef = useRef<null | HTMLElement>(null);

  const outsideClickListener = (event: MouseEvent) => {
    if (
      showDropdown &&
      event.target instanceof Node &&
      !ProfileRef.current?.contains(event.target)
    ) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", outsideClickListener);
    return () => {
      window.removeEventListener("click", outsideClickListener);
    };
  });

  const toggleDropdownMenu = (event: MouseEvent) => {
    setShowDropdown((prev) => !prev);
  };
  return (
    <>
      <div onClick={toggleDropdownMenu} ref={ProfileRef}>
        <Image
          src="/profile.webp"
          alt="profile image"
          width={64}
          height={64}
          className="w-16 h-16 inline-block rounded-full border-gray-500 object-cover hover:cursor-pointer border border-neutral-300"
        />
      </div>
      {showDropdown && <ProfileDropdownMenu ref={dropdownMenuRef} />}
    </>
  );
}
