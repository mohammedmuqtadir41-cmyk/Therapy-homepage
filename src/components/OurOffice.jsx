// import '../Images/'

export default function OurOffice() {
  return (
    <section
      id="office"
      className="bg-[#dce5df] px-6 py-24 sm:px-8 md:px-16 md:py-32 lg:px-20"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-14 md:grid-cols-[1fr_1.15fr] md:items-center md:gap-20">
          {/* Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="mt-10 overflow-hidden">
              <img
                src="Images/office1.jpeg"
                alt="Dr. Maya Reynolds therapy office"
                className="h-[360px] w-full object-cover sm:h-[440px]"
              />
            </div>

            <div className="overflow-hidden">
              <img
                src="/Images/office2.jpeg"
                alt="Comfortable interior of Dr. Maya Reynolds therapy office"
                className="h-[360px] w-full object-cover sm:h-[440px]"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-[11px] uppercase tracking-[3px] text-[#6f8c82]">
              Our Office
            </p>

            <h2 className="mt-6 max-w-[600px] font-serif text-5xl font-normal leading-[1.05] tracking-[-1px] text-[#243b36] md:text-6xl">
              A calm space to
              <br />
              <span className="italic text-[#6f8c82]">feel at ease.</span>
            </h2>

            <p className="mt-8 max-w-[540px] text-[15px] leading-8 text-[#3f4b46] md:text-[16px]">
              My Santa Monica office is a quiet, private space designed to feel
              calm and grounding. Natural light, comfortable surroundings, and
              an uncluttered environment create room to slow down and settle
              into the work of therapy.
            </p>

            <p className="mt-5 max-w-[540px] text-[15px] leading-8 text-[#3f4b46] md:text-[16px]">
              I offer in-person sessions from the office, as well as secure
              telehealth sessions for clients located throughout California.
            </p>

            <div className="mt-10 border-t border-[#9eafa7] pt-6">
              <p className="text-[10px] uppercase tracking-[2px] text-[#6f8c82]">
                Santa Monica Office
              </p>

              <p className="mt-3 font-serif text-xl text-[#243b36]">
                123th Street 45 W
                <br />
                Santa Monica, CA 90401
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
