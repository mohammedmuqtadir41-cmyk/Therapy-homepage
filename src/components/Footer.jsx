export default function Footer() {
  return (
    <footer className="bg-[#17324d] px-8 py-16 text-white md:px-20">
      <div className="mx-auto grid max-w-[1200px] gap-12 md:grid-cols-3">

        {/* Brand */}
        <div>
          <h2 className="font-serif text-3xl">
            Conejo Valley
          </h2>

          <p className="mt-3 text-[12px] tracking-[4px] text-[#a9d0d1]">
            FAMILY COUNSELING
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-4 text-[12px] tracking-[1.5px]">
          <a href="#">ABOUT</a>
          <a href="#">OUR TEAM</a>
          <a href="#">SPECIALTIES</a>
          <a href="#">METHODS</a>
          <a href="#">FAQS</a>
          <a href="#">CONTACT</a>
        </div>

        {/* Contact */}
        <div>
          <p className="text-[12px] uppercase tracking-[2px] text-[#a9d0d1]">
            Contact
          </p>

          <p className="mt-5 text-[15px] leading-7">
            Newbury Park, California
          </p>

          <p className="mt-2 text-[15px]">
            (805) 555-0123
          </p>

          <p className="mt-2 text-[15px]">
            hello@example.com
          </p>
        </div>

      </div>

      <div className="mx-auto mt-16 max-w-[1200px] border-t border-white/20 pt-6 text-[11px] tracking-[1px] text-white/60">
        © 2026 Conejo Valley Family Counseling. All rights reserved.
      </div>
    </footer>
  );
}