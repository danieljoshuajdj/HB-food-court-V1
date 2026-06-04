import { useEffect, useState } from "react";
import { ShoppingBag } from "lucide-react";
import { ZOMATO_URL } from "@/data/menuData";

export const FloatingOrderButton = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const footer = document.getElementById("site-footer");
    if (!footer) return;
    const observer = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      { threshold: 0.05 }
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 group transition-all duration-300 ${
        hidden ? "opacity-0 pointer-events-none translate-y-8" : "opacity-100"
      }`}
    >
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-foreground text-background text-xs font-medium px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-card">
        Order on Zomato
      </span>
      <a
        href={ZOMATO_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Order on Zomato"
        className="relative grid place-items-center w-16 h-16 rounded-full gradient-primary text-primary-foreground shadow-elegant pulse-ring float-pulse hover:scale-110 transition-transform"
      >
        <ShoppingBag className="w-7 h-7" />
      </a>
    </div>
  );
};
