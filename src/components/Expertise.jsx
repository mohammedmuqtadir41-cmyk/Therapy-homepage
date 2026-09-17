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
    <section className="bg-white px-8 py-24 md:px-20">
      <div className="mx-auto grid max-w-[1200px] gap-16 md:grid-cols-3">

        {/* Heading */}
        <div>
          <h2 className="font-serif text-4xl font-normal leading-tight text-[#17324d]">
            Our areas of
            <br />
            <span className="italic text-[#83b9bd]">
              expertise
            </span>
          </h2>
        </div>

        {/* Left list */}
        <div>
          {expertiseLeft.map((item) => (
            <div
              key={item}
              className="border-b border-[#e5e0d8] py-7 text-[14px] tracking-[2px] text-[#17324d]"
            >
              {item}
            </div>
          ))}
        </div>

        {/* Right list */}
        <div>
          {expertiseRight.map((item) => (
            <div
              key={item}
              className="border-b border-[#e5e0d8] py-7 text-[14px] tracking-[2px] text-[#17324d]"
            >
              {item}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}