import { motion } from "framer-motion";

interface Props {
  color?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export const SectionTitle = ({ color, eyebrow, title, subtitle, align = "center" }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5 }}
    className={`mb-10 md:mb-14 ${align === "center" ? "text-center mx-auto max-w-2xl" : ""}`}
  >
    {eyebrow && (
      <p className="text-primary font-medium tracking-[0.2em] uppercase text-xs mb-3">{eyebrow}</p>
    )}
    <h2 className={`font-display text-3xl md:text-5xl font-bold text-foreground ${color}`} >{title}</h2>
    {subtitle && <p className="mt-4 text-muted-foreground text-base md:text-lg">{subtitle}</p>}
  </motion.div>
);
