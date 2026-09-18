const expertise = [
  [
    "01",
    "Anxiety",
    "Racing thoughts, worry, tension, and the feeling that your mind never switches off.",
  ],
  [
    "02",
    "Panic",
    "Understanding panic symptoms and building a greater sense of safety and control.",
  ],
  [
    "03",
    "Trauma",
    "Carefully processing experiences that continue to affect how you feel and respond.",
  ],
  [
    "04",
    "Burnout",
    "Moving beyond survival mode and finding a pace that is actually sustainable.",
  ],
  [
    "05",
    "Perfectionism",
    "Exploring the pressure to perform, achieve, and always get things right.",
  ],
  [
    "06",
    "Chronic Stress",
    "Understanding the patterns that keep your mind and body continually on alert.",
  ],
  [
    "07",
    "Overthinking",
    "Creating space between your thoughts and the reactions they can create.",
  ],
  [
    "08",
    "Emotional Regulation",
    "Developing steadier and more compassionate ways to work with difficult emotions.",
  ],
  [
    "09",
    "Relationships",
    "Understanding patterns of connection, boundaries, attachment, and communication.",
  ],
  [
    "10",
    "Self-Worth",
    "Building a relationship with yourself that is less dependent on achievement or approval.",
  ],
];

export default function Expertise() {
  return (
    <section className="bg-[#243b36] px-6 py-24 text-[#f7f4ee] sm:px-8 md:px-16 md:py-32 lg:px-20">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-14 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
          <div>
            <p className="text-[11px] uppercase tracking-[3px] text-[#b8c9c1]">
              Areas of focus
            </p>

            <h2 className="mt-6 font-serif text-5xl font-normal leading-[1.05] md:text-6xl">
              Space to
              <br />
              understand
              <br />
              <span className="italic text-[#b8c9c1]">what matters.</span>
            </h2>

            <p className="mt-8 max-w-[360px] text-[15px] leading-8 text-[#dce5df]">
              Therapy can address what you are experiencing today while also
              creating room to understand the experiences and patterns that
              shaped how you learned to cope.
            </p>
          </div>

          <div className="grid border-t border-white/20 sm:grid-cols-2 sm:gap-x-8">
            {expertise.map(([number, title, text]) => (
              <article
                key={title}
                className="min-w-0 border-b border-white/20 py-5 sm:px-6 md:py-6"
              >
                <span className="text-[10px] tracking-[2px] text-[#b8c9c1]">
                  {number}
                </span>

                <h3 className="mt-4 break-words font-serif text-xl leading-snug sm:text-2xl">
                  {title}
                </h3>

                <p className="mt-3 max-w-[280px] text-[13px] leading-6 text-[#dce5df]">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
