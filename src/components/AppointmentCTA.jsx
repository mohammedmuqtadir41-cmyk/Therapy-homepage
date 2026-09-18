export default function AppointmentCTA() {
  return (
    <section className="bg-[#dce5df] px-6 py-28 sm:px-8 md:px-16 md:py-36 lg:px-20">
      <div className="mx-auto max-w-[1000px] text-center">
        <p className="text-[11px] uppercase tracking-[3px] text-[#243b36]">
          Begin here
        </p>

        <h2 className="mt-6 font-serif text-5xl font-normal leading-[1.05] tracking-[-1px] text-[#243b36] sm:text-6xl md:text-7xl">
          You don’t have to
          <br />
          figure it all out
          <br />
          <span className="italic text-[#6f8c82]">alone.</span>
        </h2>

        <p className="mx-auto mt-8 max-w-[650px] text-[14px] leading-7 text-[#243b36] md:text-[16px] md:leading-8">
          Schedule a consultation to talk about what you are experiencing and
          whether working together feels like the right fit.
        </p>

        <a
          href="#contact"
          className="mt-10 inline-block rounded-full border border-[#243b36] px-9 py-4 text-[10px] tracking-[2px] text-[#243b36] transition hover:bg-[#243b36] hover:text-white"
        >
          SCHEDULE A CONSULTATION
        </a>
      </div>
    </section>
  );
}
