import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

import Link from "next/link";

import Logo from "./Logo";

const Navbar = ({ toggle }) => {
  return (
    <div className="w-full h-20 bg-emerald-800 sticky top-0 z-10">
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          <Logo />
          <button
            type="button"
            className="inline-flex items-center md:hidden"
            onClick={toggle}
          >
            <RxHamburgerMenu />
          </button>
          <ul className="hidden md:flex gap-x-6 text-white">
            <li>
              <Link href="/">
                <p>Home</p>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <p>About Us</p>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <p>Services</p>
              </Link>
            </li>
            <li>
              <Link href="/reviews">
                <p>Reviews</p>
              </Link>
            </li>
            <li>
              <Link href="/gallery">
                <p>Gallery</p>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <p>Contact Us</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
