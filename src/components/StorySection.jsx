export default function StorySection() {
  return (
    <section className="relative min-h-[600px] overflow-hidden md:min-h-[700px]">

      <img
        src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9"
        alt="California landscape"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-[#182824]/45" />

      <div className="relative z-10 flex min-h-[600px] items-center px-7 py-20 sm:px-10 md:min-h-[700px] md:px-16 lg:px-20 xl:px-24">

        <h2 className="max-w-[1000px] font-serif text-4xl font-normal leading-[1.15] tracking-[-1px] text-white sm:text-5xl md:text-6xl lg:text-[64px]">
          You don't have to
          <br />
          become someone
          <br />
          <span className="italic">
            different to feel better.
          </span>
        </h2>

      </div>
    </section>
  );
}