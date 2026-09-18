export default function Hero() {
  return (
    <section className="bg-[#f7f4ee]">
      <div className="grid lg:min-h-[720px] lg:grid-cols-12">

        {/* Main image */}
        <div className="h-[380px] sm:h-[440px] lg:col-span-5 lg:h-[720px]">
          <img
            src="https://images.unsplash.com/photo-1713602597931-92743f61a443"
            alt="Calm therapy office"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between px-7 py-10 sm:px-10 md:px-16 lg:col-span-7 lg:px-20 lg:py-14 xl:px-24">

          {/* Location */}
          <div>
            <p className="max-w-[400px] text-[10px] uppercase leading-6 tracking-[2.5px] text-[#243b36] sm:text-[11px] sm:tracking-[3px]">
              In-person therapy in Santa Monica
              <br />
              & secure telehealth across California
            </p>
          </div>

          {/* Main content */}
          <div className="my-20 max-w-[720px] sm:my-24 lg:my-0">

            <p className="mb-6 text-[11px] uppercase tracking-[3px] text-[#8fa69d]">
              Dr. Maya Reynolds, PsyD
            </p>

            <h1 className="font-serif text-[48px] font-normal leading-[1.08] tracking-[-1.5px] text-[#243b36] sm:text-[56px] md:text-[64px] xl:text-[72px]">
              A quieter place
              <br />
              to understand
              <br />
              <span className="italic text-[#8fa69d]">
                yourself.
              </span>
            </h1>

            <p className="mt-8 max-w-[590px] text-[14px] leading-7 text-[#3f4b46] sm:text-[16px] sm:leading-8">
              Therapy for thoughtful, high-achieving adults navigating
              anxiety, trauma, burnout, perfectionism, and the pressure to
              always keep going.
            </p>

            <a
              href="#contact"
              className="mt-9 inline-block rounded-full border border-[#243b36] px-8 py-4 text-[10px] tracking-[2px] text-[#243b36] transition hover:bg-[#243b36] hover:text-white"
            >
              SCHEDULE A CONSULTATION
            </a>
          </div>

          {/* Decorative image */}
          <div className="hidden justify-end lg:flex">
            <div className="h-[190px] w-[135px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
                alt="California landscape"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
