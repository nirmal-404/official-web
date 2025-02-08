"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react" // Hamburger + close icons
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Detect current path
  const pathname = usePathname()
  const isActive = (path: string) => pathname === path

  return (
    <nav
      className={`sticky top-0 z-50 border-b transition-colors 
        ${isScrolled ? "shadow-md bg-white/80 backdrop-blur-sm" : "bg-white"}
      `}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* --- Logo --- */}
        <Link href="/" className="flex items-center space-x-2">
          <img
            src="/assets/Mozilla-logo.png"
            alt="Mozilla Logo"
            className="h-6 w-auto"
          />
        </Link>

        {/* --- Desktop Nav Links --- */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLink href="/about" active={isActive("/about")}>
            About
          </NavLink>
          <NavLink href="/events" active={isActive("/events")}>
            Events
          </NavLink>
          <NavLink href="/blog" active={isActive("/blog")}>
            Blog
          </NavLink>
          <NavLink href="/contact" active={isActive("/contact")}>
            Contact Us
          </NavLink>

          <Button
            className="
              border border-transparent
              transition-colors duration-300
              hover:border-black
              hover:bg-white
              hover:text-black
            "
          >
            Join SLIIT Mozilla!
          </Button>
        </div>

        {/* --- Mobile Menu Toggle (Hamburger) --- */}
        <button
          className="block md:hidden p-2 text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* --- Mobile Menu Dropdown --- */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow px-4 pb-4">
          <div className="flex flex-col space-y-2">
            <NavLinkMobile
              href="/about"
              active={isActive("/about")}
              closeMenu={() => setIsMenuOpen(false)}
            >
              About
            </NavLinkMobile>
            <NavLinkMobile
              href="/events"
              active={isActive("/events")}
              closeMenu={() => setIsMenuOpen(false)}
            >
              Events
            </NavLinkMobile>
            <NavLinkMobile
              href="/blog"
              active={isActive("/blog")}
              closeMenu={() => setIsMenuOpen(false)}
            >
              Blog
            </NavLinkMobile>
            <NavLinkMobile
              href="/contact"
              active={isActive("/contact")}
              closeMenu={() => setIsMenuOpen(false)}
            >
              Contact Us
            </NavLinkMobile>

            <Button
              className="
                w-full
                border border-transparent
                transition-colors duration-300
                hover:border-black
                hover:bg-white
                hover:text-black
              "
            >
              Join SLIIT Mozilla!
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}

/**
 * Desktop Link with underline hover
 */
function NavLink({
  href,
  active,
  children,
}: {
  href: string
  active: boolean
  children: React.ReactNode
}) {
  return (
    <div className="relative group inline-block">
      <Link
        href={href}
        className={`
          text-sm font-medium transition-colors
          ${active ? "font-bold text-black" : "hover:text-primary"}
        `}
      >
        {children}
      </Link>
      <span
        className="
          absolute left-0 bottom-0
          h-[2px] w-0
          bg-current
          group-hover:w-full
          transition-all duration-300
        "
      />
    </div>
  )
}

/**
 * Mobile Link with close on click
 * (Similar underline hover, but optionally simpler or changed for mobile)
 */
function NavLinkMobile({
  href,
  active,
  children,
  closeMenu,
}: {
  href: string
  active: boolean
  children: React.ReactNode
  closeMenu: () => void
}) {
  return (
    <Link
      href={href}
      onClick={closeMenu}
      className={`
        text-sm font-medium transition-colors block
        ${active ? "font-bold text-black" : "hover:text-primary"}
      `}
    >
      {children}
    </Link>
  )
}
