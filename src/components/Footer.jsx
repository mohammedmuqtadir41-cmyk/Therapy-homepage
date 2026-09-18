const links = [
  "ABOUT",
  "OUR TEAM",
  "SPECIALTIES",
  "METHODS",
  "FAQS",
  "CONTACT",
];

export default function Footer() {
  return (
    <footer className="bg-[#17324d] px-6 py-16 text-white sm:px-8 md:px-16 md:py-20 lg:px-20">
      <div className="mx-auto grid max-w-[1200px] gap-12 md:grid-cols-3 md:gap-16">

        <div>
          <h2 className="font-serif text-3xl md:text-4xl">
            Conejo Valley
          </h2>

          <p className="mt-3 text-[10px] tracking-[4px] text-[#a9d0d1] sm:text-[12px]">
            FAMILY COUNSELING
          </p>
        </div>

        <nav className="flex flex-col gap-4 text-[11px] tracking-[1.5px]">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="transition-opacity hover:opacity-60"
            >
              {link}
            </a>
          ))}
        </nav>

        <div>
          <p className="text-[11px] uppercase tracking-[3px] text-[#a9d0d1]">
            Contact
          </p>

          <p className="mt-5 text-[14px] leading-7">
            Newbury Park, California
          </p>

          <p className="mt-2 text-[14px]">
            (805) 555-0123
          </p>

          <p className="mt-2 text-[14px]">
            hello@example.com
          </p>
        </div>

      </div>

      <div className="mx-auto mt-16 max-w-[1200px] border-t border-white/20 pt-6 text-[10px] tracking-[1px] text-white/60">
        © 2026 Conejo Valley Family Counseling. All rights reserved.
      </div>
    </footer>
  );
}