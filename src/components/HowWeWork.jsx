const methods = [
  {
    number: "01",
    title: "Warm",
    text: "Therapy should feel human. I create a space where you can be honest without needing to perform, explain everything perfectly, or have the answers already.",
  },
  {
    number: "02",
    title: "Collaborative",
    text: "We work together. Your experiences, goals, and perspective guide the process rather than following a one-size-fits-all formula.",
  },
  {
    number: "03",
    title: "Grounded",
    text: "Our work is structured enough to feel supportive while leaving room for reflection, depth, and meaningful discovery.",
  },
];

export default function HowWeWork() {
  return (
    <section className="bg-[#f7f4ee] px-6 py-28 sm:px-8 md:px-16 md:py-36 lg:px-20">
      <div className="mx-auto max-w-[1200px]">

        <div className="grid gap-16 md:grid-cols-3 md:gap-12 lg:gap-20">

          <div>
            <p className="text-[11px] uppercase tracking-[3px] text-[#8fa69d]">
              My approach
            </p>

            <h2 className="mt-6 font-serif text-5xl font-normal leading-[1.05] tracking-[-1px] text-[#243b36] md:text-6xl">
              How we
              <br />
              <span className="italic text-[#8fa69d]">
                work
              </span>
            </h2>
          </div>

          <div className="grid gap-12 sm:grid-cols-3 md:col-span-2 md:gap-8 lg:gap-12">

            {methods.map((method) => (
              <article key={method.number}>

                <p className="text-[11px] tracking-[3px] text-[#8fa69d]">
                  {method.number}
                </p>

                <h3 className="mt-5 font-serif text-3xl font-normal text-[#243b36]">
                  {method.title}
                </h3>

                <p className="mt-6 text-[14px] leading-7 text-[#243b36]">
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