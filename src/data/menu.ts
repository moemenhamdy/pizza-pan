// Pizza Pan — Full Menu Data
// Prices in EGP

export type SizedPrices = {
  mini?: number;
  small?: number;
  medium?: number;
  large?: number;
};

export type MenuItem = {
  nameAr: string;
  nameEn: string;
  prices: SizedPrices | number;
  isNew?: boolean;
};

export type MenuCategory = {
  nameAr: string;
  nameEn: string;
  icon: string; // Material icon name
  items: MenuItem[];
  sizes?: string[]; // Column headers for sized items
};

// ─── PIZZA ──────────────────────────────────────────────

const pizzaChicken: MenuItem[] = [
  { nameAr: "فراخ", nameEn: "Chicken", prices: { mini: 75, small: 125, medium: 175, large: 235 } },
  { nameAr: "استربس", nameEn: "Strips", prices: { mini: 75, small: 125, medium: 175, large: 235 } },
  { nameAr: "ديب تشيكن", nameEn: "Deep Chicken", prices: { small: 130, medium: 190, large: 250 } },
  { nameAr: "تشيكن باربيكيو", nameEn: "Chicken BBQ", prices: { small: 130, medium: 190, large: 250 } },
  { nameAr: "تشيكن رانش", nameEn: "Chicken Ranch", prices: { small: 135, medium: 195, large: 255 } },
  { nameAr: "تشيكن رانش هالابينو", nameEn: "Chicken Ranch Jalapeño", prices: { small: 140, medium: 200, large: 260 } },
  { nameAr: "تشيلي تشيكن", nameEn: "Chili Chicken", prices: { small: 130, medium: 190, large: 250 }, isNew: true },
];

const pizzaCheese: MenuItem[] = [
  { nameAr: "مارجريتا", nameEn: "Margherita", prices: { mini: 65, small: 105, medium: 130, large: 175 } },
  { nameAr: "مشكل جبن", nameEn: "Mixed Cheese", prices: { mini: 75, small: 120, medium: 170, large: 220 } },
];

const pizzaMeat: MenuItem[] = [
  { nameAr: "مفروم", nameEn: "Minced Meat", prices: { mini: 90, small: 135, medium: 180, large: 240 } },
  { nameAr: "بسطرمة", nameEn: "Pastrami", prices: { mini: 90, small: 135, medium: 180, large: 240 } },
  { nameAr: "دابل بيبروني", nameEn: "Double Pepperoni", prices: { mini: 90, small: 140, medium: 185, large: 245 } },
  { nameAr: "بيف بايتس", nameEn: "Beef Bites", prices: { small: 140, medium: 200, large: 260 } },
  { nameAr: "سموكد", nameEn: "Smoked", prices: { medium: 195, large: 255 } },
];

const pizzaMix: MenuItem[] = [
  { nameAr: "ميكس بان", nameEn: "Mix Pan", prices: { small: 135, medium: 190, large: 250 } },
  { nameAr: "ميكس لحوم", nameEn: "Mix Meat", prices: { small: 130, medium: 185, large: 245 } },
  { nameAr: "ميكس فراخ", nameEn: "Mix Chicken", prices: { small: 130, medium: 185, large: 245 } },
  { nameAr: "بان سوبريم", nameEn: "Pan Supreme", prices: { medium: 195, large: 255 } },
];

const pizzaSeafood: MenuItem[] = [
  { nameAr: "جمبري", nameEn: "Shrimp", prices: 350 },
  { nameAr: "تونة", nameEn: "Tuna", prices: 235 },
  { nameAr: "سي رانش", nameEn: "Sea Ranch", prices: 350 },
];

// ─── BOMBS ──────────────────────────────────────────────

