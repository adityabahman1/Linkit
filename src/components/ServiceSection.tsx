import { ShieldCheck, RefreshCcw, TrendingUp } from "lucide-react";

const services = [
  {
    number: "01",
    icon: ShieldCheck,
    iconBg: "bg-slate-100",
    iconColor: "text-[#0B2C5E]",
    title: "Recruitment & Verification",
    description:
      "Stringent background verification & compliance checks ensuring only the most reliable personnel handle your fleet.",
  },
  {
    number: "02",
    icon: RefreshCcw,
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
    title: "Training & Deployment",
    description:
      "Continuous skill development programs and on-demand deployment to meet fluctuating logistics requirements.",
  },
  {
    number: "03",
    icon: TrendingUp,
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
    title: "Monitoring & Management",
    description:
      "Real-time performance tracking and operations management to ensure seamless end-to-end driver lifecycle support.",
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full bg-slate-50 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-wider text-green-600 uppercase">
            Our Solution
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[#0B2C5E]">
            End-to-End Driver Management
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.number}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center ${service.iconBg}`}
                >
                  <Icon className={`w-6 h-6 ${service.iconColor}`} />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-[#0B2C5E]">
                  {service.title}
                </h3>
                <p className="mt-3 text-gray-500 leading-relaxed">
                  {service.description}
                </p>

                <p className="mt-8 text-4xl font-extrabold text-slate-100">
                  {service.number}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}