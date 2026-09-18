export default function StorySection() {
  return (
    <section className="relative h-[520px] overflow-hidden md:h-[600px]">
      <img
        src="https://images.unsplash.com/photo-1612041323505-4afe5993563f?auto=format&fit=crop&w=2000&q=80"
        alt="Quiet green landscape"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-[#182824]/35" />

      <div className="relative z-10 flex h-full items-end px-7 py-12 sm:px-10 md:px-16 md:py-16 lg:px-20">
        <div>
          <p className="mb-5 text-[10px] uppercase tracking-[3px] text-white/80">
            Your story matters
          </p>

          <h2 className="max-w-[850px] font-serif text-4xl font-normal leading-[1.08] tracking-[-1px] text-white sm:text-5xl md:text-6xl lg:text-[68px]">
            You don’t have to
            <br />
            become someone
            <br />
            <span className="italic">
              different to feel better.
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
}
