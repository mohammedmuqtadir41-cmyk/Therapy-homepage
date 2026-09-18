"use client";

import { useState } from "react";

const navLinks = [
  "ABOUT",
  "OUR TEAM",
  "SPECIALTIES",
  "METHODS",
  "FAQS",
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 w-full bg-[#f8f7f3]">
      <div className="mx-auto flex min-h-[110px] max-w-[1280px] items-center justify-between px-6 md:min-h-[130px] md:px-10 lg:px-12">

        {/* Logo */}
        <a href="#" className="flex flex-col">
          <span className="font-serif text-[30px] leading-none tracking-[-1px] text-[#17324d] sm:text-[34px] md:text-[38px]">
            Conejo Valley
          </span>

          <span className="mt-2 text-[9px] tracking-[4px] text-[#83b9bd] sm:text-[11px] md:text-[13px] md:tracking-[6px]">
            FAMILY COUNSELING
          </span>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-[12px] tracking-[1.5px] text-[#303030] transition-opacity hover:opacity-60"
            >
              {link}
            </a>
          ))}

          <a
            href="#"
            className="rounded-full border border-[#303030] px-7 py-3 text-[12px] tracking-[1.5px] text-[#303030] transition hover:bg-[#17324d] hover:text-white"
          >
            CONTACT
          </a>
        </nav>

        {/* Mobile button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#17324d] lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile navigation */}
      {open && (
        <nav className="border-t border-[#ddd9d1] bg-[#f8f7f3] px-6 py-8 lg:hidden">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                onClick={() => setOpen(false)}
                className="border-b border-[#ddd9d1] py-5 text-[12px] tracking-[2px] text-[#17324d]"
              >
                {link}
              </a>
            ))}

            <a
              href="#"
              onClick={() => setOpen(false)}
              className="mt-6 self-start rounded-full border border-[#17324d] px-7 py-3 text-[12px] tracking-[2px] text-[#17324d]"
            >
              CONTACT
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}