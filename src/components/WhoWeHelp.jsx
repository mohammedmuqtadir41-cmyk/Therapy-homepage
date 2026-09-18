const people = [
  {
    title: "Adults",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    text: "Adults navigating anxiety, stress, burnout, relationships, transitions, and the complicated feeling of knowing something needs to change.",
  },
  {
    title: "High Achievers",
    image:
      "https://images.unsplash.com/photo-1448932155749-638e51b56f03",
    text: "Thoughtful professionals, entrepreneurs, and creatives who are successful on the outside but exhausted by the pressure they carry internally.",
  },
  {
    title: "Trauma Survivors",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
    text: "People working through painful experiences and seeking greater safety, emotional regulation, connection, and understanding.",
  },
];

export default function WhoWeHelp() {
  return (
    <section id="about" className="bg-white px-6 py-24 sm:px-8 md:px-16 md:py-32 lg:px-20">
      <div className="mx-auto max-w-[1200px]">

        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <h2 className="font-serif text-5xl font-normal leading-[1.05] tracking-[-1px] text-[#243b36] md:text-6xl">
            Who I{" "}
            <span className="italic text-[#8fa69d]">work with</span>
          </h2>

          <p className="max-w-[390px] text-[14px] leading-7 text-[#4b5551]">
            You don’t need to be in crisis to begin therapy. Sometimes the
            most useful time to pause is when you realize you have been
            carrying too much for too long.
          </p>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 md:mt-20 md:grid-cols-3 md:gap-6">
          {people.map((person) => (
            <article key={person.title}>
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={person.image}
                  alt={person.title}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>

              <h3 className="mt-6 font-serif text-3xl text-[#243b36]">
                {person.title}
              </h3>

              <p className="mt-4 text-[14px] leading-7 text-[#4b5551]">
                {person.text}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
