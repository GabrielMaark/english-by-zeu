"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-navy-500 shadow-md"
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-navy-500 flex items-center justify-center">
            <span className="text-white font-black text-sm">Z</span>
          </div>
          <span className="font-bold text-white text-sm">
            English by <span className="text-red-400">Zeu</span>
          </span>
        </div>

        {/* CTA */}
        <a
          href="#"
          className="inline-flex items-center bg-red-500 hover:bg-red-600 text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-5 sm:px-6 py-2.5 rounded-full transition-all duration-200 shadow-sm"
        >
          Garantir minha vaga
        </a>
      </div>
    </nav>
  );
}
