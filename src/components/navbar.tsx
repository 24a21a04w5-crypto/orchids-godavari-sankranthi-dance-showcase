"use client";

import Link from "next/link";
import { Instagram } from "lucide-react";
import { motion } from "framer-motion";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-100 bg-white/95 backdrop-blur-xl">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="text-2xl font-black tracking-tighter text-black">
          Aay Memu Godarollamandi
        </Link>

        <nav className="hidden space-x-10 md:flex">
          <Link href="/" className="text-sm font-bold tracking-widest uppercase hover:text-zinc-500 transition-colors">
            Home
          </Link>
          <Link href="#places" className="text-sm font-bold tracking-widest uppercase hover:text-zinc-500 transition-colors">
            Places
          </Link>
          <Link href="#about" className="text-sm font-bold tracking-widest uppercase hover:text-zinc-500 transition-colors">
            About
          </Link>
        </nav>

        <div className="flex items-center gap-6">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://instagram.com/aay_memu_godarollamandi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-xs font-black tracking-widest text-white uppercase transition-all hover:bg-zinc-800 shadow-lg shadow-black/10"
          >
            <Instagram className="h-4 w-4" />
            <span className="hidden sm:inline">Follow</span>
          </motion.a>
        </div>
      </div>
    </header>
  );
}
