export default function IntroSection() {
  return (
    <section className="bg-[#f7f4ee] px-6 py-24 sm:px-8 md:px-16 md:py-32 lg:px-20">
      <div className="mx-auto max-w-[1200px]">

        <div className="grid gap-14 md:grid-cols-[1.1fr_0.9fr] md:items-center lg:gap-24">

          <div>
            <p className="text-[11px] uppercase tracking-[3px] text-[#8fa69d]">
              You don’t have to hold it all together
            </p>

            <h2 className="mt-6 max-w-[700px] font-serif text-5xl font-normal leading-[1.05] tracking-[-1px] text-[#243b36] md:text-6xl lg:text-[68px]">
              You can be doing
              <br />
              everything right
              <br />
              and still feel{" "}
              <span className="italic text-[#8fa69d]">
                exhausted.
              </span>
            </h2>
          </div>

          <div className="border-t border-[#d8cbb9] pt-7 md:mt-20">
            <p className="text-[15px] leading-8 text-[#3f4b46] md:text-[16px]">
              Many of the people I work with appear capable and successful
              from the outside. Internally, they may feel overwhelmed,
              overthinking, emotionally on edge, or simply tired of carrying
              so much alone.
            </p>

            <p className="mt-6 text-[15px] leading-8 text-[#3f4b46] md:text-[16px]">
              Therapy can become a place to slow down, make sense of what is
              happening, and develop a way of living that feels more
              sustainable.
            </p>

            <a
              href="#approach"
              className="mt-8 inline-block border-b border-[#243b36] pb-2 text-[10px] tracking-[2px] text-[#243b36]"
            >
              EXPLORE THE APPROACH
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
