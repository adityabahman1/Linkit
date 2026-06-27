export default function ClientsSection() {
  return (
    <section id="clients" className="w-full bg-white py-12 md:py-20 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-8 md:px- text-center">
        <p className="text-xs font-bold tracking-wider text-green-600 uppercase">
          Partnership Spotlight
        </p>
        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[#0B2C5E]">
          Our Top Clients
        </h2>
        <p className="mt-4 text-gray-500 mt-8">
          Trusted by leading logistics and mobility enterprises across India.
        </p>

        <div className="mt-0 flex justify-center">
          <img
            src="/clients/all-clients.png"
            alt="Linkit Logistics Partners"
            className="w-full max-w-4xl h-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
          />
        </div>
      </div>
    </section>
  );
}
