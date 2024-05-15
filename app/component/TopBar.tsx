"use client";

import { Logout } from "@mui/icons-material";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "@/app/hooks";
import { getUserData_ById } from "../lib/auth.actions";
import { UserDataProps } from "../type";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

const TopBar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [datafile, setDataFile] = useState<UserDataProps>();
  const [isopen, setOPen] = useState<boolean>(false);

  useEffect(() => {
    const fetch_data = async () => {
      const email = localStorage.getItem("email");
      const userdata = await getUserData_ById({ userId: email! });
      setDataFile(userdata);
    };
    fetch_data();
  }, []);

  const initalData = useAppSelector((state) => state.userSlice);
  return (
    <div className="topbar wrapper">
      <Link href="/chats">
        <Image
          width={100}
          height={100}
          src="/assets/logo.png"
          alt="logo"
          className="logo"
        />
      </Link>

      <div className="menu">
        <Link
          href="/chats"
          className={`${
            pathname === "/chats" ? "text-red-600" : ""
          } text-heading4-bold`}
        >
          Chats
        </Link>
        <Link
          href="/contacts"
          className={`${
            pathname === "/contacts" ? "text-red-600" : ""
          } text-heading4-bold`}
        >
          Contacts
        </Link>

        <Logout
          sx={{ color: "#737373", cursor: "pointer" }}
          onClick={() => router.push("/")}
        />

        <Link href="/profile">
          <Image
            src={
              datafile?.data.loginDetails.profileImage || "/assets/person.jpg"
            }
            alt="profile"
            className="profilePhoto"
            width={100}
            height={100}
          />
        </Link>
      </div>
      <div className="hidden max-sm:block" onClick={() => setOPen(!isopen)}>
        open
      </div>
      <MobileMenu isopen={isopen} setOPen={setOPen} />
    </div>
  );
};

export default TopBar;
