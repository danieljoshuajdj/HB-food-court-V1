import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, UtensilsCrossed } from "lucide-react";
import { ZOMATO_URL } from "@/data/menuData";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/offers", label: "Offers" },
  { to: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  const isHome = location.pathname === "/";
  const solid = scrolled || !isHome || open;

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-smooth ${solid ? "bg-background/95 backdrop-blur shadow-card" : "bg-transparent"}`}>
      <nav className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2 font-display font-bold text-xl md:text-2xl">
          <span className={`grid place-items-center w-10 h-10 rounded-lg gradient-primary text-primary-foreground shadow-elegant`}>
            <UtensilsCrossed className="w-5 h-5" />
          </span>
          <span className={solid ? "text-foreground" : "text-white drop-shadow"}>HB Food Court</span>
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map(l => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-smooth hover:text-primary ${
                    isActive ? "text-primary" : solid ? "text-foreground" : "text-white"
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button asChild variant="default" className="gradient-primary text-primary-foreground hover:opacity-90 shadow-elegant">
            <a href={ZOMATO_URL} target="_blank" rel="noopener noreferrer">Order on Zomato</a>
          </Button>
        </div>

        <button
          aria-label="Open menu"
          className={`lg:hidden p-2 rounded-md ${solid ? "text-foreground" : "text-white"}`}
          onClick={() => setOpen(o => !o)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-[480px]" : "max-h-0"} bg-background border-t border-border`}>
        <ul className="container py-4 flex flex-col gap-2">
          {links.map(l => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `block py-3 px-2 rounded-md text-base font-medium ${isActive ? "text-primary bg-muted" : "text-foreground"}`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
          <li className="pt-2">
            <Button asChild className="w-full gradient-primary text-primary-foreground">
              <a href={ZOMATO_URL} target="_blank" rel="noopener noreferrer">Order on Zomato</a>
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
};
