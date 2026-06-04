import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, X, LayoutGrid, Check } from "lucide-react";
import { SEO } from "@/components/SEO";
import { MenuCard } from "@/components/menu/MenuCard";
import { CATEGORIES, menuData } from "@/data/menuData";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

type Diet = "all" | "veg" | "nonveg";

const Menu = () => {
  const [params, setParams] = useSearchParams();
  const initialCat = params.get("cat") || "All";
  const [active, setActive] = useState<string>(initialCat);
  const [diet, setDiet] = useState<Diet>("all");
  const [q, setQ] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const cat = params.get("cat");
    if (cat) setActive(cat);
  }, [params]);

  const filtered = useMemo(() => {
    return menuData
      .filter(g => active === "All" || g.category === active)
      .map(g => ({
        ...g,
        items: g.items.filter(it =>
          (diet === "all" || it.type === diet) &&
          (!q || it.name.toLowerCase().includes(q.toLowerCase()) ||
            (it.description?.toLowerCase().includes(q.toLowerCase()) ?? false))
        ),
      }))
      .filter(g => g.items.length > 0);
  }, [active, diet, q]);

  const setCat = (c: string) => {
    setActive(c);
    if (c === "All") params.delete("cat"); else params.set("cat", c);
    setParams(params, { replace: true });
    setDrawerOpen(false);
  };

  return (
    <>
      <SEO
        title="Menu | HB Food Court Nagercoil"
        description="Explore HB Food Court's full menu — 350+ dishes spanning biryani, shawarma, tandoor, pizza, noodles and 80+ drinks. Order online via Zomato."
        keywords="HB Food Court menu, hb food court nagercoil menu, biryani menu Nagercoil"
        path="/menu"
      />
      <section className="pt-28 md:pt-36 pb-8 bg-softYellow border-b border-border">
        <div className="container">
          <p className="text-primary text-sm md:text-base uppercase tracking-[0.25em] font-semibold">Our Menu</p>
          <h1 className="font-display text-4xl md:text-6xl 3xl:text-7xl font-bold mt-3">A taste for every craving</h1>
          <p className="text-muted-foreground mt-3 max-w-2xl">Search, filter and discover dishes from 14 categories — all served fresh at our Court Road kitchen.</p>
        </div>
      </section>

      <div className="sticky top-16 md:top-20 z-30 bg-background/95 backdrop-blur shadow-card border-b border-border">
        <div className="container py-3 flex flex-col md:flex-row gap-3 items-stretch">
          <Sheet open={drawerOpen} onOpenChange={setDrawerOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" className="h-12 gap-2 border-2 hover:border-primary hover:text-primary justify-between md:justify-center">
                <span className="flex items-center gap-2"><LayoutGrid className="w-4 h-4" /> Browse Categories</span>
                <span className="text-xs text-muted-foreground md:ml-2 truncate max-w-[120px]">{active}</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[360px] overflow-y-auto">
              <SheetHeader>
                <SheetTitle className="font-display text-2xl">Categories</SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col gap-1">
                {["All", ...CATEGORIES].map(c => (
                  <button
                    key={c}
                    onClick={() => setCat(c)}
                    className={`flex items-center justify-between text-left px-4 py-3 rounded-lg text-sm font-medium transition-smooth ${
                      active === c ? "bg-primary text-primary-foreground" : "hover:bg-muted text-foreground"
                    }`}
                  >
                    <span>{c}</span>
                    {active === c && <Check className="w-4 h-4" />}
                  </button>
                ))}
              </div>
            </SheetContent>
          </Sheet>

          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              value={q}
              onChange={e => setQ(e.target.value)}
              placeholder="Search dishes…"
              className="w-full h-12 pl-11 pr-10 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-smooth"
            />
            {q && (
              <button onClick={() => setQ("")} aria-label="Clear" className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded text-muted-foreground hover:text-foreground">
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          <div className="flex gap-1 bg-muted border border-border rounded-lg p-1">
            {(["all", "veg", "nonveg"] as Diet[]).map(d => (
              <button
                key={d}
                onClick={() => setDiet(d)}
                className={`px-3 md:px-4 h-10 rounded-md text-sm font-medium capitalize transition-smooth ${
                  diet === d ? "gradient-primary text-primary-foreground shadow" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {d === "nonveg" ? "Non-Veg" : d}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="py-12 md:py-16">
        <div className="container">
          {filtered.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">No dishes match your filters.</div>
          )}
          {filtered.map(group => (
            <motion.div
              key={`${group.category}-${group.subcategory ?? "main"}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
              className="mb-14"
            >
              <div className="flex items-baseline justify-between mb-6">
                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold">
                    {group.category}
                    {group.subcategory && <span className="text-muted-foreground font-normal text-base md:text-lg ml-3">· {group.subcategory}</span>}
                  </h2>
                </div>
                <span className="text-sm text-muted-foreground">{group.items.length} items</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 4xl:grid-cols-6 gap-5">
                {group.items.map((it, i) => (
                  <MenuCard key={it.name} item={it} category={group.category} index={i} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Menu;
