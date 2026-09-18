export default function IntroSection() {
  return (
    <section className="bg-[#f8f7f3] px-6 py-24 sm:px-8 md:px-16 md:py-32 lg:px-20">
      <div className="mx-auto grid max-w-[1200px] gap-14 md:grid-cols-2 md:items-center lg:gap-24">

        <div>
          <p className="text-[11px] uppercase tracking-[3px] text-[#17324d] sm:text-[13px]">
            You deserve support
          </p>

          <h2 className="mt-6 max-w-[600px] font-serif text-5xl font-normal leading-[1.08] tracking-[-1px] text-[#17324d] md:text-6xl">
            You’re holding onto{" "}
            <span className="italic text-[#83b9bd]">
              hope.
            </span>
          </h2>
        </div>

        <div>
          <p className="max-w-[540px] text-[15px] leading-8 text-[#17324d] md:text-[16px]">
            Sometimes life can feel heavier than expected. Therapy can give
            you a place to slow down, understand what you’re experiencing,
            and begin moving forward with greater clarity and confidence.
          </p>

          <a
            href="#"
            className="mt-8 inline-block border-b border-[#17324d] pb-2 text-[11px] tracking-[2px] text-[#17324d]"
          >
            LEARN MORE
          </a>
        </div>

      </div>
    </section>
  );
}