const faqs = [
  {
    question: "Do you offer in-person therapy?",
    answer:
      "Yes. Dr. Maya Reynolds offers in-person therapy from her private office in Santa Monica, as well as secure telehealth for clients located throughout California.",
  },
  {
    question: "Who do you work with?",
    answer:
      "Therapy is designed for adults, including high-achieving professionals, entrepreneurs, creatives, and others navigating anxiety, trauma, burnout, perfectionism, chronic stress, and relationship concerns.",
  },
  {
    question: "Do you work with trauma?",
    answer:
      "Yes. Trauma work can include both single-incident experiences and longer-standing patterns connected to childhood, relationships, or chronic stress. The work is paced carefully around safety and stabilization.",
  },
  {
    question: "What approaches do you use?",
    answer:
      "Treatment may incorporate CBT, EMDR, mindfulness-based practices, and body-oriented techniques depending on your goals and what feels appropriate for you.",
  },
];

export default function FAQSection() {
  return (
    <section
      id="faqs"
      className="bg-white px-6 py-24 sm:px-8 md:px-16 md:py-32 lg:px-20"
    >
      <div className="mx-auto max-w-[1000px]">
        <div className="max-w-[650px]">
          <p className="text-[11px] uppercase tracking-[3px] text-[#8fa69d]">
            Frequently asked
          </p>

          <h2 className="mt-6 font-serif text-5xl font-normal leading-[1.05] tracking-[-1px] text-[#243b36] md:text-6xl">
            A few things you
            <br />
            may be <span className="italic text-[#8fa69d]">wondering.</span>
          </h2>
        </div>

        <div className="mt-14 border-t border-[#d8cbb9]">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group border-b border-[#d8cbb9]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-8 py-7 font-serif text-xl text-[#243b36] md:text-2xl">
                {faq.question}

                <span className="text-2xl font-light transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="max-w-[700px] pb-7 pr-10 text-[14px] leading-7 text-[#53615c] md:text-[15px]">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}