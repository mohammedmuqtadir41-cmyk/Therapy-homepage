export default function ContactSection() {
  return (
    <section className="bg-white px-6 py-28 sm:px-8 md:px-16 md:py-36 lg:px-20">
      <div className="mx-auto grid max-w-[1200px] gap-16 md:grid-cols-2 md:gap-20">

        <div>
          <p className="text-[11px] uppercase tracking-[3px] text-[#83b9bd] sm:text-[13px]">
            Find a therapist
          </p>

          <h2 className="mt-6 font-serif text-5xl font-normal leading-[1.05] tracking-[-1px] text-[#17324d] md:text-6xl">
            A space to feel
            <br />
            <span className="italic">
              understood.
            </span>
          </h2>

          <p className="mt-8 max-w-[500px] text-[15px] leading-8 text-[#17324d]">
            Reach out to learn more about therapy, ask questions, or schedule
            an initial consultation.
          </p>

          <a
            href="#"
            className="mt-8 inline-block rounded-full border border-[#17324d] px-8 py-4 text-[11px] tracking-[2px] text-[#17324d]"
          >
            GET IN TOUCH
          </a>
        </div>

        <div className="border-t border-[#dedbd4] pt-8">
          <p className="text-[11px] uppercase tracking-[3px] text-[#83b9bd] sm:text-[13px]">
            Location
          </p>

          <p className="mt-6 font-serif text-3xl text-[#17324d] md:text-4xl">
            Newbury Park, California
          </p>

          <p className="mt-6 max-w-[500px] text-[15px] leading-8 text-[#17324d]">
            In-person counseling and secure telehealth services for clients
            throughout California.
          </p>

          <div className="mt-10 border-t border-[#dedbd4] pt-8">
            <p className="text-[11px] uppercase tracking-[3px] text-[#83b9bd]">
              Contact
            </p>

            <p className="mt-5 text-[15px] text-[#17324d]">
              (805) 555-0123
            </p>

            <p className="mt-2 text-[15px] text-[#17324d]">
              hello@example.com
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}