const bombs: MenuItem[] = [
  { nameAr: "بان", nameEn: "Pan", prices: 175 },
  { nameAr: "فرايد تشيكن", nameEn: "Fried Chicken", prices: 170 },
  { nameAr: "فرايد تشيكن وسط", nameEn: "Fried Chicken (Med)", prices: 105 },
  { nameAr: "رانش", nameEn: "Ranch", prices: 170 },
  { nameAr: "بيف سنجل 200GM", nameEn: "Beef Single 200g", prices: 165 },
  { nameAr: "بيف دابل", nameEn: "Beef Double", prices: 215 },
];

// ─── ADDITIONS ──────────────────────────────────────────

const additions: MenuItem[] = [
  { nameAr: "بطاطس", nameEn: "Fries", prices: 35 },
  { nameAr: "بطاطس شيدر", nameEn: "Cheddar Fries", prices: 55 },
  { nameAr: "بطاطس شيدر هالابينو", nameEn: "Cheddar Jalapeño Fries", prices: 60 },
  { nameAr: "كلوسلو", nameEn: "Coleslaw", prices: 20 },
  { nameAr: "حشو اطراف وسط", nameEn: "Stuffed Crust (Med)", prices: 35 },
  { nameAr: "حشو اطراف كبير", nameEn: "Stuffed Crust (Lg)", prices: 50 },
];

// ─── COMBO ──────────────────────────────────────────────

const combo: MenuItem[] = [
  { nameAr: "كانز + بطاطس", nameEn: "Cans + Fries", prices: 50 },
];

// ─── PIZZA BURGER ───────────────────────────────────────

const pizzaBurger: MenuItem[] = [
  { nameAr: "شير بوكس", nameEn: "Share Box", prices: 330 },
  { nameAr: "بيتزا برجر بيف 300GM", nameEn: "Pizza Burger Beef 300g", prices: 230 },
  { nameAr: "بيتزا برجر فراخ", nameEn: "Pizza Burger Chicken", prices: 230 },
];

// ─── WICHES ─────────────────────────────────────────────

const wiches: MenuItem[] = [
  { nameAr: "بيف ويتش 200GM", nameEn: "Beef Wich 200g", prices: 150 },
  { nameAr: "فرايد تشيكن ويتش", nameEn: "Fried Chicken Wich", prices: 150 },
];

// ─── DRINKS ─────────────────────────────────────────────

const drinks: MenuItem[] = [
  { nameAr: "بيج كولا كانز", nameEn: "Big Cola Cans", prices: 25 },
  { nameAr: "بيج كولا لتر وربع", nameEn: "Big Cola 1.25L", prices: 40 },
  { nameAr: "مياه صغيرة", nameEn: "Small Water", prices: 10 },
  { nameAr: "مياه كبيرة", nameEn: "Large Water", prices: 15 },
];

// ─── KREEB (CREPE) ──────────────────────────────────────

const kreeb: MenuItem[] = [
  { nameAr: "بطاطس", nameEn: "Potato", prices: 70 },
  { nameAr: "رومي", nameEn: "Turkey", prices: 80 },
  { nameAr: "مشكل جبن", nameEn: "Mixed Cheese", prices: 105 },
  { nameAr: "مفروم", nameEn: "Minced Meat", prices: 105 },
  { nameAr: "بيف برجر", nameEn: "Beef Burger", prices: 125 },
  { nameAr: "ميكس لحوم", nameEn: "Mix Meat", prices: 115 },
  { nameAr: "كرسبي", nameEn: "Crispy", prices: 100 },
  { nameAr: "فراخ", nameEn: "Chicken", prices: 115 },
  { nameAr: "ستربس", nameEn: "Strips", prices: 115 },
  { nameAr: "تشيكن فرايد", nameEn: "Chicken Fried", prices: 125 },
  { nameAr: "تشيكن زنجر حار", nameEn: "Chicken Zinger Hot", prices: 125 },
  { nameAr: "ميكس فراخ", nameEn: "Mix Chicken", prices: 120 },
];

// ─── FTEER WICH ─────────────────────────────────────────

