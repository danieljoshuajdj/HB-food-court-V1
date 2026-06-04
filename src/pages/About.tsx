import { motion } from "framer-motion";
import { Award, Flame, Users, Utensils } from "lucide-react";
import { SEO } from "@/components/SEO";
import biryani from "@/assets/cat-biryani.jpg";
import starters from "@/assets/cat-starters.jpg";
import shawarma from "@/assets/cat-shawarma.jpg";
import pizza from "@/assets/cat-pizza.jpg";

const highlights = [
  { icon: Utensils, title: "Multi-Cuisine", text: "South Indian, North Indian, Chinese, Arabian, Italian — all under one roof." },
  { icon: Flame, title: "Live Tandoor", text: "Charcoal-grilled kababs, naan and tandoori specialities made to order." },
  { icon: Users, title: "Local Favourite", text: "Loved by 1,674+ customers across Nagercoil and Kanyakumari." },
  { icon: Award, title: "FSSAI Certified", text: "Hygienic kitchen, fresh ingredients, every single day." },
];

const About = () => (
  <>
    <SEO
      title="About | HB Food Court Nagercoil"
      description="HB Food Court is Nagercoil's favourite multi-cuisine food court on Court Road — biryani, shawarma, tandoor, pizza and more."
      path="/about"
    />
    <section className="pt-32 md:pt-40 pb-16">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-primary text-sm md:text-base uppercase tracking-[0.25em] font-semibold">Our Story</p>
          <h1 className="font-display text-4xl md:text-6xl 3xl:text-7xl font-bold mt-3 leading-tight">A Nagercoil kitchen with a <span className="text-gradient">global appetite</span>.</h1>
          <p className="text-muted-foreground mt-6 leading-relaxed">
            What started as a small biryani counter on Court Road has grown into one of Nagercoil's most loved
            multi-cuisine food courts. We bring together the smoky depth of Tamil Nadu's chettinad,
            the slow-cooked richness of Hyderabadi biryani, the char of Arabian shawarma and the comfort
            of wood-fired pizza — all crafted by chefs who treat every plate like their own.
          </p>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            We don't believe in shortcuts. Our spices are freshly ground, our breads are made through
            the day, and our drinks menu has 80+ options because dessert deserves the spotlight too.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 gap-3"
        >
          <img src={biryani} alt="Biryani" loading="lazy" width={400} height={400} className="rounded-xl aspect-square object-cover shadow-card row-span-2 h-full" />
          <img src={starters} alt="Starters" loading="lazy" width={400} height={300} className="rounded-xl aspect-[4/3] object-cover shadow-card" />
          <img src={pizza} alt="Pizza" loading="lazy" width={400} height={300} className="rounded-xl aspect-[4/3] object-cover shadow-card" />
          <img src={shawarma} alt="Shawarma" loading="lazy" width={400} height={250} className="col-span-2 rounded-xl aspect-[16/7] object-cover shadow-card" />
        </motion.div>
      </div>
    </section>

    <section className="py-20 bg-muted/40">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-6">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-background rounded-xl p-6 border border-border shadow-card"
            >
              <div className="w-12 h-12 rounded-lg gradient-primary text-primary-foreground grid place-items-center mb-4">
                <h.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{h.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{h.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default About;
