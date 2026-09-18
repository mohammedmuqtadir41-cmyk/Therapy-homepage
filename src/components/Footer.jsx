const links = [
  ["ABOUT", "#about"],
  ["APPROACH", "#approach"],
  ["SPECIALTIES", "#specialties"],
  ["EMDR", "#emdr"],
  ["FAQS", "#faqs"],
  ["CONTACT", "#contact"],
];

export default function Footer() {
  return (
    <footer className="bg-[#243b36] px-6 py-16 text-white sm:px-8 md:px-16 md:py-20 lg:px-20">
      <div className="mx-auto grid max-w-[1200px] gap-12 md:grid-cols-3 md:gap-16">
        <div>
          <h2 className="font-serif text-3xl md:text-4xl">Dr. Maya Reynolds</h2>

          <p className="mt-3 text-[10px] tracking-[3px] text-[#b8c9c1]">
            PSYD • CLINICAL PSYCHOLOGIST
          </p>
        </div>

        <nav className="flex flex-col gap-4 text-[11px] tracking-[1.5px]">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="transition-opacity hover:opacity-60"
            >
              {label}
            </a>
          ))}
        </nav>

        <div>
          <p className="text-[11px] uppercase tracking-[3px] text-[#b8c9c1]">
            Office
          </p>

          <p className="mt-5 text-[14px] leading-7">Santa Monica, California</p>

          <p className="mt-2 text-[14px] leading-7">In-person + Telehealth</p>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-[1200px] border-t border-white/20 pt-6 text-[10px] tracking-[1px] text-white/60">
        © 2026 Dr. Maya Reynolds, PsyD. All rights reserved.
      </div>
    </footer>
  );
}
