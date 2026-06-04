export interface Testimonial {
  name: string;
  rating: number;
  review: string;
  location?: string;
}

export const testimonials: Testimonial[] = [
  { name: "Arun Kumar", rating: 5, location: "Nagercoil", review: "Best biryani in Nagercoil. The flavours are unbeatable and the portions are generous!" },
  { name: "Priya Sundar", rating: 5, location: "Court Road", review: "Their tandoori chicken and shawarma are always perfect. A go-to spot for our family weekends." },
  { name: "Mohammed Rafi", rating: 4, location: "Nagercoil", review: "Wide menu, fast delivery on Zomato, and the falooda is a must-try after a spicy meal." },
  { name: "Sneha R.", rating: 5, location: "Vetturnimadam", review: "Loved the wood-fired pizza and bubble tea combo. Cosy place and friendly staff." },
  { name: "Vikram Iyer", rating: 5, location: "Nagercoil", review: "From kotthu parotta to chettinad chicken — every dish nails the South Indian flavour." },
];
