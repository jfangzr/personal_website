"use client";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import { GithubIcon } from "@/components/icons";
import Link from "next/link";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full py-3 px-4 border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-xl font-bold">James Fang</h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {siteConfig.navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>

        {/* Social Links */}
        <div className="hidden md:flex items-center">
          <a href={siteConfig.links.github} target="_blank" rel="noreferrer" className="p-2">
            <GithubIcon />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-white z-50 border-b border-gray-200">
          <div className="container mx-auto py-2">
            {siteConfig.navMenuItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <div className="block py-2 px-4 hover:bg-gray-100">{item.label}</div>
              </Link>
            ))}
            <a 
              href={siteConfig.links.github} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center py-2 px-4 hover:bg-gray-100"
            >
              <GithubIcon className="mr-2" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

