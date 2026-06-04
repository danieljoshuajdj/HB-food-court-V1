import { Link } from "react-router-dom";
import { MapPin, Phone, MessageCircle, UtensilsCrossed, Clock } from "lucide-react";
import { ADDRESS, PHONE, PHONE_DISPLAY, ZOMATO_URL } from "@/data/menuData";

export const Footer = () => (
  <footer id="site-footer" className="bg-foreground text-background mt-16">
    <div className="container py-14 grid gap-10 md:grid-cols-4">
      <div className="md:col-span-2">
        <Link to="/" className="flex items-center gap-2 mb-4 font-display text-2xl font-bold">
          <span className="grid place-items-center w-10 h-10 rounded-lg gradient-primary">
            <UtensilsCrossed className="w-5 h-5" />
          </span>
          HB Food Court
        </Link>
        <p className="text-background/70 max-w-md leading-relaxed">
          Multi-cuisine food court in the heart of Nagercoil — biryani, shawarma, tandoor,
          wood-fired pizza and 80+ refreshing drinks under one roof.
        </p>
        <a
          href={ZOMATO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 px-5 py-3 rounded-lg gradient-primary text-primary-foreground font-medium shadow-elegant hover:opacity-90 transition-smooth"
        >
          Order on Zomato
        </a>
      </div>

      <div>
        <h4 className="font-display text-lg mb-4 text-secondary">Explore</h4>
        <ul className="space-y-2 text-background/70">
          <li><Link to="/menu" className="hover:text-secondary transition-smooth">Menu</Link></li>
          <li><Link to="/about" className="hover:text-secondary transition-smooth">About</Link></li>
          <li><Link to="/gallery" className="hover:text-secondary transition-smooth">Gallery</Link></li>
          <li><Link to="/offers" className="hover:text-secondary transition-smooth">Offers</Link></li>
          <li><Link to="/contact" className="hover:text-secondary transition-smooth">Contact</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="font-display text-lg mb-4 text-secondary">Visit Us</h4>
        <ul className="space-y-3 text-background/70 text-sm">
          <li className="flex gap-2"><MapPin className="w-4 h-4 mt-1 shrink-0 text-primary" />{ADDRESS}</li>
          <li className="flex gap-2"><Phone className="w-4 h-4 mt-1 shrink-0 text-primary" />
            <a href={`tel:${PHONE}`} className="hover:text-secondary">{PHONE_DISPLAY}</a>
          </li>
          <li className="flex gap-2"><MessageCircle className="w-4 h-4 mt-1 shrink-0 text-primary" />
            <a href={`https://wa.me/${PHONE.replace("+","")}`} target="_blank" rel="noopener noreferrer" className="hover:text-secondary">WhatsApp Us</a>
          </li>
          <li className="flex gap-2"><Clock className="w-4 h-4 mt-1 shrink-0 text-primary" />Open daily · 11 AM – 11 PM</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-background/10">
      <div className="container py-5 text-sm text-background/50 flex flex-col md:flex-row gap-2 justify-between">
        <p>© {new Date().getFullYear()} HB Food Court, Nagercoil. All rights reserved.</p>
        <p>FSSAI Lic. No. 12423009000158</p>
      </div>
    </div>
  </footer>
);
