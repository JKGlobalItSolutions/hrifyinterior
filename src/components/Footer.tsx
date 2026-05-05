import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="space-y-4">
          <img
            src={logo}
            alt="HRIFY Interior & Exterior"
            className="h-20 object-contain bg-white p-2 border border-gray-200 rounded-lg"
          />

          <p className="text-primary-foreground/70 font-body text-sm leading-relaxed max-w-xs">
            Transforming spaces into extraordinary experiences. Your trusted
            partner for modern interior and exterior design solutions.
          </p>

          {/* Social Icons */}
          {/* <div className="flex gap-4 pt-2">

            <a href="#" className="hover:text-white transition">
              <Facebook size={18} />
            </a>

            <a href="#" className="hover:text-white transition">
              <Instagram size={18} />
            </a>

            <a href="#" className="hover:text-white transition">
              <Linkedin size={18} />
            </a>

          </div> */}
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-semibold text-lg mb-4">
            Quick Links
          </h4>

          <ul className="space-y-2">
            {["Home", "About", "Services", "Projects", "Contact"].map(
              (item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-primary-foreground/70 hover:text-white text-sm font-body transition-all hover:pl-1"
                  >
                    {item}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-heading font-semibold text-lg mb-4">
            Our Services
          </h4>

          <ul className="space-y-2 text-sm font-body text-primary-foreground/70">
            <li>False Ceiling</li>
            <li>UPVC Windows</li>
            <li>ACP Work</li>
            <li>Glass Work</li>
            <li>Modular Kitchen</li>
            <li>Aluminium Partition</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-semibold text-lg mb-4">
            Contact Us
          </h4>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin
                size={16}
                className="mt-1 shrink-0 text-primary-foreground/70"
              />

              <span className="text-sm text-primary-foreground/70 font-body">
                Annai Parvathi, Opp. Collector Office, Vengikkal, Tiruvannamalai
                - 606604
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Phone
                size={16}
                className="shrink-0 text-primary-foreground/70"
              />

              <span className="text-sm text-primary-foreground/70 font-body">
                +91 8608601049, +91 8608600772
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={16} className="shrink-0 text-primary-foreground/70" />

              <span className="text-sm text-primary-foreground/70 font-body">
                hrifyinteriorexterior@gmail.com
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-primary-foreground/20 mt-12 pt-6 text-center">
        <p className="text-sm text-primary-foreground/50 font-body">
          © {new Date().getFullYear()} HRIFY Interior & Exterior. All rights
          reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
