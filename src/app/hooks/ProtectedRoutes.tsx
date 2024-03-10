"use client";

import { useAuthContext } from "@/context/AuthContext";
import { redirect, usePathname } from "next/navigation";

export const ProtectedRoutes = (props: any) => {
  const pathname = usePathname();
  const authContext = useAuthContext();

  if (!authContext?.currentUser && pathname !== "/") {
    if (authContext?.loadingUser) {
      return;
    }
    return redirect("/");
  }

  return props.children;
};
