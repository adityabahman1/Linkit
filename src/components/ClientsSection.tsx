const clients = [
  { name: "Switch", logo: "/clients/switch.png" },
  { name: "Client 2", logo: "/clients/client2.png" },
  { name: "Kappa", logo: "/clients/kappa.png" },
  { name: "EFC", logo: "/clients/efc.png" },
];

export default function ClientsSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-xs font-bold tracking-wider text-green-600 uppercase">
          Partnership Spotlight
        </p>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[#0B2C5E]">
          Our Top Clients
        </h2>
        <p className="mt-4 text-gray-500">
          Trusted by leading logistics and mobility enterprises across India.
        </p>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">
          {clients.map((client) => (
            <div
              key={client.name}
              className="bg-slate-50 rounded-2xl h-40 flex items-center justify-center p-6 hover:bg-slate-100 transition-colors"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-24 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}