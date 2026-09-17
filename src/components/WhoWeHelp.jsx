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
    <section className="bg-white px-8 py-24">
      <div className="mx-auto max-w-[1200px]">

        {/* Heading */}
        <h2 className="font-serif text-5xl font-normal text-[#17324d]">
          Who we <span className="italic text-[#83b9bd]">help</span>
        </h2>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-3 gap-5">
          {people.map((person) => (
            <div key={person.title}>
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={person.image}
                  alt={person.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <h3 className="mt-7 font-serif text-2xl font-normal text-[#17324d]">
                {person.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}