export default function Hero() {
  return (
    <section id="home" className="w-full bg-gradient-to-br from-slate-50 to-white -mt-12">
      <div className="max-w-7xl mx-auto px-8 md:px-12 py-12 md:py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div>
          <span className="inline-block bg-blue-50 text-[#0B2C5E] text-xs font-bold tracking-wide uppercase px-4 py-1.5 rounded-full border border-blue-100">
            Logistics Reimagined
          </span>

          <h1 className="mt-6 text-3xl md:text-5xl font-bold leading-tight">
            <span className="text-[#0B2C5E]">India's Trusted Driver</span>
            <br />
            <span className="text-green-700">Management Partner</span>
          </h1>

          <p className="mt-6 text-gray-500 text-lg leading-relaxed max-w-md">
            Powering Logistics. Driving Excellence. We deliver reliable,
            compliant, and skilled drivers that power enterprise logistics at
            scale.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-[#0B2C5E] text-white font-semibold px-6 py-3.5 rounded-lg flex items-center gap-2 hover:bg-[#0a2450] transition-colors">
              Hire Professional Drivers
              <span aria-hidden="true">→</span>
            </button>
            <button className="border border-gray-300 text-[#0B2C5E] font-semibold px-6 py-3.5 rounded-lg hover:bg-gray-50 transition-colors">
              View Solutions
            </button>
          </div>
        </div>

        {/* Right image */}
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-tr from-green-200/40 via-transparent to-blue-200/40 rounded-3xl blur-2xl -z-10" />
          <div className="rounded-3xl overflow-hidden border-4 border-white shadow-xl h-[300px] md:h-[450px]">
            <img
              src="/hero-drivers.jpg"
              alt="Professional drivers with logistics trucks"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}