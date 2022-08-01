import React from "react";
import MobilesBottomNav from "./MobilesBottomNav";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <MobilesBottomNav />
    </div>
  );
}
