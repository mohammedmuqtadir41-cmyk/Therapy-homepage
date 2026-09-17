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
    <section className="bg-white px-8 py-24 md:px-20">
      <div className="mx-auto grid max-w-[1200px] gap-16 md:grid-cols-3">

        {/* Heading */}
        <div>
          <h2 className="font-serif text-4xl font-normal leading-[1.3] text-[#17324d]">
            Our{" "}
            <span className="italic text-[#83b9bd]">
              specialties
            </span>
            <br />
            include...
          </h2>
        </div>

        {/* Specialty grid */}
        <div className="col-span-2 grid grid-cols-1 gap-x-16 gap-y-24 md:grid-cols-2">
          {specialties.map((specialty) => (
            <article key={specialty.title}>
              <h3 className="font-serif text-2xl font-normal text-[#17324d]">
                {specialty.title}
              </h3>

              <p className="mt-8 text-[16px] leading-8 text-[#17324d]">
                {specialty.description}
              </p>

              <a
                href="#"
                className="mt-6 inline-block border-b border-[#404040] pb-2 text-[12px] tracking-[1.5px] text-[#404040]"
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