const fteerWich: MenuItem[] = [
  { nameAr: "رومي", nameEn: "Turkey", prices: 115 },
  { nameAr: "مشكل جبن", nameEn: "Mixed Cheese", prices: 125 },
  { nameAr: "مفروم", nameEn: "Minced Meat", prices: 130 },
  { nameAr: "سجق", nameEn: "Sausage", prices: 130 },
  { nameAr: "سجق كبيري", nameEn: "Big Sausage", prices: 140 },
  { nameAr: "هوت دوج", nameEn: "Hot Dog", prices: 125 },
  { nameAr: "بسطرمة", nameEn: "Pastrami", prices: 130 },
  { nameAr: "ميكس لحوم", nameEn: "Mix Meat", prices: 135 },
  { nameAr: "فراخ", nameEn: "Chicken", prices: 125 },
  { nameAr: "ستربس كبيري", nameEn: "Big Strips", prices: 135 },
  { nameAr: "ميكس فراخ", nameEn: "Mix Chicken", prices: 130 },
  { nameAr: "ميكس بان", nameEn: "Mix Pan", prices: 135 },
];

// ─── PIES (FTEER) ───────────────────────────────────────

const pies: MenuItem[] = [
  { nameAr: "رومي", nameEn: "Turkey", prices: { medium: 170, large: 220 } },
  { nameAr: "مشكل جبن", nameEn: "Mixed Cheese", prices: { medium: 205, large: 250 } },
  { nameAr: "مفروم", nameEn: "Minced Meat", prices: { medium: 210, large: 255 } },
  { nameAr: "سجق", nameEn: "Sausage", prices: { medium: 215, large: 260 } },
  { nameAr: "سجق كبيري", nameEn: "Big Sausage", prices: { medium: 230, large: 290 } },
  { nameAr: "بسطرمة", nameEn: "Pastrami", prices: { medium: 215, large: 260 } },
  { nameAr: "هوت دوج", nameEn: "Hot Dog", prices: { medium: 210, large: 250 } },
  { nameAr: "ميكس لحوم", nameEn: "Mix Meat", prices: { medium: 215, large: 260 } },
  { nameAr: "فراخ", nameEn: "Chicken", prices: { medium: 210, large: 255 } },
  { nameAr: "ستربس كبيري", nameEn: "Big Strips", prices: { medium: 225, large: 285 } },
  { nameAr: "ميكس فراخ", nameEn: "Mix Chicken", prices: { medium: 215, large: 260 } },
  { nameAr: "ميكس بان", nameEn: "Mix Pan", prices: { medium: 220, large: 275 } },
];

// ─── SWEET PIES ─────────────────────────────────────────

const sweetPies: MenuItem[] = [
  { nameAr: "تشوكليت بايتس", nameEn: "Chocolate Bites", prices: 95 },
  { nameAr: "سكر ساده", nameEn: "Plain Sugar", prices: 55 },
  { nameAr: "كاسترد لين", nameEn: "Custard", prices: 60 },
  { nameAr: "كريمة بالقشطة", nameEn: "Cream", prices: 85 },
  { nameAr: "كريمة مكسرات", nameEn: "Cream & Nuts", prices: 100 },
  { nameAr: "كريمة بالقشطة مكسرات", nameEn: "Cream, Kashta & Nuts", prices: 115 },
  { nameAr: "شيكولاته", nameEn: "Chocolate", prices: 160 },
  { nameAr: "شيكولاته موز", nameEn: "Chocolate Banana", prices: 170 },
  { nameAr: "شيكولاته مكسرات", nameEn: "Chocolate Nuts", prices: 180 },
  { nameAr: "شيكولاته ميكس", nameEn: "Chocolate Mix", prices: 185 },
];

// ─── SWEET KREEB ────────────────────────────────────────

const sweetKreeb: MenuItem[] = [
  { nameAr: "شيكولاته ساده", nameEn: "Plain Chocolate", prices: 75 },
  { nameAr: "شيكولاته موز", nameEn: "Chocolate Banana", prices: 85 },
  { nameAr: "شيكولاته مكسرات", nameEn: "Chocolate Nuts", prices: 115 },
  { nameAr: "شيكولاته قشطه", nameEn: "Chocolate Cream", prices: 105 },
  { nameAr: "شيكولاته ميكس", nameEn: "Chocolate Mix", prices: 115 },
  { nameAr: "شيكولاته ميكس بان", nameEn: "Chocolate Mix Pan", prices: 140 },
];

