export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f7f4ee]">
      <div className="grid min-h-[680px] grid-cols-1 lg:grid-cols-12">

        {/* Main image */}
        <div className="h-[430px] lg:col-span-5 lg:h-[680px]">
          <img
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df"
            alt="Quiet therapy setting"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col px-7 py-12 sm:px-10 md:px-16 lg:col-span-7 lg:px-20 lg:py-16 xl:px-28">

          <p className="text-[11px] uppercase leading-6 tracking-[2.5px] text-[#243b36] sm:text-[12px] sm:tracking-[3px]">
            In-Person Therapy in Santa Monica
            <br />
            & Secure Telehealth Across California
          </p>

          <div className="mt-20 max-w-[720px] lg:mt-32">

            <h1 className="font-serif text-[43px] font-normal leading-[1.14] tracking-[-1px] text-[#243b36] sm:text-[50px] md:text-[56px] xl:text-[62px]">
              A quieter place
              <br />
              to understand
              <br />
              <span className="italic text-[#8fa69d]">
                yourself.
              </span>
            </h1>

            <p className="mt-8 max-w-[580px] text-[14px] leading-7 text-[#243b36] sm:text-[16px] sm:leading-8">
              Therapy for thoughtful, high-achieving adults navigating
              anxiety, trauma, burnout, perfectionism, and the pressure to
              always keep going.
            </p>

            <a
              href="#"
              className="mt-9 inline-block rounded-full border border-[#243b36] px-8 py-4 text-[11px] tracking-[2px] text-[#243b36] transition hover:bg-[#243b36] hover:text-white"
            >
              SCHEDULE A CONSULTATION
            </a>

          </div>
        </div>
      </div>

      {/* Decorative image */}
      <div className="absolute right-0 top-[190px] hidden h-[330px] w-[125px] lg:block">
        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
          alt="California landscape"
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
}