import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CATEGORY_IMAGES } from "@/data/menuData";

const featured = [
  { name: "Biryani", key: "Rice & Biryani" },
  { name: "Starters", key: "Starters" },
  { name: "Shawarma", key: "Shawarma" },
  { name: "Pizza", key: "Pizza & Pasta" },
  { name: "Beverages", key: "Drinks" },
  { name: "Noodles", key: "Fried Rice & Noodles" },
];

export const Categories = () => (
  <section className="py-20 md:py-28 bg-muted/40">
    <div className="container">
      <SectionTitle eyebrow="Our Kitchen" title="Explore by Category" subtitle="From slow-cooked biryani to charcoal shawarma — a craving for every mood." />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {featured.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <Link
              to={`/menu?cat=${encodeURIComponent(c.key)}`}
              className="group relative block aspect-[4/5] rounded-xl overflow-hidden shadow-card hover:shadow-elegant transition-smooth"
            >
              <img
                src={CATEGORY_IMAGES[c.key]}
                alt={`${c.name} at HB Food Court`}
                loading="lazy"
                width={600}
                height={750}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-white">{c.name}</h3>
                <p className="text-white/80 text-sm mt-1 group-hover:text-secondary transition-smooth">Browse →</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
