import { ArrowRight, ShoppingBag } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ZOMATO_URL } from "@/data/menuData";

const Order = () => (
  <>
    <SEO title="Order Online | HB Food Court Nagercoil" description="Order from HB Food Court online via Zomato — fast delivery across Nagercoil." path="/order" />
    <section className="pt-32 md:pt-40 pb-24 min-h-[80vh] grid place-items-center">
      <div className="container max-w-2xl text-center">
        <div className="w-20 h-20 mx-auto rounded-2xl gradient-primary text-primary-foreground grid place-items-center shadow-elegant pulse-ring">
          <ShoppingBag className="w-9 h-9" />
        </div>
        <p className="text-primary text-xs uppercase tracking-[0.2em] font-medium mt-8">Order Online</p>
        <h1 className="font-display text-4xl md:text-6xl font-bold mt-2 leading-tight">
          Hot food, <span className="text-gradient">one tap away</span>.
        </h1>
        <p className="text-muted-foreground mt-5 text-lg">
          We deliver our full menu through Zomato — track your order live and pay securely.
        </p>
        <Button asChild size="lg" className="mt-10 gradient-primary text-primary-foreground h-14 px-10 text-base shadow-elegant">
          <a href={ZOMATO_URL} target="_blank" rel="noopener noreferrer">
            Order on Zomato <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </Button>
        <p className="mt-6 text-sm text-muted-foreground">Or call <a href="tel:+919486342525" className="text-primary font-medium">+91 94863 42525</a> for direct orders.</p>
      </div>
    </section>
  </>
);

export default Order;
