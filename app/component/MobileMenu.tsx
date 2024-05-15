import React, { useState, useEffect } from "react";
import { Logout } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { getUserData_ById } from "../lib/auth.actions";
import { UserDataProps } from "../type";

interface MobileMenuProps {
  isopen: boolean;
  setOPen: (isOpen: boolean) => void;
}

const MobileMenu = ({ isopen, setOPen }: MobileMenuProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const [datafile, setDataFile] = useState<UserDataProps>();
  console.log(isopen, "boole");

  useEffect(() => {
    const fetch_data = async () => {
      const email = localStorage.getItem("email");
      const userdata = await getUserData_ById({ userId: email! });
      setDataFile(userdata);
    };
    fetch_data();
  }, []);

  const handleLogout = async () => {
    // signOut({ callbackUrl: "/" }); // Implement your logout logic
  };

  return (
    <div
      className={`mobile-menu ${
        isopen ? "right-0 transition-all" : "right-[-155px] transition-all"
      }`}
    >
      <nav className="flex flex-col space-y-4 bg-white rounded-lg p-4 shadow-md gap-3">
        <div>
          <span
            onClick={() => setOPen(!isopen)}
            className="font-bold  bg-blue-800 text-white p-4 w-4 text-center flex justify-center items-center"
          >
            x
          </span>{" "}
        </div>
        {/* Tailwind CSS classes for styling */}
        <nav className="flex flex-col space-y-4 gap-3">
          <Link href="/chats">
            <span
              className={`text-xl font-bold px-4 py-2  rounded-lg ${
                pathname === "/chats"
                  ? "bg-blue-800 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              Chats
            </span>
          </Link>
          <Link href="/contacts">
            <span
              className={`text-xl font-bold px-4 py-2 rounded-lg  ${
                pathname === "/contacts"
                  ? "bg-blue-800 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              Contacts
            </span>
          </Link>
          <Link href="/profile">
            <div className="flex items-center space-x-2">
              <Image
                src={
                  datafile?.data?.loginDetails?.profileImage ||
                  "/assets/person.jpg"
                }
                alt="profile"
                className="profilePhoto w-10 h-10 rounded-full"
                width={100}
                height={100}
              />
              <p className="text-base font-medium">
                {datafile?.data?.loginDetails?.userName || "Profile"}
              </p>{" "}
              {/* Display user's name if available */}
            </div>
          </Link>
          <Logout
            sx={{ color: "#737373", cursor: "pointer" }}
            onClick={() => router.push("/")}
          />
        </nav>
      </nav>
    </div>
  );
};

export default MobileMenu;
