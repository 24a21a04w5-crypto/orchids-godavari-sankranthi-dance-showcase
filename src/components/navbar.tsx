"use client";

import Link from "next/link";
import { Instagram } from "lucide-react";
import { motion } from "framer-motion";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold tracking-tighter text-black">
          Aay Memu Godarollamandi
        </Link>

        <nav className="hidden space-x-8 md:flex">
          <Link href="/" className="text-sm font-medium hover:text-zinc-600 transition-colors">
            Home
          </Link>
          <Link href="#places" className="text-sm font-medium hover:text-zinc-600 transition-colors">
            Places
          </Link>
          <Link href="#about" className="text-sm font-medium hover:text-zinc-600 transition-colors">
            About
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="https://instagram.com/aay_memu_godarollamandi"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 hover:bg-zinc-100 transition-colors"
          >
            <Instagram className="h-5 w-5" />
          </motion.a>
        </div>
      </div>
    </header>
  );
}
