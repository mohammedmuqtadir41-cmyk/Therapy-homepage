export default function Specialties() {
  const specialties = [
    {
      number: "01",
      title: "Anxiety & Panic",
      description:
        "Support for racing thoughts, constant worry, panic, and the feeling that your mind never quite switches off.",
    },
    {
      number: "02",
      title: "Trauma & EMDR",
      description:
        "A careful, paced approach to processing experiences that continue to shape how you feel, relate, and respond.",
    },
    {
      number: "03",
      title: "Burnout & Perfectionism",
      description:
        "For high-achieving adults who are tired of living under constant pressure to perform, achieve, or get everything right.",
    },
    {
      number: "04",
      title: "Chronic Stress",
      description:
        "Helping you understand the patterns that keep your nervous system on alert and develop more sustainable ways of living.",
    },
    {
      number: "05",
      title: "Emotional Regulation",
      description:
        "Learning to recognize, understand, and work with difficult emotions without feeling controlled by them.",
    },
    {
      number: "06",
      title: "Relationships & Self-Worth",
      description:
        "Exploring how past experiences can influence relationships, confidence, boundaries, and your sense of safety with others.",
    },
  ];

  return (
    <section
      id="specialties"
      className="bg-[#F7F4EE] px-6 py-24 md:px-10 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16 max-w-3xl">
          <p className="mb-5 text-sm uppercase tracking-[0.25em] text-[#8FA69D]">
            Areas of Focus
          </p>

          <h2 className="font-serif text-4xl leading-tight text-[#243B36] md:text-5xl lg:text-6xl">
            Space to understand
            <br />
            <span className="italic">what you are carrying.</span>
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-8 text-[#4B5551] md:text-lg">
            Therapy can help you make sense of patterns that have become
            difficult to see on your own, while creating practical ways
            forward that feel sustainable and genuinely yours.
          </p>
        </div>

        {/* Specialty Grid */}
        <div className="grid border-t border-[#D8CBB9] md:grid-cols-2 lg:grid-cols-3">
          {specialties.map((specialty) => (
            <div
              key={specialty.number}
              id={specialty.title === "Trauma & EMDR" ? "emdr" : undefined}
              className="scroll-mt-24 border-b border-[#D8CBB9] py-10 md:px-8 md:py-12 lg:px-10"
            >
              <span className="text-xs tracking-[0.2em] text-[#8FA69D]">
                {specialty.number}
              </span>

              <h3 className="mt-5 font-serif text-2xl text-[#243B36] md:text-3xl">
                {specialty.title}
              </h3>

              <p className="mt-4 max-w-sm text-sm leading-7 text-[#5B625F] md:text-base">
                {specialty.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
