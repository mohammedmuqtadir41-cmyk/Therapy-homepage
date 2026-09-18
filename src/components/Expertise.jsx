const expertiseLeft = [
  "ANXIETY",
  "PANIC",
  "TRAUMA",
  "BURNOUT",
  "PERFECTIONISM",
  "CHRONIC STRESS",
];

const expertiseRight = [
  "OVERTHINKING",
  "SLEEP DIFFICULTY",
  "EMOTIONAL REGULATION",
  "RELATIONSHIPS",
  "SELF-WORTH",
  "PAST EXPERIENCES",
];

export default function Expertise() {
  return (
    <section className="bg-white px-6 py-28 sm:px-8 md:px-16 md:py-36 lg:px-20">
      <div className="mx-auto grid max-w-[1200px] gap-14 md:grid-cols-3 md:gap-12 lg:gap-20">

        <div>
          <h2 className="font-serif text-5xl font-normal leading-[1.1] tracking-[-1px] text-[#243b36] md:text-6xl">
            Areas of
            <br />
            <span className="italic text-[#8fa69d]">
              focus
            </span>
          </h2>

          <p className="mt-8 max-w-[300px] text-[14px] leading-7 text-[#243b36]">
            Therapy can address both what you're experiencing today and the
            experiences that shaped how you learned to cope.
          </p>
        </div>

        <div>
          {expertiseLeft.map((item) => (
            <div
              key={item}
              className="border-b border-[#dedbd3] py-7 text-[12px] tracking-[2.5px] text-[#243b36] md:py-8"
            >
              {item}
            </div>
          ))}
        </div>

        <div>
          {expertiseRight.map((item) => (
            <div
              key={item}
              className="border-b border-[#dedbd3] py-7 text-[12px] tracking-[2.5px] text-[#243b36] md:py-8"
            >
              {item}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}