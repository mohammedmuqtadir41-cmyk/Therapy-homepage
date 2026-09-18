export default function ContactSection() {
  return (
    <section className="bg-white px-8 py-28 md:px-20 md:py-36">
      <div className="mx-auto grid max-w-[1200px] gap-16 md:grid-cols-2">

        <div>
          <p className="text-[13px] uppercase tracking-[3px] text-[#83b9bd]">
            Find a therapist
          </p>

          <h2 className="mt-6 font-serif text-5xl font-normal leading-tight text-[#17324d]">
            A space to feel
            <br />
            <span className="italic">understood.</span>
          </h2>

          <p className="mt-8 max-w-[500px] text-[16px] leading-8 text-[#17324d]">
            Reach out to learn more about therapy, ask questions, or schedule
            an initial consultation.
          </p>

          <a
            href="#"
            className="mt-8 inline-block rounded-full border border-[#17324d] px-8 py-4 text-[12px] tracking-[2px] text-[#17324d]"
          >
            GET IN TOUCH
          </a>
        </div>

        <div className="border-t border-[#dedbd4] pt-8">
          <p className="text-[12px] uppercase tracking-[3px] text-[#83b9bd]">
            Location
          </p>

          <p className="mt-6 font-serif text-3xl text-[#17324d]">
            Newbury Park, California
          </p>

          <p className="mt-6 text-[16px] leading-8 text-[#17324d]">
            In-person counseling and secure telehealth services for clients
            throughout California.
          </p>

          <div className="mt-10 border-t border-[#dedbd4] pt-8">
            <p className="text-[12px] uppercase tracking-[3px] text-[#83b9bd]">
              Contact
            </p>

            <p className="mt-5 text-[16px] text-[#17324d]">
              (805) 555-0123
            </p>

            <p className="mt-2 text-[16px] text-[#17324d]">
              hello@example.com
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}