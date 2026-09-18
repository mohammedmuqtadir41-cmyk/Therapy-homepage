const specialties = [
  {
    title: "Trauma",
    description:
      "We don’t always know when and how we’ve experienced trauma. In therapy, we’ll work together to help you process your past, understand what’s causing you to stay “stuck,” and regain a sense of safety, control, and hope. You don’t have to carry your burdens alone.",
  },
  {
    title: "EMDR",
    description:
      "Eye Movement Desensitization and Reprocessing (EMDR) is a powerful therapeutic technique that helps process and heal trauma by reworking how painful memories are stored in your brain. This allows you to find relief and move toward lasting healing.",
  },
  {
    title: "Dissociation",
    description:
      "The feeling of losing time, hearing conflicting thoughts, or feeling disconnected from yourself can be difficult to understand. Therapy can help you explore these experiences with safety, curiosity, and compassion.",
  },
  {
    title: "Special Needs Parenting",
    description:
      "Parenting a child with special needs presents unique challenges. Therapy can provide a supportive space to process stress, strengthen connection, and develop sustainable ways to navigate the demands of caregiving.",
  },
];

export default function Specialties() {
  return (
    <section className="bg-white px-6 py-28 sm:px-8 md:px-16 md:py-36 lg:px-20">
      <div className="mx-auto grid max-w-[1200px] gap-16 md:grid-cols-3 md:gap-12 lg:gap-20">

        <div>
          <h2 className="font-serif text-5xl font-normal leading-[1.1] tracking-[-1px] text-[#17324d] md:text-6xl">
            Our{" "}
            <span className="italic text-[#83b9bd]">
              specialties
            </span>
            <br />
            include...
          </h2>
        </div>

        <div className="grid gap-x-12 gap-y-20 md:col-span-2 md:grid-cols-2 lg:gap-x-16 lg:gap-y-24">
          {specialties.map((specialty) => (
            <article key={specialty.title}>
              <h3 className="font-serif text-3xl font-normal text-[#17324d]">
                {specialty.title}
              </h3>

              <p className="mt-7 text-[14px] leading-7 text-[#17324d] md:text-[15px] md:leading-8">
                {specialty.description}
              </p>

              <a
                href="#"
                className="mt-6 inline-block border-b border-[#404040] pb-2 text-[11px] tracking-[2px] text-[#404040]"
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