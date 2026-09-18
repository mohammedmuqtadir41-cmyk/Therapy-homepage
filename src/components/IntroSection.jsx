export default function IntroSection() {
  return (
    <section className="bg-[#f7f4ee] px-6 py-28 sm:px-8 md:px-16 md:py-36 lg:px-20">
      <div className="mx-auto grid max-w-[1200px] gap-14 md:grid-cols-2 md:items-center lg:gap-24">

        <div>
          <p className="text-[11px] uppercase tracking-[3px] text-[#8fa69d]">
            You dont have to hold it all together
          </p>

          <h2 className="mt-6 max-w-[600px] font-serif text-5xl font-normal leading-[1.05] tracking-[-1px] text-[#243b36] md:text-6xl">
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

        <div>
          <p className="max-w-[540px] text-[15px] leading-8 text-[#243b36] md:text-[16px]">
            Many of the people I work with appear capable and successful from
            the outside. Internally, they may be overwhelmed, overthinking,
            emotionally on edge, or simply tired of carrying so much alone.
          </p>

          <p className="mt-6 max-w-[540px] text-[15px] leading-8 text-[#243b36] md:text-[16px]">
            Therapy can become a place to slow down, make sense of what is
            happening, and develop a more sustainable way of living.
          </p>
        </div>

      </div>
    </section>
  );
}