import { Phone, Mail, MapPin, Share2 } from "lucide-react";

const quickLinks = ["Home", "About Us", "Services", "Partner With Us"];
const legalLinks = ["Privacy Policy", "Terms of Service", "Cookie Policy"];

export default function Footer() {
  return (
    <footer className="w-full bg-[#0B2C5E]">
      <div className="max-w-7xl mx-auto px-8 md:px-12 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="Linkit Logistics"
                className="h-8 w-8 object-contain"
              />
              <span className="text-xl font-bold text-white">
                Linkit Logistics
              </span>
            </div>
            <p className="mt-5 text-blue-200 leading-relaxed max-w-xs">
              Empowering enterprises through professional driver management
              and infrastructure as a service. Operating across PAN India
              with a focus on reliability and precision.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="Share"
                className="w-10 h-10 rounded-lg border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              >
                <Share2 className="w-4 h-4" />
              </a>
              <a
                href="mailto:info@linkitlogistics.com"
                aria-label="Email"
                className="w-10 h-10 rounded-lg border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold text-lg">Quick Links</h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg">Contact</h3>
            <ul className="mt-5 space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-green-400 shrink-0" />
                <a
                  href="tel:+919588376072"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  +91-9588376072
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-green-400 shrink-0" />
                <a
                  href="mailto:info@linkitlogistics.com"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  info@linkitlogistics.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-green-400 shrink-0 mt-1" />
                <span className="text-blue-200">
                  Pan India
                  <br />
                  Operations Center
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-8 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-blue-200">
            © 2024 Linkit Logistics. All rights reserved.
          </p>
          <div className="flex gap-6">
            {legalLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-blue-200 hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}