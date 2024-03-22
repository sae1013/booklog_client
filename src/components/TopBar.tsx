"use client";
import { getCookie } from "cookies-next";
import CtaButton from "./base/CtaButton";
import AxiosInstance from "@/utils/AxiosInstance";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import ProfileWithDropdown from "./ProfileWithDropdown";
import { useUserStore } from "@/store/stores";

const TopBar = (props: any) => {
  const jwtCookie = getCookie("jwt");
  const isLogin = !!jwtCookie;
  const router = useRouter();
  const { user, setUser } = useUserStore();

  const { isPending, error, data } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const { data } = await AxiosInstance.get("/profile");
      setUser(data);
      return data;
    },
    enabled: isLogin,
  });

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
    <div className="py-4 px-12 flex items-center border-b-1 border-neutral-200">
      <Image
        alt="logo"
        className="hover:cursor-pointer"
        src="/logo_v3.svg"
        priority
        width={100}
        height={50}
        onClick={() => router.push("/")}
      ></Image>
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
            {/* <IoLibrary size={30} /> */}
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
    </div>
  );
};

export default TopBar;
