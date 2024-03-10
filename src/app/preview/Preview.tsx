"use client";

import { useState } from "react";
import { Video } from "../components/Video";
import { HeaderPreview } from "../components/Header/HeaderPreview";
import Login from "../login/Login";
import Register from "../register/Register";

export default function Preview() {
  const [showForms, setShowForms] = useState<string | null>("login");

  const handleChangeShowForms = (name: string) => {
    setShowForms(name);
  };

  return (
    <div>
      <HeaderPreview handleChangeShowForms={handleChangeShowForms} />

      <div className="w-full relative">
        <div className="absolute top-1/3 z-10 w-full left-0 m-auto text-start text-2xl">
          <div className="flex flex-col-reverse lg:flex-row p-2 lg:pl-10 gap-20 items-center lg:items-start justify-center">
            <div className="w-full max-w-xs flex flex-col gap-4 items-center">
              {showForms === "login" && <Login />}
              {showForms === "register" && <Register />}
            </div>
            <div className="text-5xl font-bold text-center lg:text-start leading-normal">
              <p>
                Enjoy
                <br />
                the greatest stories,
                <br />
                all in
                <br />
                one place.
              </p>
            </div>
          </div>
        </div>
        <Video />
      </div>
    </div>
  );
}
