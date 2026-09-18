export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-[#f7f4ee] px-6 py-24 sm:px-8 md:px-16 md:py-32 lg:px-20"
    >
      <div className="mx-auto grid max-w-[1200px] gap-16 md:grid-cols-2 md:gap-20">
        <div>
          <p className="text-[11px] uppercase tracking-[3px] text-[#8fa69d]">
            Let’s connect
          </p>

          <h2 className="mt-6 font-serif text-5xl font-normal leading-[1.05] tracking-[-1px] text-[#243b36] md:text-6xl">
            A space to feel
            <br />
            <span className="italic">understood.</span>
          </h2>

          <p className="mt-8 max-w-[500px] text-[15px] leading-8 text-[#243b36]">
            Whether you are feeling overwhelmed, stuck in old patterns, or
            simply ready for something to change, you are welcome to reach out.
          </p>

          <a
            href="#"
            className="mt-8 inline-block rounded-full border border-[#243b36] px-8 py-4 text-[11px] tracking-[2px] text-[#243b36]"
          >
            GET IN TOUCH
          </a>
        </div>

        <div className="border-t border-[#d8d2c8] pt-8">
          <p className="text-[11px] uppercase tracking-[3px] text-[#8fa69d]">
            Office
          </p>

          <p className="mt-6 font-serif text-3xl text-[#243b36] md:text-4xl">
            Santa Monica, California
          </p>

          <p className="mt-5 text-[15px] leading-8 text-[#243b36]">
            123th Street 45 W
            <br />
            Santa Monica, CA 90401
          </p>

          <p className="mt-5 max-w-[500px] text-[15px] leading-8 text-[#243b36]">
            In-person therapy from my Santa Monica office and secure telehealth
            for clients located throughout California.
          </p>

          <div className="mt-10 border-t border-[#d8d2c8] pt-8">
            <p className="text-[11px] uppercase tracking-[3px] text-[#8fa69d]">
              Dr. Maya Reynolds, PsyD
            </p>

            <p className="mt-5 text-[15px] text-[#243b36]">
              Licensed Clinical Psychologist
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
