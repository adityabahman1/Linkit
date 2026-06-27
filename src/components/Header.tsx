import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
];

export default function Header() {
  const [active] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 md:px-12 py-4">
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

        {/* Desktop Nav Links */}
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

        {/* Desktop CTA Button */}
        <button className="hidden md:block bg-[#0B2C5E] text-white text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-[#0a2450] transition-colors">
          Partner With Us
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#0B2C5E]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 absolute w-full left-0 p-8 flex flex-col gap-6 shadow-xl animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-lg font-semibold transition-colors ${
                  active === link.label ? "text-[#0B2C5E]" : "text-gray-600"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <button className="w-full bg-[#0B2C5E] text-white font-bold py-4 rounded-xl">
            Partner With Us
          </button>
        </div>
      )}
    </header>
  );
}