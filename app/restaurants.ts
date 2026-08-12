export type RestaurantDetail = {
  slug: string;
  name: string;
  cuisine: string;
  area: string;
  rating: string;
  reviews: string;
  price: string;
  hours: string;
  description: string;
  menu: string[];
  position: string;
};

const entries: Omit<RestaurantDetail, "slug">[] = [
  { name:"Veritas", cuisine:"Contemporary American", area:"Downtown", rating:"4.8", reviews:"1.4k", price:"$$$$", hours:"Tue–Sat · 5–10 pm", description:"A celebrated tasting-menu room where Ohio ingredients meet exacting, quietly theatrical cooking.", menu:["Seasonal tasting","Wine pairing","À la carte bar"], position:"0% 0%" },
  { name:"The Refectory", cuisine:"French · European", area:"Clintonville", rating:"4.8", reviews:"2.1k", price:"$$$$", hours:"Tue–Sat · 5–9 pm", description:"A Columbus institution for polished French cooking, an exceptional cellar, and unhurried evenings.", menu:["Prix fixe","French classics","Dessert"], position:"50% 0%" },
  { name:"Chapman’s Eat Market", cuisine:"New American", area:"German Village", rating:"4.7", reviews:"1.7k", price:"$$$", hours:"Tue–Sun · 5–10 pm", description:"Inventive shared plates and cult-favorite desserts in a lively, design-forward dining room.", menu:["Small plates","Pasta","Late-night"], position:"100% 0%" },
  { name:"Agni", cuisine:"Modern Indian", area:"Brewery District", rating:"4.8", reviews:"820", price:"$$$", hours:"Wed–Sun · 5–10 pm", description:"A striking modern Indian menu with a sense of place, heat, smoke, and carefully layered spice.", menu:["Tasting menu","Vegetarian","Cocktails"], position:"0% 50%" },
  { name:"Lindey’s", cuisine:"American · Patio", area:"German Village", rating:"4.6", reviews:"5.8k", price:"$$$", hours:"Daily · 11 am–10 pm", description:"Reliable hospitality, polished American plates, and one of the city’s loveliest courtyard patios.", menu:["Brunch","Steaks","Seafood"], position:"50% 50%" },
  { name:"Akai Hana", cuisine:"Japanese · Sushi", area:"Northwest", rating:"4.6", reviews:"3.5k", price:"$$", hours:"Tue–Sun · 11 am–9 pm", description:"A long-running destination for pristine sashimi, comforting noodle bowls, and deep sushi-menu variety.", menu:["Sushi","Ramen","Bento"], position:"100% 50%" },
  { name:"Los Guachos", cuisine:"Mexican · Tacos", area:"Northwest", rating:"4.7", reviews:"6.4k", price:"$", hours:"Daily · 10 am–midnight", description:"The go-to for al pastor cut to order, quick plates, and a late-night Columbus ritual.", menu:["Tacos al pastor","Tortas","Quesadillas"], position:"0% 100%" },
  { name:"Momo Ghar", cuisine:"Nepalese · Tibetan", area:"Northland", rating:"4.7", reviews:"2.3k", price:"$", hours:"Tue–Sun · 11 am–9 pm", description:"Hand-folded dumplings and vibrant Himalayan comfort food with a devoted local following.", menu:["Momos","Thukpa","Chili dishes"], position:"50% 100%" },
  { name:"Hiraeth", cuisine:"Seasonal · Tasting", area:"Italian Village", rating:"4.8", reviews:"460", price:"$$$$", hours:"Thu–Sat · 5:30–10 pm", description:"An intimate tasting-menu counter with thoughtful service and ingredient-led courses.", menu:["Tasting menu","Beverage pairing","Dietary options"], position:"100% 100%" },
  { name:"Basi Italia", cuisine:"Italian", area:"Victorian Village", rating:"4.7", reviews:"1.9k", price:"$$$", hours:"Tue–Sun · 5–10 pm", description:"Cozy, romantic Italian cooking with house-made pasta and a neighborhood feel.", menu:["Pasta","Antipasti","Italian wine"], position:"50% 0%" },
  { name:"Wario’s Beef & Pork", cuisine:"Sandwiches", area:"Downtown", rating:"4.8", reviews:"2.2k", price:"$$", hours:"Tue–Sat · 11 am–8 pm", description:"Big, messy, meticulously built sandwiches that have become a destination in their own right.", menu:["Cheesesteaks","Roast pork","Fries"], position:"100% 50%" },
  { name:"Comune", cuisine:"Plant-based", area:"Brewery District", rating:"4.7", reviews:"1.1k", price:"$$", hours:"Tue–Sun · 5–10 pm", description:"A polished plant-forward restaurant where vegetables get the center-of-the-plate treatment.", menu:["Vegan plates","Natural wine","Brunch"], position:"0% 0%" },
  { name:"Joya’s Cafe", cuisine:"Indian-inspired", area:"Worthington", rating:"4.7", reviews:"1.5k", price:"$$", hours:"Wed–Sun · 9 am–3 pm", description:"Bright, craveable daytime cooking that moves freely between Indian flavors and Midwest comfort.", menu:["Breakfast","Sandwiches","Chai"], position:"0% 50%" },
  { name:"The Guild House", cuisine:"New American", area:"Short North", rating:"4.5", reviews:"3.7k", price:"$$$", hours:"Daily · 4–10 pm", description:"A handsome Short North mainstay built around seasonal produce, craft cocktails, and social dinner energy.", menu:["Seasonal plates","Steaks","Brunch"], position:"50% 50%" },
  { name:"Min-Ga Korean Restaurant", cuisine:"Korean", area:"Bethel Road", rating:"4.6", reviews:"2.5k", price:"$$", hours:"Daily · 11 am–9 pm", description:"Soulful Korean cooking with bubbling stews, barbecue, and generous shareable plates.", menu:["Korean BBQ","Bibimbap","Stews"], position:"100% 100%" },
  { name:"Katalina’s", cuisine:"Brunch · Latin", area:"Harrison West", rating:"4.6", reviews:"4.9k", price:"$$", hours:"Daily · 8 am–3 pm", description:"A beloved, cheerful brunch stop known for pancake balls, migas, and a lively little dining room.", menu:["Brunch","Pancake balls","Coffee"], position:"50% 0%" },
  { name:"Rooh Columbus", cuisine:"Progressive Indian", area:"Short North", rating:"4.5", reviews:"1.3k", price:"$$$", hours:"Tue–Sun · 5–10 pm", description:"Refined regional Indian flavors rendered through modern technique and stylish cocktails.", menu:["Small plates","Curries","Cocktails"], position:"100% 0%" },
  { name:"Si Senor", cuisine:"Mexican", area:"Grandview", rating:"4.6", reviews:"1.8k", price:"$$", hours:"Daily · 11 am–10 pm", description:"A warm, family-run favorite for generous Mexican plates, margaritas, and easygoing dinners.", menu:["Fajitas","Enchiladas","Margaritas"], position:"0% 100%" },
  { name:"Harvest Bar + Kitchen", cuisine:"Farm-to-table", area:"German Village", rating:"4.5", reviews:"2.8k", price:"$$$", hours:"Daily · 11 am–10 pm", description:"Seasonal Ohio produce, wood-fired pizza, and a charming neighborhood setting.", menu:["Wood-fired pizza","Seasonal plates","Brunch"], position:"100% 50%" },
  { name:"Yoshi", cuisine:"Japanese · Sushi", area:"Dublin", rating:"4.7", reviews:"940", price:"$$$", hours:"Tue–Sun · 5–10 pm", description:"A tiny, chef-led sushi destination where the counter experience is the main event.", menu:["Omakase","Nigiri","Sake"], position:"50% 100%" },
];

export const restaurantSlug = (name: string) => name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
export const restaurantDetails = entries.map((restaurant) => ({ ...restaurant, slug: restaurantSlug(restaurant.name) }));
