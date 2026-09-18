export default function IntroSection() {
  return (
    <section className="bg-[#f8f7f3] px-8 py-28 md:px-20 md:py-36">
      <div className="mx-auto grid max-w-[1200px] gap-16 md:grid-cols-2 md:items-center">

        <div>
          <p className="text-[13px] uppercase tracking-[3px] text-[#17324d]">
            You deserve support
          </p>

          <h2 className="mt-6 max-w-[600px] font-serif text-5xl font-normal leading-[1.15] text-[#17324d] md:text-6xl">
            You’re holding onto
            <span className="italic text-[#83b9bd]"> hope.</span>
          </h2>
        </div>

        <div>
          <p className="max-w-[520px] text-[17px] leading-8 text-[#17324d]">
            Sometimes life can feel heavier than expected. Therapy can give
            you a place to slow down, understand what you’re experiencing,
            and begin moving forward with greater clarity and confidence.
          </p>

          <a
            href="#"
            className="mt-8 inline-block border-b border-[#17324d] pb-2 text-[12px] tracking-[2px] text-[#17324d]"
          >
            LEARN MORE
          </a>
        </div>

      </div>
    </section>
  );
}