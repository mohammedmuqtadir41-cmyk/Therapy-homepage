const methods = [
  {
    number: "01",
    title: "Warm",
    text: "Therapy should feel human. You can be honest without needing to perform, explain everything perfectly, or have the answers already.",
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
    <section id="approach" className="bg-[#dce5df] px-6 py-24 sm:px-8 md:px-16 md:py-32 lg:px-20">
      <div className="mx-auto max-w-[1200px]">

        <div className="grid gap-14 md:grid-cols-[0.75fr_1.25fr] md:gap-20">

          <div>
            <p className="text-[11px] uppercase tracking-[3px] text-[#6f8c82]">
              My approach
            </p>

            <h2 className="mt-6 font-serif text-5xl font-normal leading-[1.05] tracking-[-1px] text-[#243b36] md:text-6xl">
              How we
              <br />
              <span className="italic text-[#6f8c82]">work together.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 border-t border-[#9eafa7] sm:grid-cols-3 sm:divide-x sm:divide-[#9eafa7]">
            {methods.map((method) => (
              <article
                key={method.number}
                className="border-b border-[#9eafa7] py-8 sm:px-6 lg:py-10"
              >
                <p className="text-[10px] tracking-[3px] text-[#6f8c82]">
                  {method.number}
                </p>

                <h3 className="mt-5 font-serif text-3xl text-[#243b36]">
                  {method.title}
                </h3>

                <p className="mt-5 text-[14px] leading-7 text-[#3f4b46]">
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