// ─── EXPORTED CATEGORIES ────────────────────────────────

export const menuCategories: MenuCategory[] = [
  {
    nameAr: "بيتزا فراخ",
    nameEn: "Chicken Pizza",
    icon: "local_pizza",
    sizes: ["mini", "small", "medium", "large"],
    items: pizzaChicken,
  },
  {
    nameAr: "بيتزا جبن",
    nameEn: "Cheese Pizza",
    icon: "local_pizza",
    sizes: ["mini", "small", "medium", "large"],
    items: pizzaCheese,
  },
  {
    nameAr: "بيتزا لحوم",
    nameEn: "Meat Pizza",
    icon: "local_pizza",
    sizes: ["mini", "small", "medium", "large"],
    items: pizzaMeat,
  },
  {
    nameAr: "بيتزا ميكس",
    nameEn: "Mix Pizza",
    icon: "local_pizza",
    sizes: ["mini", "small", "medium", "large"],
    items: pizzaMix,
  },
  {
    nameAr: "سي فود",
    nameEn: "Seafood",
    icon: "set_meal",
    items: pizzaSeafood,
  },
  {
    nameAr: "القنابل",
    nameEn: "Bombs",
    icon: "whatshot",
    items: bombs,
  },
  {
    nameAr: "بيتزا برجر",
    nameEn: "Pizza Burger",
    icon: "lunch_dining",
    items: pizzaBurger,
  },
  {
    nameAr: "ويتش",
    nameEn: "Wiches",
    icon: "kebab_dining",
    items: wiches,
  },
  {
    nameAr: "كريب",
    nameEn: "Crepe",
    icon: "flatware",
    items: kreeb,
  },
  {
    nameAr: "كريب حلو",
    nameEn: "Sweet Crepe",
    icon: "cookie",
    items: sweetKreeb,
  },
  {
    nameAr: "فطير",
    nameEn: "Pies",
    icon: "pie_chart",
    sizes: ["medium", "large"],
    items: pies,
  },
  {
    nameAr: "فطير حلو",
    nameEn: "Sweet Pies",
    icon: "cake",
    items: sweetPies,
  },
  {
    nameAr: "ساندوتش فطير",
    nameEn: "Pie Sandwiches",
    icon: "breakfast_dining",
    items: fteerWich,
  },
  {
    nameAr: "إضافات",
    nameEn: "Additions",
    icon: "add_circle",
    items: additions,
  },
  {
    nameAr: "كومبو",
    nameEn: "Combo",
    icon: "takeout_dining",
    items: combo,
  },
  {
    nameAr: "مشروبات",
    nameEn: "Drinks",
    icon: "local_drink",
    items: drinks,
  },
];

// Helper to group pizza categories for tabs
export const menuTabs = [
  { id: "pizza", nameAr: "بيتزا", nameEn: "Pizza", icon: "local_pizza", categoryIndices: [0, 1, 2, 3, 4] },
  { id: "bombs", nameAr: "القنابل", nameEn: "Bombs", icon: "whatshot", categoryIndices: [5] },
  { id: "burgers", nameAr: "برجر و ويتش", nameEn: "Burgers & Wiches", icon: "lunch_dining", categoryIndices: [6, 7] },
  { id: "crepe", nameAr: "كريب", nameEn: "Crepe", icon: "flatware", categoryIndices: [8, 9] },
  { id: "pies", nameAr: "فطير", nameEn: "Pies", icon: "pie_chart", categoryIndices: [10, 11, 12] },
  { id: "extras", nameAr: "إضافات ومشروبات", nameEn: "Sides & Drinks", icon: "local_drink", categoryIndices: [13, 14, 15] },
];
