export default function StorySection() {
  return (
    <section className="relative min-h-[580px] overflow-hidden md:min-h-[680px]">

      <img
        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
        alt="Open road through a natural landscape"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 flex min-h-[580px] items-center px-7 py-20 sm:px-10 md:min-h-[680px] md:px-16 lg:px-20 xl:px-24">
        <h2 className="max-w-[1050px] font-serif text-4xl font-normal leading-[1.2] tracking-[-1px] text-white sm:text-5xl md:text-6xl lg:text-[64px]">
          You deserve a place where your story is heard, valued, and
          understood.{" "}
          <span className="italic">
            Nothing will be too heavy for us to carry together.
          </span>
        </h2>
      </div>

    </section>
  );
}