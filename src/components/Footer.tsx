import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-black/25 backdrop-blur-md">
      <div className="container-width py-10 text-white/70">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-[0.2em] uppercase">
              ISS Tech
            </h3>
            <p className="text-background/70 text-sm leading-relaxed">
              Empowering businesses with innovative technology solutions. From concept to deployment, we bring your digital vision to life.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wider uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Home", "Services", "Apps", "About", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    className="text-background/70 text-sm hover:text-background transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wider uppercase">
              Services
            </h4>
            <ul className="space-y-2 text-background/70 text-sm">
              <li>Web Development</li>
              <li>Mobile Apps</li>
              <li>IT Consulting</li>
              <li>Software Solutions</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wider uppercase">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-background/70 text-sm">
                <Mail size={16} />
                <span>isercansozeri@gmail.com</span>
              </li>
              <li className="flex items-center gap-3 text-background/70 text-sm">
                <Phone size={16} />
                <span>(437) 669-9343</span>
              </li>
              <li className="flex items-start gap-3 text-background/70 text-sm">
                <MapPin size={16} className="mt-0.5" />
                <span>Based in Toronto, Ontario, Canada <br />Remote-first technology services</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-background/20 text-center text-background/50 text-sm">
          <p>© {new Date().getFullYear()} ISS Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
