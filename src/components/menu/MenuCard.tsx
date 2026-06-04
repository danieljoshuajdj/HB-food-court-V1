import { motion } from "framer-motion";
import { Leaf, Drumstick } from "lucide-react";
import type { MenuItem } from "@/data/menuData";
import { CATEGORY_IMAGES } from "@/data/menuData";

interface Props {
  item: MenuItem;
  category: string;
  index?: number;
}

export const MenuCard = ({ item, category, index = 0 }: Props) => {
  const image = CATEGORY_IMAGES[category];
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.03, 0.3) }}
      className="group relative bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all duration-300 border border-border"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        {image && (
          <img
            src={image}
            alt={item.name}
            loading="lazy"
            width={400}
            height={300}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-3 left-3 flex gap-2 z-10">
          <span
            className={`flex items-center gap-1 px-2 py-1 rounded-md text-[10px] font-semibold backdrop-blur ${
              item.type === "veg"
                ? "bg-green-100 text-green-700"
                : "bg-white/90 border border-red-500 text-red-600"
            }`}
          >
            {item.type === "veg" ? <Leaf className="w-3 h-3" /> : <Drumstick className="w-3 h-3" />}
            {item.type === "veg" ? "VEG" : "NON-VEG"}
          </span>
          {item.isHalal && (
            <span className="px-2 py-1 rounded-md text-[10px] font-bold bg-yellow-300 text-black backdrop-blur">
              HALAL
            </span>
          )}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-display text-xl font-semibold text-foreground line-clamp-1">{item.name}</h3>
        {item.description && (
          <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{item.description}</p>
        )}
      </div>
    </motion.article>
  );
};
