export default function StorySection() {
  return (
    <section className="relative h-[520px] w-full overflow-hidden">
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
        alt="Beach"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Quote */}
      <div className="relative z-10 flex h-full items-center px-8 md:px-20">
        <h2 className="max-w-[850px] font-serif text-4xl font-normal leading-[1.35] text-white md:text-5xl">
          You deserve a place where your story is
          <br />
          heard, valued, and understood.{" "}
          <span className="italic">
            Nothing will be too heavy for us to carry together.
          </span>
        </h2>
      </div>
    </section>
  );
}