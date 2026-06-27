export default function AboutSection() {
  return (
    <section id="about" className="w-full bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-8 md:px-12 grid md:grid-cols-2 gap-16 items-center">
        {/* Left content */}
        <div>
          <div className="w-12 h-1 bg-green-400 rounded-full mb-6" />

          <h2 className="text-3xl md:text-4xl font-bold text-[#0B2C5E] leading-tight">
            Driving the Future of
            <br />
            Logistics Workforce
          </h2>

          <p className="mt-6 text-gray-500 leading-relaxed max-w-lg">
            Linkit Logistics is a leading Drivers as a Service (DaaS)
            provider operating across PAN India. We specialize in
            professional driver recruitment, verification, training, and
            deployment for enterprise clients — including OEMs, fleet
            operators, and new mobility leaders.
          </p>

          <div className="mt-8 space-y-4">
            <div className="bg-slate-50 border-l-4 border-[#0B2C5E] rounded-lg p-5">
              <p className="text-xs font-bold tracking-wide text-[#0B2C5E] uppercase">
                Our Vision
              </p>
              <p className="mt-1 text-gray-600 italic">
                "To be India's most trusted driver management partner."
              </p>
            </div>

            <div className="bg-slate-50 border-l-4 border-green-500 rounded-lg p-5">
              <p className="text-xs font-bold tracking-wide text-green-600 uppercase">
                Our Mission
              </p>
              <p className="mt-1 text-gray-600 italic">
                "Delivering reliable, compliant, and skilled drivers that
                power enterprise logistics at scale."
              </p>
            </div>
          </div>
        </div>

        {/* Right images */}
        <div className="relative h-[300px] md:h-[550px] lg:h-[400px]">
          {/* Back image */}
          <div className="absolute top-0 right-0 w-48 h-64 md:w-64 md:h-80 rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/about-buses.jpg"
              alt="Professional bus driver"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Front image */}
          <div className="absolute top-8 left-0 w-56 h-72 md:w-72 md:h-80 rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/about-driver.jpg"
              alt="Professional truck driver"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating card */}
          <div className="absolute bottom-4 left-0 bg-white rounded-xl shadow-lg p-4 md:p-5 w-44 md:w-52">
            <p className="text-xl md:text-2xl font-extrabold text-[#0B2C5E]">
              PAN INDIA
            </p>
            <p className="mt-1 text-xs md:text-sm text-gray-500">
              Operational Presence
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}