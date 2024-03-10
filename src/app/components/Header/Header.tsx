"use client";

import { useThemeContext } from "@/context/ThemeContext";
import { ChangeEvent, useState } from "react";
import { IoMoonSharp, IoSunnyOutline } from "react-icons/io5";
import { Switch } from "../Switch";
import { useAuthContext } from "@/context/AuthContext";
import { redirect } from "next/navigation";
import Link from "next/link";
import { SlMenu } from "react-icons/sl";
import { IoMdClose } from "react-icons/io";
import { HeaderMenu } from "./HeaderMenu";

export const Header = () => {
  const themeContext = useThemeContext();
  const authContext = useAuthContext();
  const [showMenu, setShowMenu] = useState(false);

  const toggleTheme = (e: ChangeEvent<HTMLInputElement>) => {
    themeContext?.toggleTheme(e.target.checked);
  };

  const handleLogout = () => {
    authContext?.logout().then(() => {
      redirect("/");
    });
  };

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header
      className={`w-full z-10 top-0 lg:px-0  ${
        themeContext?.isLightMode
          ? "bg-white text-gray-600"
          : "border-b border-gray-600"
      }`}
    >
      <div className="flex max-w-7xl mx-auto items-center justify-between py-4  px-8">
        <p>Project Disney</p>

        <div className="min-h-fit left-0 w-auto hidden md:flex items-center px-5  z-50">
          <div className="flex flex-row items-center gap-[4vw]">
            <HeaderMenu />
          </div>
        </div>

        <div className="flex justify-between items-center gap-5">
          <div className="flex items-center gap-2">
            <IoMoonSharp />
            <Switch
              checked={themeContext?.isLightMode}
              onChange={toggleTheme}
            />
            <IoSunnyOutline />
          </div>

          <button onClick={handleLogout}>Logout</button>
          <button
            className="block cursor-pointer md:hidden transition"
            onClick={handleMenu}
          >
            {showMenu ? <IoMdClose /> : <SlMenu />}
          </button>
        </div>
      </div>
      {showMenu ? (
        <div className="">
          <div className="bg-[#0d0f24] flex lg:hidden absolute w-full left-0 right-0 ease-in-out duration-1000 flex-col items-center gap-6 py-6 z-50 h-2/5 transition">
            <HeaderMenu />
          </div>
        </div>
      ) : (
        ""
      )}
    </header>
  );
};
