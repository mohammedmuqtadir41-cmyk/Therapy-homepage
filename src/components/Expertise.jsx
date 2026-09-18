const expertiseLeft = [
  "DISSOCIATION",
  "TRAUMA",
  "FAMILY CONFLICT",
  "SPECIAL NEEDS PARENTING",
  "DEPRESSION",
  "MARRIAGE",
];

const expertiseRight = [
  "ANXIETY",
  "RELATIONSHIPS",
  "CHILDREN",
  "TEENS",
  "INTIMACY & CONNECTION",
  "...AND MORE.",
];

export default function Expertise() {
  return (
    <section className="bg-white px-6 py-28 sm:px-8 md:px-16 md:py-36 lg:px-20">
      <div className="mx-auto grid max-w-[1200px] gap-14 md:grid-cols-3 md:gap-12 lg:gap-20">

        <div>
          <h2 className="font-serif text-5xl font-normal leading-[1.1] tracking-[-1px] text-[#17324d] md:text-6xl">
            Our areas of
            <br />
            <span className="italic text-[#83b9bd]">
              expertise
            </span>
          </h2>
        </div>

        <div>
          {expertiseLeft.map((item) => (
            <div
              key={item}
              className="border-b border-[#e5e0d8] py-7 text-[12px] tracking-[2.5px] text-[#17324d] md:py-8"
            >
              {item}
            </div>
          ))}
        </div>

        <div>
          {expertiseRight.map((item) => (
            <div
              key={item}
              className="border-b border-[#e5e0d8] py-7 text-[12px] tracking-[2.5px] text-[#17324d] md:py-8"
            >
              {item}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}