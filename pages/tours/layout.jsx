import React from "react";
import NavBar from "./components/NavBar";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { compareAsc, compareDesc, isAfter } from "date-fns";
import { logout } from "@/hooks/useLogout";

const layout = ({ children }) => {
  const user = useSelector((sl) => sl.auth);

  if (isAfter(new Date(user.expiration), new Date())) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
}else{
  logout()
}
}

export default layout;
