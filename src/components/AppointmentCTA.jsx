export default function AppointmentCTA() {
  return (
    <section className="bg-[#dcebea] px-6 py-28 sm:px-8 md:px-16 md:py-36 lg:px-20">
      <div className="mx-auto max-w-[1000px] text-center">

        <p className="text-[11px] uppercase tracking-[3px] text-[#17324d] sm:text-[13px]">
          Ready to take the next step?
        </p>

        <h2 className="mt-6 font-serif text-5xl font-normal leading-[1.05] tracking-[-1px] text-[#17324d] sm:text-6xl md:text-7xl">
          Let’s begin your
          <br />
          journey toward{" "}
          <span className="italic text-[#557f83]">
            healing.
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-[650px] text-[14px] leading-7 text-[#17324d] md:text-[16px] md:leading-8">
          Reach out to schedule a consultation and learn more about how
          therapy can support you.
        </p>

        <a
          href="#"
          className="mt-10 inline-block rounded-full border border-[#17324d] px-8 py-4 text-[11px] tracking-[2px] text-[#17324d] transition hover:bg-[#17324d] hover:text-white sm:px-10"
        >
          SCHEDULE AN APPOINTMENT
        </a>

      </div>
    </section>
  );
}