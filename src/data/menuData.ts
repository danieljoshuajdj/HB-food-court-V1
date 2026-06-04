import biryani from "@/assets/cat-biryani.jpg";
import starters from "@/assets/cat-starters.jpg";
import shawarma from "@/assets/cat-shawarma.jpg";
import pizza from "@/assets/cat-pizza.jpg";
import beverages from "@/assets/cat-beverages.jpg";
import noodles from "@/assets/cat-noodles.jpg";

export const ZOMATO_URL = "https://www.zomato.com/nagercoil/hb-food-court-1-nagercoil-locality/order";
export const PHONE = "+919486342525";
export const PHONE_DISPLAY = "+91 94863 42525";
export const ADDRESS = "37/1, Court Road, Nagercoil Locality, Nagercoil";

export const CATEGORY_IMAGES: Record<string, string> = {
  "Soups & Salads": noodles,
  "Starters": starters,
  "Main Course": biryani,
  "Breads": pizza,
  "Rice & Biryani": biryani,
  "Dosa": noodles,
  "Fried Rice & Noodles": noodles,
  "Pizza & Pasta": pizza,
  "Burgers & Sandwiches": pizza,
  "Snacks": starters,
  "Wraps": shawarma,
  "Shawarma": shawarma,
  "Desserts": beverages,
  "Drinks": beverages,
};

export type MenuType = "veg" | "nonveg";
export interface MenuItem {
  name: string;
  description?: string;
  type: MenuType;
  isHalal?: boolean;
}
export interface MenuCategory {
  category: string;
  subcategory?: string;
  items: MenuItem[];
}

const v = (name: string, description?: string): MenuItem => ({ name, description, type: "veg" });
const n = (name: string, description?: string, isHalal = false): MenuItem => ({ name, description, type: "nonveg", isHalal });

