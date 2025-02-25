"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold">Legatia Tech</span>
        </Link>
        <div className="flex-1" />
        <nav className="hidden md:flex items-center space-x-4">
          <NavItems />
        </nav>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="container py-4">
            <NavItems mobile />
          </nav>
        </div>
      )}
    </header>
  )
}

function NavItems({ mobile = false }: { mobile?: boolean }) {
  return (
    <>
      <Link
        href="/services"
        className={`text-sm font-medium transition-colors hover:text-primary ${mobile ? "block py-2" : ""}`}
      >
        Services
      </Link>
      <Link
        href="/portfolio"
        className={`text-sm font-medium transition-colors hover:text-primary ${mobile ? "block py-2" : ""}`}
      >
        Portfolio
      </Link>
      <Link
        href="/about"
        className={`text-sm font-medium transition-colors hover:text-primary ${mobile ? "block py-2" : ""}`}
      >
        About
      </Link>
      <Link
        href="/blog"
        className={`text-sm font-medium transition-colors hover:text-primary ${mobile ? "block py-2" : ""}`}
      >
        Blog
      </Link>
      <Link href="/contact" passHref>
        <Button variant="default" size="sm" className={mobile ? "w-full mt-2" : ""}>
          Contact Us
        </Button>
      </Link>
      <ModeToggle />
    </>
  )
}

