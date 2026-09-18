export default function HonoringStory() {
  return (
    <section className="bg-white px-6 py-24 sm:px-8 md:px-16 md:py-40 lg:px-20">
      <div className="mx-auto grid max-w-[1200px] items-center gap-14 md:grid-cols-2 md:gap-16 lg:gap-24">

        <div className="overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1763477892768-fe3b7c176721"
            alt="Quiet misty landscape"
            className="h-[430px] w-full object-cover sm:h-[520px] md:h-[620px]"
          />
        </div>

        <div>

          <p className="text-[11px] uppercase tracking-[3px] text-[#8fa69d]">
            Therapy with depth
          </p>

          <h2 className="mt-6 max-w-[560px] break-words font-serif text-4xl font-normal leading-[1.1] tracking-[-1px] text-[#243b36] sm:text-5xl md:text-6xl">
            Understanding
            <br />
            where you have
            <br />
            <span className="italic text-[#8fa69d]">
              been.
            </span>
          </h2>

          <p className="mt-8 max-w-[520px] text-[15px] leading-8 text-[#243b36] md:text-[16px]">
            Past experiences can shape relationships, confidence, emotional
            responses, and our sense of safety. We can explore those patterns
            carefully and at a pace that feels manageable.
          </p>

          <p className="mt-5 max-w-[520px] text-[15px] leading-8 text-[#243b36] md:text-[16px]">
            The goal isn’t simply symptom relief. It is building insight,
            resilience, and a more sustainable relationship with yourself.
          </p>

        </div>

      </div>
    </section>
  );
}
