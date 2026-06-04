import { motion } from "framer-motion";
import { Gift, Sparkles, PartyPopper } from "lucide-react";
import { SEO } from "@/components/SEO";

const offers = [
  { icon: Gift, title: "Festival Specials Incoming", text: "Stay tuned for Diwali, Eid and Christmas combos crafted by our chefs.", badge: "Coming Soon" },
  { icon: Sparkles, title: "Family Feast Combos", text: "Biryani + starter + dessert combos for 2, 4 and 6 launching soon.", badge: "In Works" },
  { icon: PartyPopper, title: "Birthday Treats", text: "Celebrate with us — surprise dessert on the house. Details on the way.", badge: "Soon" },
];

const Offers = () => (
  <>
    <SEO title="Offers | HB Food Court Nagercoil" description="Upcoming offers, combos and seasonal specials at HB Food Court Nagercoil." path="/offers" />
    <section className="pt-32 md:pt-40 pb-20">
      <div className="container">
        <p className="text-primary text-sm md:text-base uppercase tracking-[0.25em] font-semibold text-center">Offers</p>
        <h1 className="font-display text-4xl md:text-6xl 3xl:text-7xl font-bold mt-3 text-center">Sweet things on the way</h1>
        <p className="text-muted-foreground text-center mt-4 max-w-xl mx-auto">
          We're cooking up exclusive offers for our regulars. Here's a peek at what's coming.
        </p>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {offers.map((o, i) => (
            <motion.div
              key={o.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative bg-softYellow rounded-xl p-7 border border-border shadow-card hover:shadow-[0_10px_30px_hsl(351_100%_41%_/_0.25)] hover:-translate-y-1 transition-all duration-300"
            >
              <span className="absolute top-4 right-4 px-2 py-1 rounded-full bg-secondary text-secondary-foreground text-[10px] font-semibold uppercase tracking-wider">
                {o.badge}
              </span>
              <div className="w-14 h-14 rounded-xl gradient-primary text-primary-foreground grid place-items-center mb-5 shadow-elegant">
                <o.icon className="w-7 h-7" />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-2">{o.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{o.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Offers;
