import { MapPin, Phone, MessageCircle, Clock } from "lucide-react";
import { SEO } from "@/components/SEO";
import { ADDRESS, PHONE, PHONE_DISPLAY } from "@/data/menuData";
import { Button } from "@/components/ui/button";

const Contact = () => (
  <>
    <SEO
      title="Contact | HB Food Court Nagercoil"
      description="Visit HB Food Court at 37/1, Court Road, Nagercoil. Call +91 9486342525 or message us on WhatsApp."
      path="/contact"
    />
    <section className="pt-32 md:pt-40 pb-16">
      <div className="container">
        <p className="text-primary text-sm md:text-base uppercase tracking-[0.25em] font-semibold text-center">Get in Touch</p>
        <h1 className="font-display text-4xl md:text-6xl 3xl:text-7xl font-bold mt-3 text-center">We'd love to feed you</h1>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="bg-card rounded-xl p-8 border border-border shadow-card">
            <h2 className="font-display text-2xl font-semibold mb-6">Reach us</h2>
            <ul className="space-y-5">
              <Item icon={MapPin} title="Address">{ADDRESS}</Item>
              <Item icon={Phone} title="Phone">
                <a href={`tel:${PHONE}`} className="hover:text-primary">{PHONE_DISPLAY}</a>
              </Item>
              <Item icon={MessageCircle} title="WhatsApp">
                <a href={`https://wa.me/${PHONE.replace("+", "")}`} target="_blank" rel="noopener noreferrer" className="hover:text-primary">Chat with us on WhatsApp</a>
              </Item>
              <Item icon={Clock} title="Hours">Open daily · 11:00 AM – 11:00 PM</Item>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="gradient-primary text-primary-foreground">
                <a href={`tel:${PHONE}`}>Call Now</a>
              </Button>
              <Button asChild variant="outline">
                <a href={`https://wa.me/${PHONE.replace("+", "")}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
              </Button>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-card border border-border min-h-[380px]">
            <iframe
              title="HB Food Court location"
              src="https://www.google.com/maps?q=HB+Food+Court+Court+Road+Nagercoil&output=embed"
              className="w-full h-full min-h-[380px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  </>
);

const Item = ({ icon: Icon, title, children }: { icon: React.ElementType; title: string; children: React.ReactNode }) => (
  <li className="flex gap-4">
    <div className="w-11 h-11 rounded-lg bg-primary/10 text-primary grid place-items-center shrink-0">
      <Icon className="w-5 h-5" />
    </div>
    <div>
      <p className="text-xs uppercase tracking-widest text-muted-foreground">{title}</p>
      <p className="text-foreground font-medium mt-1">{children}</p>
    </div>
  </li>
);

export default Contact;
