const people = [
  {
    title: "Adults",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    text: "For adults navigating anxiety, stress, burnout, relationships, and major life transitions.",
  },
  {
    title: "High Achievers",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
    text: "For thoughtful professionals, entrepreneurs, and creatives who are tired of living under constant internal pressure.",
  },
  {
    title: "Trauma Survivors",
    image:
      "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00",
    text: "For people working through painful past experiences and seeking greater safety, regulation, and connection.",
  },
];

export default function WhoWeHelp() {
  return (
    <section className="bg-white px-6 py-28 sm:px-8 md:px-16 md:py-36 lg:px-20">
      <div className="mx-auto max-w-[1200px]">

        <h2 className="font-serif text-5xl font-normal tracking-[-1px] text-[#243b36] md:text-6xl">
          Who I{" "}
          <span className="italic text-[#8fa69d]">
            work with
          </span>
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 md:mt-20 md:grid-cols-3 md:gap-6">

          {people.map((person) => (
            <article key={person.title}>

              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={person.image}
                  alt={person.title}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>

              <h3 className="mt-6 font-serif text-3xl font-normal text-[#243b36]">
                {person.title}
              </h3>

              <p className="mt-4 text-[14px] leading-7 text-[#243b36]">
                {person.text}
              </p>

            </article>
          ))}

        </div>
      </div>
    </section>
  );
}