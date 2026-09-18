const methods = [
  {
    number: "01",
    title: "Listen",
    text: "We begin by understanding your experiences, concerns, and what you hope will change.",
  },
  {
    number: "02",
    title: "Understand",
    text: "Together, we explore patterns, experiences, and emotions with curiosity and compassion.",
  },
  {
    number: "03",
    title: "Move Forward",
    text: "We develop practical tools and deeper insight to help you create meaningful, lasting change.",
  },
];

export default function HowWeWork() {
  return (
    <section className="bg-[#f8f7f3] px-6 py-28 sm:px-8 md:px-16 md:py-36 lg:px-20">
      <div className="mx-auto max-w-[1200px]">

        <div className="grid gap-16 md:grid-cols-3 md:gap-12 lg:gap-20">

          <div>
            <h2 className="font-serif text-5xl font-normal leading-[1.1] tracking-[-1px] text-[#17324d] md:text-6xl">
              How we
              <br />
              <span className="italic text-[#83b9bd]">
                work
              </span>
            </h2>
          </div>

          <div className="grid gap-12 sm:grid-cols-3 md:col-span-2 md:gap-8 lg:gap-12">
            {methods.map((method) => (
              <article key={method.number}>
                <p className="text-[11px] tracking-[3px] text-[#83b9bd]">
                  {method.number}
                </p>

                <h3 className="mt-5 font-serif text-3xl font-normal text-[#17324d]">
                  {method.title}
                </h3>

                <p className="mt-6 text-[14px] leading-7 text-[#17324d]">
                  {method.text}
                </p>
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}