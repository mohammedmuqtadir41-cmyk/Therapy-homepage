export default function HonoringStory() {
  return (
    <section className="bg-white px-8 py-28 md:px-20 md:py-36">
      <div className="mx-auto grid max-w-[1200px] gap-16 md:grid-cols-2 md:items-center">

        <div className="overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e"
            alt="Quiet natural landscape"
            className="h-[500px] w-full object-cover md:h-[620px]"
          />
        </div>

        <div>
          <p className="text-[13px] uppercase tracking-[3px] text-[#17324d]">
            Your story matters
          </p>

          <h2 className="mt-6 font-serif text-5xl font-normal leading-[1.15] text-[#17324d] md:text-6xl">
            Honoring where
            <br />
            you’ve been
            <br />
            <span className="italic text-[#83b9bd]">
              & where you’re headed.
            </span>
          </h2>

          <p className="mt-8 max-w-[520px] text-[16px] leading-8 text-[#17324d]">
            Therapy is not about changing who you are. It is about creating
            space to understand yourself, process what you have experienced,
            and move toward the life you want to build.
          </p>
        </div>

      </div>
    </section>
  );
}