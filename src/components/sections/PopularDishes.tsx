import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { POPULAR_DISHES } from "@/data/menuData";

export const PopularDishes = () => (
  <section className="py-20 md:py-28">
    <div className="container">
      <SectionTitle color="text-primary" eyebrow="Crowd Favourites" title="Most Loved Dishes" subtitle="What our 1,674+ customers keep ordering again and again." />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-7">
        {POPULAR_DISHES.map((d, i) => (
          <motion.div
            key={d.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            whileHover={{ y: -6 }}
            className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elegant transition-smooth border border-border"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={d.image} alt={d.name} loading="lazy" width={600} height={450} className="w-full h-full object-cover" />
              <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-secondary text-secondary-foreground">
                {d.tag}
              </span>
            </div>
            <div className="p-4">
              <h3 className="font-display text-lg md:text-xl font-semibold">{d.name}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
