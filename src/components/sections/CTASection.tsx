import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ZOMATO_URL } from "@/data/menuData";
import { ArrowRight } from "lucide-react";

export const CTASection = () => (
  <section className="py-20 md:py-28">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative gradient-primary rounded-2xl overflow-hidden p-10 md:p-16 text-center text-primary-foreground shadow-elegant"
      >
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 30% 20%, white, transparent 40%), radial-gradient(circle at 70% 80%, white, transparent 40%)" }} />
        <div className="relative">
          <h2 className="font-display text-3xl md:text-5xl font-bold max-w-2xl mx-auto leading-tight">
            Craving something delicious?
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-primary-foreground/90 text-lg">
            Order from our full menu in just a few taps and get it delivered hot.
          </p>
          <Button asChild size="lg" className="mt-8 bg-foreground text-background hover:bg-background hover:text-foreground h-12 px-8 text-base">
            <a href={ZOMATO_URL} target="_blank" rel="noopener noreferrer">
              Order on Zomato <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);
