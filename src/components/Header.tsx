import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
];

export default function Header() {
  const [active] = useState("Home");

  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo + Brand */}
        <div className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Linkit Logistics"
            className="h-8 w-8 object-contain"
          />
          <span className="text-xl font-bold text-[#0B2C5E]">
            Linkit Logistics
          </span>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium pb-1 transition-colors ${
                active === link.label
                  ? "text-[#0B2C5E] border-b-2 border-[#0B2C5E]"
                  : "text-gray-600 hover:text-[#0B2C5E]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <button className="bg-[#0B2C5E] text-white text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-[#0a2450] transition-colors">
          Partner With Us
        </button>
      </div>
    </header>
  );
}