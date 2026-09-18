export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f8f7f3]">
      <div className="grid min-h-[680px] grid-cols-1 lg:grid-cols-12">

        {/* Main image */}
        <div className="h-[420px] lg:col-span-4 lg:h-[680px]">
          <img
            src="https://images.unsplash.com/photo-1504150558240-0b4fd8946624"
            alt="Family"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="relative flex flex-col px-7 py-12 sm:px-10 md:px-16 lg:col-span-8 lg:px-20 lg:py-14 xl:px-28">

          <p className="text-[11px] uppercase leading-6 tracking-[2.5px] text-[#17324d] sm:text-[13px] sm:tracking-[3px]">
            Online & In-Person Counseling In
            <br />
            Newbury Park & Across CA
          </p>

          <div className="mt-20 max-w-[760px] lg:mt-32">
            <h1 className="font-serif text-[42px] font-normal leading-[1.2] tracking-[-1px] text-[#17324d] sm:text-[48px] md:text-[54px] xl:text-[60px]">
              Rebuild your foundation
              <br />
              on solid ground and finally
              <br />
              begin to{" "}
              <span className="italic text-[#83b9bd]">
                Thrive
              </span>.
            </h1>

            <p className="mt-8 max-w-[620px] text-[14px] leading-7 text-[#17324d] sm:text-[16px] sm:leading-8">
              Specialized therapy for adults, couples, teens, and children
              to reflect, heal, and grow.
            </p>
          </div>
        </div>
      </div>

      {/* Floating image */}
      <div className="absolute right-0 top-[185px] hidden h-[330px] w-[120px] lg:block xl:h-[350px] xl:w-[135px]">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          alt="Ocean"
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
}