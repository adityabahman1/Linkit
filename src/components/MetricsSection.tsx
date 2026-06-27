const metrics = [
  { value: "100%", label: "PAN INDIA COVERAGE" },
  { value: "15k+", label: "VERIFIED DRIVERS" },
  { value: "100%", label: "COMPLIANCE" },
  { value: "24/7", label: "OPS SUPPORT" },
];

export default function MetricsSection() {
  return (
    <section className="w-full bg-[#0B2C5E] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-8 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {metrics.map((metric) => (
          <div key={metric.label}>
            <p className="text-4xl md:text-5xl font-extrabold text-green-400">
              {metric.value}
            </p>
            <p className="mt-3 text-xs md:text-sm font-semibold tracking-wider text-blue-200">
              {metric.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}