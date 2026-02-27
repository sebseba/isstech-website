import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import Logo from "@/assets/isstech-logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Apps", path: "/apps" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const barRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastScrolledRef = useRef(false);

  useEffect(() => {
    const update = () => {
      const y = window.scrollY;
      const scrolledNow = y > 30;

      // only update React state when it changes (reduces rerenders)
      if (scrolledNow !== lastScrolledRef.current) {
        lastScrolledRef.current = scrolledNow;
        setIsScrolled(scrolledNow);
      }

      // progress width via DOM (no React state)
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const p = max > 0 ? Math.max(0, Math.min(1, y / max)) : 0;

      if (barRef.current) {
        barRef.current.style.width = `${p * 100}%`;
      }

      rafRef.current = null;
    };

    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(update);
    };

    // run once on mount
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-[background,backdrop-filter,box-shadow,padding] duration-300 ${
        isScrolled
          ? "bg-[#06070F]/55 backdrop-blur-xl border-b border-white/10 shadow-[0_18px_60px_rgba(0,0,0,0.45)] py-3"
          : "bg-transparent py-6"
      }`}
    >
      {/* Only show these when scrolled → removes white line at top */}
      {isScrolled && (
        <>
          {/* glow */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-10 left-1/2 h-28 w-[620px] -translate-x-1/2 rounded-full bg-fuchsia-600/20 blur-[70px]" />
            <div className="absolute -top-12 right-[-120px] h-40 w-40 rounded-full bg-indigo-500/10 blur-[70px]" />
          </div>

          {/* top hairline */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-400/35 to-transparent" />

          {/* progress track + bar */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-white/5">
            <div
              ref={barRef}
              className="h-full bg-gradient-to-r from-fuchsia-500/80 via-purple-500/80 to-indigo-500/70 shadow-[0_0_14px_rgba(217,70,239,0.45)]"
              style={{ width: "0%" }}
            />
          </div>
        </>
      )}

      <div className="container-width px-6 md:px-12 flex items-center justify-between">
        <Link className="group inline-flex items-center gap-2 text-xl md:text-2xl font-bold tracking-[0.2em] uppercase text-white" to="/">
        <img src={Logo} alt="ISS Tech Logo" className="h-12 w-auto object-contain"/>
          <span className="relative">
            ISS Tech
            <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-fuchsia-400/70 shadow-[0_0_14px_rgba(217,70,239,0.45)] transition-all duration-300 group-hover:w-full" />
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className="relative text-xs md:text-sm uppercase tracking-wider text-white/75 transition-all duration-200 hover:text-white hover:-translate-y-[1px]"
              activeClassName="text-fuchsia-300 after:content-[''] after:absolute after:left-1/2 after:-bottom-2 after:h-[2px] after:w-full after:-translate-x-1/2 after:bg-gradient-to-r after:from-fuchsia-400/80 after:via-purple-400/80 after:to-indigo-400/70 after:shadow-[0_0_18px_rgba(217,70,239,0.55)]"
            >
              {link.name}
            </NavLink>
          ))}

          <Link
            to="/contact"
            className="ml-2 inline-flex items-center justify-center rounded-full px-4 py-2 text-xs md:text-sm font-semibold text-white bg-white/5 border border-fuchsia-500/25 hover:bg-white/8 hover:border-fuchsia-400/40 hover:shadow-[0_0_26px_rgba(217,70,239,0.28)] transition-all duration-200"
          >
            Get a Quote
          </Link>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen((v) => !v)}
          className="md:hidden p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={22} className="text-white" /> : <Menu size={22} className="text-white" />}
        </button>
      </div>

      {/* Mobile panel */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-4 mb-4 rounded-2xl border border-white/10 bg-[#06070F]/80 backdrop-blur-xl shadow-[0_18px_60px_rgba(0,0,0,0.45)]">
          <div className="p-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm uppercase tracking-wider text-white/80 hover:text-white hover:bg-white/5 transition"
                activeClassName="text-fuchsia-300 bg-fuchsia-500/10 border border-fuchsia-500/20 shadow-[0_0_22px_rgba(217,70,239,0.18)]"
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
