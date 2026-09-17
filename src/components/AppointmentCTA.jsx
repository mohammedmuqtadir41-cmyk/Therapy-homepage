export default function AppointmentCTA() {
  return (
    <section className="bg-[#dcebea] px-8 py-28 md:px-20">
      <div className="mx-auto max-w-[1100px] text-center">

        <p className="text-[13px] uppercase tracking-[3px] text-[#17324d]">
          Ready to take the next step?
        </p>

        <h2 className="mt-6 font-serif text-5xl font-normal leading-tight text-[#17324d] md:text-6xl">
          Let’s begin your
          <br />
          journey toward{" "}
          <span className="italic text-[#557f83]">
            healing.
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-[650px] text-[16px] leading-8 text-[#17324d]">
          Reach out to schedule a consultation and learn more about how
          therapy can support you.
        </p>

        <a
          href="#"
          className="mt-10 inline-block rounded-full border border-[#17324d] px-9 py-4 text-[12px] tracking-[2px] text-[#17324d] transition hover:bg-[#17324d] hover:text-white"
        >
          SCHEDULE AN APPOINTMENT
        </a>

      </div>
    </section>
  );
}