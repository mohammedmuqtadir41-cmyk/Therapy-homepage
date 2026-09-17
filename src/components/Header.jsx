export default function Header() {
  return (
    <header className="h-[150px] w-full bg-[#f8f7f3]">
      <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-0">

        {/* Logo */}
        <div className="flex flex-col">
          <div className="font-serif text-[38px] leading-none tracking-[-1.5px] text-[#303030]">
            Conejo Valley
          </div>

          <div className="mt-2 text-[13px] tracking-[6px] text-[#83b9bd]">
            FAMILY COUNSELING
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          <a
            href="#"
            className="whitespace-nowrap text-[13px] tracking-[1.5px] text-[#404040]"
          >
            ABOUT
          </a>

          <a
            href="#"
            className="whitespace-nowrap text-[13px] tracking-[1.5px] text-[#404040]"
          >
            OUR TEAM
          </a>

          <a
            href="#"
            className="whitespace-nowrap text-[13px] tracking-[1.5px] text-[#404040]"
          >
            SPECIALTIES
          </a>

          <a
            href="#"
            className="whitespace-nowrap text-[13px] tracking-[1.5px] text-[#404040]"
          >
            METHODS
          </a>

          <a
            href="#"
            className="whitespace-nowrap text-[13px] tracking-[1.5px] text-[#404040]"
          >
            FAQS
          </a>

          <a
            href="#"
            className="whitespace-nowrap rounded-full border border-[#303030] px-7 py-3 text-[13px] tracking-[1.5px] text-[#404040]"
          >
            CONTACT
          </a>
        </nav>

      </div>
    </header>
  );
}