export const menuData: MenuCategory[] = [
  { category: "Soups & Salads", subcategory: "Soups", items: [
    v("Veg Clear Soup", "A light, wholesome clear broth with fresh garden vegetables."),
    v("Veg Sweet Corn Soup", "Tender sweet corn kernels with finely chopped vegetables."),
    v("Veg Hot and Sour Soup"),
    v("Cream Tomato Soup", "Made from ripe tomatoes enriched with fresh cream."),
    v("Veg Cream Soup"), v("Mix Veg Soup"), v("Veg Manchow Soup"),
    v("Cream Mushroom Soup"), v("Cream Broccoli Soup"),
    n("Chicken Clear Soup", undefined, true),
    n("Chicken Hot and Sour Soup"),
    n("Chicken Sweet Corn Soup"),
    n("Chicken Pepper Soup", undefined, true),
    n("Chicken Manchow Soup", undefined, true),
    n("Cream Chicken Soup"),
    n("Mutton Pepper Soup", "Traditional Tamil Nadu mutton soup, richly spiced.", true),
    n("Crab Pepper Soup", "Aromatic and spicy Tamil Nadu style crab soup."),
  ]},
  { category: "Soups & Salads", subcategory: "Salads", items: [
    v("Cucumber Salad"), v("Green Salad"), v("Caesar Salad"),
    n("Chicken Tikka Salad"), n("Chicken Hawaiian Salad"),
  ]},
  { category: "Starters", subcategory: "Veg Starters", items: [
    v("Mushroom Tikka"), v("Paneer Tikka"), v("Malai Paneer Tikka"),
    v("Paneer Seekh Kebab"), v("Hariyali Paneer Tikka"),
    v("Gobhi Manchurian Dry"), v("Paneer Manchurian Dry"), v("Chilli Gobi"),
    v("Mushroom Manchurian Dry"), v("Mushroom Garlic Dry"), v("Garlic Paneer Dry"),
    v("Gobi Garlic Dry"), v("Chilli Paneer Dry"), v("Mushroom Chilli"),
    v("Schezwan Paneer Dry"), v("Salt and Pepper Broccoli"), v("Tawa Paneer"),
    v("Mushroom Chukka"),
    v("Gobi 65", "Deep-fried cauliflower tossed in spicy red chilli sauce."),
    v("Paneer 65", "Deep-fried paneer chunks in spicy red chilli sauce."),
    v("Mushroom 65", "Deep-fried mushrooms in spicy red chilli sauce."),
    v("Mushroom Pepper Fry"), v("Paneer Pepper Fry"),
  ]},
  { category: "Starters", subcategory: "Non Veg Starters", items: [
    n("Kozhi Nirachathu (Full)", "Whole chicken richly marinated and stuffed with spiced filling."),
    n("Grill Chicken", "Juicy flavourful grilled chicken with charred edges."),
    n("Grilled Pepper Chicken", "Juicy chicken grilled with black pepper and spices."),
    n("Tandoori Chicken", "Marinated in yogurt and aromatic spices.", true),
    n("Barbeque Chicken", "Grilled and coated in sweet smoky barbeque sauce."),
    n("Al Faham Chicken", "Charcoal-grilled with traditional Arabian spices.", true),
    n("Pepper Barbeque Chicken", undefined, true),
    n("Peri Peri Chicken", "Spicy and tangy peri-peri grilled chicken."),
    n("Barbeque Boneless Spicy"),
    n("Chicken Tikka", "Boneless yogurt-marinated chicken with Indian spices."),
    n("Chicken Hariyali Tikka", "Mint, coriander and spice marinated chicken.", true),
    n("Chicken Garlic Kabab", undefined, true),
    n("Chicken Seekh Kabab", "Minced chicken with spices, skewered & grilled.", true),
    n("Murgh Malai Kabab", "Creamy spiced chicken kebab.", true),
    n("Reshmi Kabab", "Melt-in-mouth chicken kababs with delicate spices."),
    n("Chinese Chicken Popcorn", "Crispy bite-sized fried chicken.", true),
    n("Crab Lollipop"),
    n("Angel Honey Wings", "Fried chicken wings tossed in honey sauce."),
    n("Chicken Manchurian Dry", "Crispy chicken in tangy spicy Manchurian sauce.", true),
    n("Chicken Schezwan Lollipop", "Lollipops coated in fiery Schezwan sauce."),
    n("Ginger Chicken Dry", "Chicken stir-fried with ginger in light aromatic sauce."),
    n("Chilli Chicken Dry", "Chicken stir-fried with chillies and spices.", true),
    n("Japan Chicken", "Tender chicken in savory Japanese-style sauce.", true),
    n("Dragon Chicken", "Chicken strips with cashews in a tasty sauce."),
    n("Chicken Schezwan Dry"), n("Black Pepper Chicken"), n("Honey Chicken", undefined, true),
    n("Butter Garlic Prawns"),
    n("Chicken Lollipop Fry", "Crispy fried chicken lollipops.", true),
    n("Andhra Chilli Chicken", undefined, true),
    n("Chicken 65", "Spicy deep-fried boneless chicken with tangy garlicky flavour.", true),
    n("Chicken Chukka"), n("Chicken Pepper Fry", undefined, true),
    n("Mutton Pepper Fry", undefined, true), n("Mutton Milagu Fry", undefined, true),
    n("Mutton Manchurian Dry", undefined, true), n("Mutton Chilli Dry"),
    n("Hong Kong Mutton Dry", undefined, true), n("Mutton Garlic Dry"),
    n("Andhra Spicy Mutton Fry", undefined, true), n("Mutton Chukka"),
    n("Prawns Chukka"), n("Prawns Pepper Fry"), n("Prawns Chilli Dry"),
    n("Prawns 65"), n("Prawns Manchurian Dry"), n("Fish Fingers"),
  ]},
  { category: "Main Course", subcategory: "Veg Main Course", items: [
    v("Gobi Manchurian Gravy", "Crispy cauliflower in tangy sweet & savory Manchurian sauce."),
    v("Paneer Manchurian Gravy", "Crispy paneer cubes in Manchurian sauce."),
    v("Mushroom Manchurian Gravy", "Batter-fried mushrooms in Manchurian sauce."),
    v("Garlic Mushroom Gravy"), v("Garlic Paneer Gravy"), v("Garlic Gobi Gravy"),
    v("Chilli Paneer Gravy", "Tender paneer with crunchy bell peppers and onions."),
    v("Schezwan Paneer Gravy", "Paneer & veggies in special Schezwan sauce."),
    v("Paneer Bhurji", "Crumbled paneer tossed with onions and spices."),
    v("Chana Masala", "Chickpeas slow-cooked in tangy tomato-onion gravy."),
    v("Veg Kuruma"), v("Green Peas Masala"), v("Veg Chettinad"),
    v("Mushroom Chettinad"), v("Mix Veg Curry"), v("Mushroom Masala"),
    v("Veg Banjara"), v("Paneer Butter Masala"), v("Palak Paneer"),
    v("Paneer Tikka Masala"), v("Vegetable Kadai"), v("Mushroom Kadai"), v("Kadai Paneer"),
  ]},
  { category: "Main Course", subcategory: "Non Veg Main Course", items: [
    n("Mutton Manchurian Gravy", undefined, true), n("Chilli Mutton Gravy", undefined, true),
    n("Prawn Manchurian Gravy"), n("Chilli Prawns Gravy"),
    n("Schezwan Chicken Gravy", undefined, true),
    n("Chilli Chicken Gravy", "Batter-fried chicken with bell peppers in spicy tangy sauce."),
    n("Ginger Chicken Gravy", undefined, true), n("Chicken Manchurian Gravy", undefined, true),
    n("Crab Bhurji"), n("Chicken Kolhapuri Urundai"), n("Mutton Kolhapuri Urundai"),
    n("Crab Kolhapuri Urundai"), n("Chicken Curry Home Style"),
    n("Chicken Hyderabadi", undefined, true),
    n("Butter Chicken Masala", "Chicken in mild tomato gravy with butter and cream."),
    n("Chicken Punjab"), n("Chicken Kolhapuri", undefined, true),
    n("Chicken Tikka Masala", undefined, true), n("Chicken Patiala"),
    n("Hariyali Chicken Masala", undefined, true), n("Pallipalayam Chicken"),
    n("Mutton Rogan Josh", undefined, true), n("Egg Masala"),
    n("Chicken Masala", undefined, true), n("Mutton Masala", undefined, true),
    n("Prawns Masala"), n("Chicken Pepper Masala", undefined, true),
    n("Mutton Pepper Masala", undefined, true), n("Prawns Pepper Masala"),
    n("Kadai Chicken"), n("Kadai Mutton"), n("Chettinad Chicken"),
    n("Chettinad Mutton"), n("Prawns Chettinad"),
    n("Chicken Varutha Curry", undefined, true), n("Mutton Varutha Curry", undefined, true),
    n("Prawns Varutha Curry"),
  ]},
  { category: "Breads", items: [
    v("Roti"), v("Butter Roti"),
    v("Naan", "Soft fluffy leavened flatbread baked in tandoor."),
    v("Butter Naan", "Tandoor-baked naan brushed with butter."),
    v("Kadak Garlic Naan"), v("Kashmiri Naan"),
    v("Chapati", "Soft and thin chapati."), v("Ghee Chapati"),
    v("Parotta", "Single flaky and soft parotta."),
    v("Nool Parotta"), v("Ghee Parotta"), v("Wheat Parotta"),
    v("Tandoori Parotta"),
    n("Ceylon Chicken Parotta"), n("Ceylon Mutton Parotta"),
    n("Chicken Keema Naan", undefined, true),
  ]},
  { category: "Rice & Biryani", subcategory: "Rice", items: [
    v("Ghee Rice"), v("Veg Pulao"), v("Mushroom Pulao"),
    v("Paneer Pulao"), v("Cashewnut Pulao"), v("Kashmiri Pulao"),
  ]},
  { category: "Rice & Biryani", subcategory: "Biryani", items: [
    v("Veg Biryani", "Seasoned rice with Indian vegetables, served with salad and raita."),
    v("Mushroom Biryani", "Seasoned rice with mushrooms, served with salad and raita."),
    v("Paneer 65 Biryani", "Seasoned rice with paneer, served with salad and raita."),
  ]},
  { category: "Dosa", items: [
    v("Plain Dosa"), v("Ghee Plain Dosa"), v("Ghee Podi Plain Dosa"),
    n("Egg Dosa"),
    n("Chicken Curry Dosa", undefined, true), n("Mutton Curry Dosa", undefined, true),
  ]},
  { category: "Fried Rice & Noodles", subcategory: "Veg Fried Rice", items: [
    v("Veg Fried Rice", "Wok-tossed rice with vegetables and Chinese condiments."),
    v("Schezwan Fried Rice"), v("Mushroom Fried Rice"),
    v("Paneer Fried Rice"), v("Mix Veg Fried Rice"),
  ]},
  { category: "Fried Rice & Noodles", subcategory: "Non Veg Fried Rice", items: [
    n("Egg Fried Rice"),
    n("Chicken Fried Rice", "Fried rice tossed with chicken, vegetables and savory seasoning."),
    n("Chicken Schezwan Fried Rice"), n("Crispy Chicken Fried Rice", undefined, true),
    n("Chicken 65 Fried Rice", "Indian style."),
    n("Prawn Fried Rice"), n("Mutton Fried Rice", undefined, true),
  ]},
  { category: "Fried Rice & Noodles", subcategory: "Noodles", items: [
    v("Veg Noodles"), v("Schezwan Noodles"), v("Mushroom Noodles"),
    v("Paneer Noodles"), v("Mix Veg Noodles"),
    n("American Chicken Chopsuey", undefined, true), n("Egg Noodles"),
    n("Chicken Noodles", "Stir-fried noodles with chicken and assorted vegetables.", true),
    n("Schezwan Chicken Noodles", undefined, true),
    n("Crispy Chicken Noodles", undefined, true),
    n("Chicken 65 Noodles", "Indian style."),
    n("Prawns Noodles"), n("Mutton Noodles", undefined, true),
  ]},
  { category: "Pizza & Pasta", subcategory: "Veg Pizza", items: [
    v("Classic Margherita Pizza"), v("Double Cheese Margherita Pizza"),
    v("Garden Fresh Pizza"), v("Hawaiian Pizza"), v("Wild Mushroom Pizza"),
    v("Golden Corn Pizza"), v("Cheese Garlic Pizza"), v("Chilli Garlic Cheese Pizza"),
    v("Paneer Tandoori Pizza"), v("Schezwan Paneer Pizza"),
    v("Baby Corn Chilli Pizza"), v("Hariyali Paneer Pizza"),
    v("Veggie Feast Pizza"), v("Boost in Pizza"),
  ]},
  { category: "Pizza & Pasta", subcategory: "Non Veg Pizza", items: [
    n("Sausage Lover Chicken Pizza", undefined, true),
    n("Tandoori Chicken Pizza", undefined, true),
    n("Chicken Pepperoni Pizza", undefined, true),
    n("Mexican Grilled Chicken Pizza", "Spicy grilled chicken with salsa, peppers and mozzarella.", true),
    n("Peri Peri Chicken Pizza", undefined, true),
    n("Schezwan Chicken Pizza", undefined, true),
    n("Barbeque Chicken Pizza", "Grilled chicken with tangy BBQ sauce, onions & mozzarella."),
    n("Crispy Fried Chicken Pizza", undefined, true),
    n("Roasted Beef Pizza", undefined, true),
    n("Chicken Feast Pizza", "Loaded with a variety of chicken toppings and mozzarella."),
    n("Chicken Keema Pizza", undefined, true),
    n("Chilli Chicken Pizza", undefined, true),
    n("Chicken Tikka Pizza", undefined, true),
    n("Hariyali Chicken Pizza", undefined, true),
    n("Chettinadu Chicken Pizza", undefined, true),
    n("Hot and Spicy Prawns Pizza"), n("Mutton Chettinadu Pizza"),
  ]},
  { category: "Pizza & Pasta", subcategory: "Pasta", items: [
    v("Veg Garden Fresh Pasta", "Cream + Tomato Sauce."),
    n("Chicken Tikka Pasta", "Cream + Tomato Sauce."),
  ]},
  { category: "Burgers & Sandwiches", subcategory: "Burgers", items: [
    v("Ham Burger"), v("Hawaiian Burger"), v("Italian Cheese Burger"),
    v("Barbeque Chip Burger"), v("Chilli Cheese Burger"),
    v("Greek Burger"), v("Heart Attack Burger"),
  ]},
  { category: "Burgers & Sandwiches", subcategory: "Sandwiches", items: [
    v("Mexican Paneer Sandwich"),
    v("Veg Club Sandwich", "Triple-layered toasted sandwich with vegetarian filling."),
    n("Fried Egg Sandwich"),
    n("Cheese Hot Beef Sandwich", undefined, true),
    n("Chilli Chicken Sandwich", undefined, true),
  ]},
  { category: "Snacks", items: [
    v("Kulcha"), v("Chilli Parotta"), v("Veg Kotthu Parotta"), v("Butter Kulcha"),
    n("Half Boil"), n("Full Boil"), n("Omelette"), n("Kalaki"),
    n("Egg Bhurji"), n("Chilli Egg"), n("Egg Kotthu Parotta"),
    n("Chicken Cheese Quesadillas"),
    n("Tandoori Stuffed Chicken Pizza Roll", undefined, true),
    n("Beef Cheese Quesadillas"), n("Chilli Chicken Parotta"),
    n("Chicken Kotthu Parotta", "Minced parotta and chicken with egg and fiery spices."),
    n("Mutton Kotthu Parotta"),
  ]},
  { category: "Wraps", items: [
    v("Tandoori Paneer Wrap"),
    n("Tandoori Chicken Wrap", "Smoky tandoori chicken with crisp salad in a soft wrap."),
    n("Chilli Chicken Wrap", undefined, true),
    n("Jumbo Chicken Wrap (12 inches)", undefined, true),
    n("Beef Cheese Wrap", undefined, true),
  ]},
  { category: "Shawarma", items: [
    n("Chicken Shawarma", "Marinated chicken wrapped in soft bread with creamy garlic sauce."),
    n("Spicy Pepper Shawarma"), n("Mexican Shawarma"), n("Schezwan Shawarma"),
    n("Full Meat Chicken Shawarma", undefined, true),
    n("Cheese Shawarma"), n("Plate Shawarma"),
    n("Chicken Shawarma (Full)"),
  ]},
  { category: "Desserts", subcategory: "Falooda", items: [
    v("Rose Falooda", "Layered dessert drink with rose syrup, vermicelli, milk and ice cream."),
    v("Bombay Falooda"), v("Kulfi Falooda"), v("Arabian Falooda"), v("Royal Falooda"),
  ]},
  { category: "Desserts", subcategory: "Sweets", items: [
    v("Hot Choco Lava Cake"), v("Brownie with Ice Cream"),
  ]},
  { category: "Drinks", subcategory: "Shakes", items: [
    v("Vanilla Million Shake"), v("Strawberry Blast Shake"), v("Mango Shake"),
    v("Chocolate Shake"), v("Sharjah Shake"), v("Pista Milkshake"),
    v("Pineapple Shake"), v("Cold Coffee Shake"), v("Kesar Badam Shake"),
    v("Golden Butterscotch Shake"), v("Dairy Milk Chocolate Shake"),
    v("Fig and Honey Shake"), v("Nutty Dates Shake"),
    v("KitKat in Chocolate Shake"), v("Blackcurrant Shake"),
    v("Munch Chocolate Shake"), v("Mud Coffee Shake"),
    v("Chocolate Brownie Shake"), v("Oreo Blast Shake"),
    v("Cookies in Cream Shake"), v("Coconut Candy Shake"),
    v("Dry Fruits Sip Shake"), v("Dry Fruits Oats Nuts Shake"),
    v("Nutella Shake"), v("Honeymoon Shake"),
    v("Strawberry Freak Shake"), v("Death by Chocolate Shake"),
  ]},
  { category: "Drinks", subcategory: "Lassi", items: [
    v("Sweet Lassi"), v("Honey Lassi"), v("Banana Lassi"),
    v("Punjabi Lassi"), v("Mango Lassi"), v("Pineapple Lassi"),
    v("Vanilla Lassi"), v("Blueberry Lassi"), v("Blackcurrant Lassi"),
  ]},
  { category: "Drinks", subcategory: "Bubble Tea & Coffee", items: [
    v("Bubble Coffee"), v("Strawberry Bubble Tea"),
    v("Chocolate Bubble Tea", "Creamy indulgent blend of rich chocolate and bubbles."),
    v("Caramel Milk Tea"), v("Pista Milk Tea"), v("Iced Bubble Tea"),
  ]},
  { category: "Drinks", subcategory: "Mojitos", items: [
    v("Mint Mojito"), v("Blue Curacao Mojito"), v("Green Apple Mojito"),
    v("Chilli Guava Mojito"), v("Bubble Gum Mint Mojito"),
  ]},
  { category: "Drinks", subcategory: "Juices", items: [
    v("Watermelon Juice", "Pure refreshing juice from fresh sweet watermelons."),
    v("Fresh Lime Juice"), v("Ginger Lime Juice"), v("Mint Lime Juice"),
    v("Pineapple Juice"), v("Jal Jeera Juice"),
    v("Sweet Lime Soda"), v("Salted Lime Soda"),
    v("Mint Lime Soda"), v("Ginger Lime Soda"),
    v("Grapes Juice"), v("Orange Juice"), v("Mosambi Juice"),
    v("Apple Juice"), v("Pomegranate Juice"),
  ]},
  { category: "Drinks", subcategory: "Smoothies", items: [
    v("Mango Magic Smoothie"), v("Madurai Special Jigarthanda Smoothie"),
    v("Pineapple Smoothie"), v("Coconut Dream Smoothie"),
    v("Blueberry Blast Smoothie"), v("Mexican Frozen Hot Chocolate Smoothie"),
    v("Apple Cream Smoothie"),
  ]},
  { category: "Drinks", subcategory: "Crushers", items: [
    v("Sparkling Strawberry"), v("Pineapple Blast"), v("Mango Blast"),
    v("Kiwi Cooler Crush"), v("Blackcurrant Punch"), v("Blueberry Margherita"),
  ]},
  { category: "Drinks", subcategory: "Mocktails", items: [
    v("Passion Fruit Punch"), v("Pineapple Punch"),
    v("Green Fire"), v("Blue Mountain"), v("Watermelon Punch"),
  ]},
];

export const CATEGORIES = Array.from(new Set(menuData.map(c => c.category)));

export const POPULAR_DISHES: { name: string; image: string; tag: string }[] = [
  { name: "Chicken Biryani", image: biryani, tag: "Signature" },
  { name: "Tandoori Chicken", image: starters, tag: "Bestseller" },
  { name: "Chicken Shawarma", image: shawarma, tag: "Crowd Favourite" },
  { name: "Tandoori Chicken Pizza", image: pizza, tag: "Wood Fired" },
  { name: "Chicken 65", image: noodles, tag: "Spicy" },
  { name: "Rose Falooda", image: beverages, tag: "Refreshing" },
];
