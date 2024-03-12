"use client";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { getCookie } from "cookies-next";
import CtaButton from "./base/CtaButton";
import AxiosInstance from "@/utils/AxiosInstance";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { useRecoilState } from "recoil";
import { useEffect, useRef, useState } from "react";
import { userStore } from "../store/userStore";
import Image from "next/image";
import TopBarDropdownMenu from "./ProfileDropdownMenu";
import ProfileWithDropdown from "./ProfileWithDropdown";

const TopBar = (props: any) => {
  const jwtCookie = getCookie("jwt");
  const isLogin = !!jwtCookie;
  const router = useRouter();
  const [user, setUser] = useRecoilState(userStore);
  const [openDropdownMenu, setOpendropdownMenu] = useState(false);
  const dropdownMenuWrapperRef = useRef<HTMLDivElement | null>(null);

  const { isPending, error, data } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const { data } = await AxiosInstance.get("/profile");
      setUser(data);
      return data;
    },
    enabled: isLogin,
  });

  const toggleDropdown = () => {
    setOpendropdownMenu((prev) => !prev);
  };

  const LoginTopBarView = () => {
    return (
      <>
        <div>서재</div>
        <CtaButton>
          <span>스켈레톤</span>
        </CtaButton>
      </>
    );
  };

  return (
    <header className="py-4 px-12 flex items-center border-b-1 border-gray-900">
      <div className="hover:cursor-pointer" onClick={() => router.push("/")}>
        BookLog
      </div>

      <div className="flex items-center ml-auto space-x-2">
        {isLogin && isPending ? (
          <LoginTopBarView />
        ) : (
          <>
            <CtaButton
              onClick={() => {
                router.push("/login");
              }}
            >
              <span>통계</span>
            </CtaButton>
            <CtaButton
              onClick={() => {
                router.push("/login");
              }}
            >
              <span>서재</span>
            </CtaButton>

            {!user ? (
              <CtaButton
                onClick={() => {
                  router.push("/login");
                }}
              >
                <span>로그인</span>
              </CtaButton>
            ) : (
              user && <ProfileWithDropdown />
            )}
          </>
        )}
      </div>
    </header>
  );
};

export default TopBar;
