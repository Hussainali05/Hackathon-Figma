"use client";
import Image from "next/image";
import Link from "next/link";
import user from "@/images/Vector (12).png";
import search from "@/images/icn settings icn-xs (6).png";
import cart from "@/images/icn settings icn-xs (7).png";
import mail from "@/images/icn settings icn-xs (8).png";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full bg-white shadow-md">
      {/* Navbar Container */}
      <div className="container mx-auto flex justify-between items-center px-4 py-3 lg:py-0">
        {/* Logo */}
        <h3 className="font-Montserrat font-semibold text-[24px]">Bandage</h3>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="font-Montserrat font-semibold text-[14px] text-[#737373] flex gap-6">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/shop">Shop</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/pages">Pages</Link></li>
          </ul>

          {/* Login / Register and Icons */}
          <div className="flex items-center gap-6">
            <Link href="/login" className="flex items-center gap-2 text-[#23A6F0] font-semibold">
              <Image src={user} alt="user" width={16} height={16} />
              Login / Register
            </Link>

            <ul className="flex gap-4">
              <li><Image src={search} alt="search" width={16} height={16} /></li>
              <li><Image src={cart} alt="cart" width={16} height={16} /></li>
              <li><Image src={mail} alt="mail" width={16} height={16} /></li>
            </ul>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
          <div className="w-6 h-1 bg-black mb-1"></div>
          <div className="w-6 h-1 bg-black mb-1"></div>
          <div className="w-6 h-1 bg-black"></div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#252B42] text-white p-4">
          <ul className="font-Montserrat font-semibold text-[14px] flex flex-col gap-4 items-center">
            <li><Link href="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link href="/shop" onClick={toggleMenu}>Shop</Link></li>
            <li><Link href="/about" onClick={toggleMenu}>About</Link></li>
            <li><Link href="/blog" onClick={toggleMenu}>Blog</Link></li>
            <li><Link href="/contact" onClick={toggleMenu}>Contact</Link></li>
            <li><Link href="/pages" onClick={toggleMenu}>Pages</Link></li>
          </ul>
          <button onClick={toggleMenu} className="mt-4 text-white font-Montserrat">
            Close Menu
          </button>
        </div>
      )}
    </div>
  );
}
