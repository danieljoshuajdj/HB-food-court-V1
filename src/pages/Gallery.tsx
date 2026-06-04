import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { SEO } from "@/components/SEO";
import biryani from "@/assets/cat-biryani.jpg";
import starters from "@/assets/cat-starters.jpg";
import shawarma from "@/assets/cat-shawarma.jpg";
import pizza from "@/assets/cat-pizza.jpg";
import noodles from "@/assets/cat-noodles.jpg";
import beverages from "@/assets/cat-beverages.jpg";
import hero from "@/assets/hero-food.jpg";

const images = [
  { src: hero, alt: "Signature spread" , span: "md:col-span-2 md:row-span-2" },
  { src: biryani, alt: "Chicken biryani" },
  { src: starters, alt: "Tandoori starters" },
  { src: shawarma, alt: "Chicken shawarma" },
  { src: pizza, alt: "Wood-fired pizza", span: "md:col-span-2" },
  { src: noodles, alt: "Chicken 65" },
  { src: beverages, alt: "Refreshing drinks" },
];

const Gallery = () => {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <>
      <SEO title="Gallery | HB Food Court Nagercoil" description="A glimpse of HB Food Court — biryani, tandoor, shawarma, pizza and more." path="/gallery" />
      <section className="pt-32 md:pt-40 pb-16">
        <div className="container">
          <p className="text-primary text-sm md:text-base uppercase tracking-[0.25em] font-semibold text-center">Gallery</p>
          <h1 className="font-display text-4xl md:text-6xl 3xl:text-7xl font-bold mt-3 text-center">A feast for the eyes</h1>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 4xl:grid-cols-6 auto-rows-[200px] md:auto-rows-[260px] gap-3">
            {images.map((img, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                onClick={() => setOpen(img.src)}
                className={`relative overflow-hidden rounded-xl group shadow-card hover:shadow-elegant transition-smooth ${img.span ?? ""}`}
              >
                <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-smooth" />
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[100] bg-foreground/90 backdrop-blur grid place-items-center p-6"
          >
            <button onClick={() => setOpen(null)} aria-label="Close" className="absolute top-6 right-6 text-background p-2 rounded-full bg-background/10 hover:bg-background/20">
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.95 }} animate={{ scale: 1 }}
              src={open} alt="" className="max-w-full max-h-[85vh] rounded-xl shadow-elegant"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;
