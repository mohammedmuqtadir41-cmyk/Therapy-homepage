const people = [
  {
    title: "Adults",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7",
  },
  {
    title: "Couples",
    image:
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2",
  },
  {
    title: "Children & Teens",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9",
  },
];

export default function WhoWeHelp() {
  return (
    <section className="bg-white px-6 py-24 sm:px-8 md:px-16 md:py-32 lg:px-20">
      <div className="mx-auto max-w-[1200px]">

        <h2 className="font-serif text-5xl font-normal tracking-[-1px] text-[#17324d] md:text-6xl">
          Who we{" "}
          <span className="italic text-[#83b9bd]">
            help
          </span>
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 md:mt-20 md:grid-cols-3 md:gap-5">
          {people.map((person) => (
            <article key={person.title}>
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={person.image}
                  alt={person.title}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>

              <h3 className="mt-6 font-serif text-2xl font-normal text-[#17324d] md:text-3xl">
                {person.title}
              </h3>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}