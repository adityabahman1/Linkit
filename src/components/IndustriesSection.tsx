import { Bus, Truck, Car, Building2, Archive } from "lucide-react";

const industries = [
  { icon: Bus, title: "Logistics &\nTransport" },
  { icon: Truck, title: "Fleet Operators" },
  { icon: Car, title: "EV Mobility" },
  { icon: Building2, title: "Infrastructure" },
  { icon: Archive, title: "Warehousing" },
];

export default function IndustriesSection() {
  return (
    <section className="w-full bg-[#0B1A3D] py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        {/* Heading row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-bold tracking-wider text-green-400 uppercase">
              Sectors We Empower
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white">
              Tailored Solutions for Diverse Industries
            </h2>
          </div>
          <p className="text-blue-200 max-w-xs md:text-right">
            Our expertise spans across critical infrastructure and logistics
            domains across India.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-5">
          {industries.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-[#142559] border border-white/10 rounded-2xl p-6 hover:bg-[#1a2f6e] transition-colors"
              >
                <Icon className="w-7 h-7 text-green-400" />
                <h3 className="mt-6 text-white font-medium whitespace-pre-line">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}