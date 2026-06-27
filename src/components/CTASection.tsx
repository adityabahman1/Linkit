import { useState } from "react";
import { Send } from "lucide-react";

const SHEET_URL = "https://script.google.com/macros/s/AKfycbzFEzsnfG2UvHQJLfr58axUbeuUp2mUx3MjQbN8y70OCHip1e3jMGuC55IIeIHE1mrlaQ/exec"; // paste your deployed URL here

type FormData = {
  companyName: string;
  email: string;
  contactNo: string;
  fleetSize: string;
  vehicleType: string;
  fuelType: string;
  pickCity: string;
  dropCity: string;
};

const initialState: FormData = {
  companyName: "",
  email: "",
  contactNo: "",
  fleetSize: "",
  vehicleType: "",
  fuelType: "",
  pickCity: "",
  dropCity: "",
};

export default function CTASection() {
  const [form, setForm] = useState<FormData>(initialState);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await fetch(SHEET_URL, {
        method: "POST",
        body: JSON.stringify(form),
        headers: { "Content-Type": "text/plain" },
      });
      setStatus("sent");
      setForm(initialState);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="cta" className="w-full bg-slate-50 py-12 md:py-20">
      <div className="max-w-3xl mx-auto px-8 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0B2C5E]">
          Ready to Optimize Your Fleet Operations?
        </h2>
        <p className="mt-4 text-gray-500 max-w-xl mx-auto">
          Partner with Linkit Logistics today and experience the difference
          that professional driver management makes.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-12 bg-white rounded-3xl shadow-lg p-6 md:p-10 text-left"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <Field
              label="Company Name"
              name="companyName"
              placeholder="Enter company name"
              value={form.companyName}
              onChange={handleChange}
              required
            />
            <Field
              label="Email"
              name="email"
              type="email"
              placeholder="example@company.com"
              value={form.email}
              onChange={handleChange}
              required
            />
            <Field
              label="Contact No"
              name="contactNo"
              placeholder="10 Digit Number"
              value={form.contactNo}
              onChange={handleChange}
              pattern="[0-9]{10}"
              required
            />
            <Field
              label="Fleet Size"
              name="fleetSize"
              type="number"
              placeholder="Number of vehicles"
              value={form.fleetSize}
              onChange={handleChange}
            />
            <SelectField
              label="Vehicle Type"
              name="vehicleType"
              value={form.vehicleType}
              onChange={handleChange}
              options={["Truck", "Bus", "Van", "Car", "Other"]}
              placeholder="Select Vehicle Type"
            />
            <SelectField
              label="Fuel Type"
              name="fuelType"
              value={form.fuelType}
              onChange={handleChange}
              options={["Diesel", "Petrol", "CNG", "Electric"]}
              placeholder="Select Fuel Type"
            />
            <Field
              label="Pick City"
              name="pickCity"
              placeholder="Origin city"
              value={form.pickCity}
              onChange={handleChange}
            />
            <Field
              label="Drop City"
              name="dropCity"
              placeholder="Destination city"
              value={form.dropCity}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-8 w-full bg-green-500 hover:bg-green-600 text-[#0B2C5E] font-bold text-lg py-4 rounded-xl flex items-center justify-center gap-2 transition-colors disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Request a Partnership"}
            <Send className="w-5 h-5" />
          </button>

          {status === "sent" && (
            <p className="mt-4 text-green-600 text-center font-medium">
              Thanks! We'll get in touch shortly.
            </p>
          )}
          {status === "error" && (
            <p className="mt-4 text-red-600 text-center font-medium">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

/* --- Reusable subcomponents --- */

function Field({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block text-xs font-bold tracking-wide text-[#0B2C5E] uppercase mb-2">
        {label}
      </label>
      <input
        {...props}
        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0B2C5E]/20 focus:border-[#0B2C5E]"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  value,
  onChange,
  options,
  placeholder,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  placeholder: string;
}) {
  return (
    <div>
      <label className="block text-xs font-bold tracking-wide text-[#0B2C5E] uppercase mb-2">
        {label}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0B2C5E]/20 focus:border-[#0B2C5E] bg-white"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}