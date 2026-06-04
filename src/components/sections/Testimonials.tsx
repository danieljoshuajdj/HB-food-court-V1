import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { testimonials } from "@/data/testimonials";

export const Testimonials = () => {
  const [i, setI] = useState(0);
  const next = () => setI(p => (p + 1) % testimonials.length);
  const prev = () => setI(p => (p - 1 + testimonials.length) % testimonials.length);
  const t = testimonials[i];

  return (
    <section className="py-20 md:py-28 bg-foreground text-background relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/30 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-secondary/20 blur-3xl" />
      <div className="container relative">
        <SectionTitle color="text-primary" eyebrow="Word of Mouth" title="What People Are Saying" />
        <div className="max-w-3xl mx-auto text-center">
          <Quote className="w-12 h-12 text-primary mx-auto mb-6 opacity-70" />
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="font-display text-2xl md:text-3xl leading-snug italic"
            >
              “{t.review}”
            </motion.blockquote>
          </AnimatePresence>
          <div className="mt-8">
            <div className="flex justify-center gap-1 mb-2">
              {Array.from({ length: t.rating }).map((_, idx) => (
                <Star key={idx} className="w-4 h-4 fill-secondary text-secondary" />
              ))}
            </div>
            <p className="font-semibold">{t.name}</p>
            {t.location && <p className="text-background/60 text-sm">{t.location}</p>}
          </div>
          <div className="flex justify-center gap-3 mt-8">
            <button onClick={prev} aria-label="Previous" className="w-11 h-11 rounded-full border border-background/20 hover:bg-primary hover:border-primary grid place-items-center transition-smooth">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={next} aria-label="Next" className="w-11 h-11 rounded-full border border-background/20 hover:bg-primary hover:border-primary grid place-items-center transition-smooth">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
