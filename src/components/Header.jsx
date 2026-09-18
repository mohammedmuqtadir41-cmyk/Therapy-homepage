"use client";

import { useState } from "react";

const navLinks = [
  ["ABOUT", "#about"],
  ["APPROACH", "#approach"],
  ["OFFICE", "#office"],
  ["SPECIALTIES", "#specialties"],
  ["EMDR", "#emdr"],
  ["FAQS", "#faqs"],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 bg-[#f7f4ee]">
      <div className="mx-auto flex min-h-[105px] max-w-[1280px] items-center justify-between px-6 md:min-h-[120px] md:px-10 lg:px-12">
        <a href="#" className="flex flex-col">
          <span className="font-serif text-[27px] leading-none tracking-[-1px] text-[#243b36] sm:text-[32px] md:text-[35px]">
            Dr. Maya Reynolds
          </span>

          <span className="mt-2 text-[9px] tracking-[3px] text-[#8fa69d] sm:text-[10px] md:text-[11px] md:tracking-[4px]">
            PSYD • CLINICAL PSYCHOLOGIST
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navLinks.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-[10px] tracking-[1.7px] text-[#243b36] transition-opacity hover:opacity-50"
            >
              {label}
            </a>
          ))}

          <a
            href="#contact"
            className="rounded-full border border-[#243b36] px-7 py-3 text-[10px] tracking-[1.7px] text-[#243b36] transition hover:bg-[#243b36] hover:text-white"
          >
            CONTACT
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#243b36] lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? (
            <span className="text-xl">×</span>
          ) : (
            <span className="text-lg">☰</span>
          )}
        </button>
      </div>

      {open && (
        <nav className="border-t border-[#ddd6ca] bg-[#f7f4ee] px-6 py-5 lg:hidden">
          {navLinks.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="block border-b border-[#ddd6ca] py-5 text-[11px] tracking-[2px] text-[#243b36]"
            >
              {label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-6 inline-block rounded-full border border-[#243b36] px-7 py-3 text-[10px] tracking-[2px] text-[#243b36]"
          >
            CONTACT
          </a>
        </nav>
      )}
    </header>
  );
}
