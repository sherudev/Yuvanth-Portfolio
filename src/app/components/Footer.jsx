import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <Link
          href={"/"}
          className="text-2xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600"
        >
          Yuvanth
        </Link>
        <p className="text-slate-600">© 2026 Yuvanth. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
