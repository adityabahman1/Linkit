import { Phone, Mail, MapPin, Share2 } from "lucide-react";

const quickLinks = ["Home", "About Us", "Services", "Partner With Us"];
const legalLinks = ["Privacy Policy", "Terms of Service", "Cookie Policy"];

export default function Footer() {
  return (
    <footer className="w-full bg-white shadow-[0_-1px_10px_rgba(0,0,0,0.05)]">
      <div className="max-w-7xl mx-auto px-8 md:px-12 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand column */}
          <div>
            <div className="flex items-center">
              <img
                src="/logotrans.png"
                alt="Linkit Logistics"
                className="h-28 md:h-32 w-auto object-contain"
              />
            </div>

            <p className="mt-5 text-gray-600 leading-relaxed max-w-sm text-base">
              Empowering enterprises through professional driver management
              and infrastructure as a service. Operating across PAN India
              with a focus on reliability, efficiency, and precision.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="Share"
                className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <Share2 className="w-5 h-5" />
              </a>

              <a
                href="mailto:info@linkitlogistics.com"
                aria-label="Email"
                className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 font-bold text-xl">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-4">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gray-900 font-bold text-xl">
              Contact
            </h3>

            <ul className="mt-5 space-y-5">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-600 shrink-0" />
                <a
                  href="tel:+919588376072"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  +91-9588376072
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-green-600 shrink-0" />
                <a
                  href="mailto:info@linkitlogistics.com"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  info@linkitlogistics.com
                </a>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-green-600 shrink-0 mt-1" />
                <span className="text-gray-600">
                  Pan India
                  <br />
                  Operations Center
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-8 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 text-center md:text-left">
            © 2024 Linkit Logistics. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {legalLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-gray-500 hover:text-blue-600 transition-colors"
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