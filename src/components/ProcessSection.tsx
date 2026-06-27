import {
  BarChart3,
  UserSearch,
  GraduationCap,
  Truck,
  Gauge,
} from "lucide-react";

const steps = [
  {
    icon: BarChart3,
    title: "Requirement Analysis",
    description: "Understanding your fleet size and route needs.",
  },
  {
    icon: UserSearch,
    title: "Sourcing & Verification",
    description: "Rigorous background and license validation.",
  },
  {
    icon: GraduationCap,
    title: "Training",
    description: "Safety, technical, and soft-skill development.",
  },
  {
    icon: Truck,
    title: "Deployment",
    description: "Immediate placement into operational routes.",
  },
  {
    icon: Gauge,
    title: "Performance Monitoring",
    description: "Real-time tracking and ongoing feedback.",
  },
];

export default function ProcessSection() {
  return (
    <section className="w-full bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-wider text-green-600 uppercase">
            Efficiency Redefined
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[#0B2C5E]">
            Our Seamless Process
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative grid grid-cols-2 md:grid-cols-5 gap-y-10 gap-x-4">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-9 left-0 right-0 h-px bg-gray-200" />

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="relative flex flex-col items-center text-center"
              >
                <div className="w-[72px] h-[72px] bg-white border border-gray-200 rounded-xl flex items-center justify-center shadow-sm z-10">
                  <Icon className="w-7 h-7 text-[#0B2C5E]" />
                </div>

                <h3 className="mt-5 text-base font-semibold text-[#0B2C5E]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500 max-w-[160px]">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}