const specialties = [
  {
    title: "Anxiety & Panic",
    description:
      "Support for racing thoughts, constant worry, panic, physical tension, and the feeling that your mind never quite switches off.",
  },
  {
    title: "Trauma",
    description:
      "Careful, paced therapy for single-incident and complex trauma, including long-standing patterns connected to childhood, relationships, or chronic stress.",
  },
  {
    title: "Burnout & Perfectionism",
    description:
      "For people who are used to achieving, performing, and pushing through, but are beginning to realize that the pace is no longer sustainable.",
  },
  {
    title: "EMDR",
    description:
      "A trauma-focused approach that can help process distressing experiences and reduce the emotional intensity connected to painful memories.",
  },
  {
    title: "Emotional Regulation",
    description:
      "Learn to recognize emotional patterns, understand what your nervous system is communicating, and develop steadier ways of responding.",
  },
  {
    title: "Relationships & Self-Worth",
    description:
      "Explore how past experiences influence connection, boundaries, confidence, attachment, and the way you relate to yourself and others.",
  },
];

export default function Specialties() {
  return (
    <section className="bg-white px-6 py-28 sm:px-8 md:px-16 md:py-36 lg:px-20">
      <div className="mx-auto grid max-w-[1200px] gap-16 md:grid-cols-3 md:gap-12 lg:gap-20">

        <div>
          <h2 className="font-serif text-5xl font-normal leading-[1.05] tracking-[-1px] text-[#243b36] md:text-6xl">
            What we can
            <br />
            <span className="italic text-[#8fa69d]">
              work through
            </span>
          </h2>
        </div>

        <div className="grid gap-x-12 gap-y-20 md:col-span-2 md:grid-cols-2 lg:gap-x-16 lg:gap-y-24">

          {specialties.map((specialty) => (
            <article key={specialty.title}>

              <h3 className="font-serif text-3xl font-normal text-[#243b36]">
                {specialty.title}
              </h3>

              <p className="mt-7 text-[14px] leading-7 text-[#243b36] md:text-[15px] md:leading-8">
                {specialty.description}
              </p>

              <a
                href="#"
                className="mt-6 inline-block border-b border-[#243b36] pb-2 text-[11px] tracking-[2px] text-[#243b36]"
              >
                LEARN MORE
              </a>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}