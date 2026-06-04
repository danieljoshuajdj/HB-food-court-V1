import { SEO } from "@/components/SEO";
import { Hero } from "@/components/sections/Hero";
import { Categories } from "@/components/sections/Categories";
import { PopularDishes } from "@/components/sections/PopularDishes";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTASection } from "@/components/sections/CTASection";

const Home = () => (
  <>
    <SEO
      title="HB Food Court | Best Multi-Cuisine Food Court in Nagercoil"
      description="HB Food Court Nagercoil — biryani, shawarma, tandoor, wood-fired pizza & 80+ drinks. Order online via Zomato. Court Road, Nagercoil Locality."
      keywords="HB Food Court, food court Nagercoil, biryani Nagercoil, shawarma Nagercoil, restaurants Nagercoil"
      path="/"
    />
    <Hero />
    <Categories />
    <PopularDishes />
    <Testimonials />
    <CTASection />
  </>
);

export default Home;
