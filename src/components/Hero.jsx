export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f8f7f3]">
      <div className="grid min-h-[620px] w-full grid-cols-12">

        {/* Left image */}
        <div className="col-span-4 h-[620px]">
          <img
            src="https://images.unsplash.com/photo-1504150558240-0b4fd8946624"
            alt="Family"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Main content */}
        <div className="relative col-span-8 px-32 pt-10">

          <p className="text-[14px] uppercase tracking-[2.5px] leading-7 text-[#17324d]">
            Online & In-Person Counseling In
            <br />
            Newbury Park & Across CA
          </p>

          <div className="absolute left-32 top-[195px]">
            <h1 className="max-w-[650px] font-serif text-[46px] font-normal leading-[1.5] tracking-[-1px] text-[#292929]">
              Rebuild your foundation
              <br />
              on solid ground and finally
              <br />
              begin to{" "}
              <span className="italic text-[#83b9bd]">
                Thrive
              </span>
              .
            </h1>

            <p className="mt-7 max-w-[650px] text-[16px] leading-8 text-[#17324d]">
              Specialized therapy for adults, couples, teens, and children
              to reflect, heal, and grow.
            </p>
          </div>
        </div>
      </div>

      {/* Right floating image */}
      <div className="absolute right-0 top-[187px] h-[305px] w-[108px]">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          alt="Ocean"
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
}