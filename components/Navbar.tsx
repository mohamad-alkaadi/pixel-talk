import Image from "next/image"
import Link from "next/link"
import React from "react"
import MobileNav from "./MobileNav"
import { SignedIn, UserButton } from "@clerk/nextjs"

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logo.svg"
          width={32}
          height={32}
          alt="logo"
          className="max-sm:size-10"
        />
        <p className="select-none text-[26px] font-extrabold max-sm:hidden text-white">
          Pixel<span className="text-[#2181f9] ml-[2px]">Talk</span>
        </p>
      </Link>
      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <MobileNav />
      </div>
    </nav>
  )
}

export default Navbar
