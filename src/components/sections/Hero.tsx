import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-food.jpg";
import { ZOMATO_URL } from "@/data/menuData";

export const Hero = () => (
  <section className="relative min-h-[100svh] flex items-center overflow-hidden">
    <img
      src={heroImg}
      alt="HB Food Court signature spread of biryani, tandoori chicken and shawarma"
      className="absolute inset-0 w-full h-full object-cover slow-zoom"
      width={1600}
      height={900}
    />
    <div className="absolute inset-0 gradient-hero backdrop-blur-[2px]" />
    <div className="container relative z-10 py-32 md:py-40 text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl"
      >
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-white/20 text-xs font-medium tracking-wide">
          <Star className="w-3.5 h-3.5 fill-secondary text-secondary" /> 4.8 · 1,674 Delivery Ratings
        </span>
        <h1 className="mt-6 font-display font-black text-5xl md:text-7xl lg:text-8xl 3xl:text-[9rem] 4xl:text-[11rem] leading-[0.95] tracking-tight">
          Flavours of <span className="text-secondary">Nagercoil</span>,
          <br /> served <span className="italic">all day</span>.
        </h1>
        <p className="mt-6 text-base md:text-xl text-white/85 max-w-xl leading-relaxed">
          Biryani, shawarma, tandoor, wood-fired pizza and 80+ refreshing drinks —
          a multi-cuisine food court right on Court Road.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button asChild size="lg" className="gradient-primary text-primary-foreground hover:opacity-90 shadow-elegant text-base h-12 px-8">
            <Link to="/menu">View Menu <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur border-white/40 text-white hover:bg-white hover:text-foreground text-base h-12 px-8">
            <a href={ZOMATO_URL} target="_blank" rel="noopener noreferrer">Order on Zomato</a>
          </Button>
        </div>

        <div className="mt-12 flex flex-wrap gap-6 md:gap-10 text-white/85 text-sm">
          <Stat n="350+" label="Dishes" />
          <Stat n="14" label="Categories" />
          <Stat n="11AM-11PM" label="Open Daily" />
        </div>
      </motion.div>
    </div>
  </section>
);

const Stat = ({ n, label }: { n: string; label: string }) => (
  <div>
    <div className="font-display text-2xl md:text-3xl font-bold text-secondary">{n}</div>
    <div className="text-xs uppercase tracking-widest text-white/60">{label}</div>
  </div>
);
