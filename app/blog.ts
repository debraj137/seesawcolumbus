export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  featuredImage: string;
  category: string;
  publishedAt: string;
  readTime: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "best-date-night-restaurants-columbus",
    title: "The Columbus date-night restaurants worth dressing up for",
    excerpt:
      "From candlelit rooms to tasting-menu counters, these are the Columbus tables we would choose when dinner is the main event.",
    featuredImage: "/images/columbus-dining-mosaic.png",
    category: "Guides",
    publishedAt: "August 10, 2026",
    readTime: "6 min read",
    content: [
      "A good date-night restaurant does more than serve a memorable plate. It gives the evening a rhythm: a room that feels considered, service that knows when to step in, and a menu that gives you something to talk about between courses.",

      "In Columbus, the best options range from polished tasting-menu experiences to intimate neighborhood rooms. The right choice depends on the kind of evening you want to create.",

      "The common thread is intention. We look for restaurants where the food, room, and hospitality feel like they belong together rather than simply checking the boxes of a special occasion.",

      "If you are planning ahead, book the table before building the rest of the evening around it. The most sought-after rooms can turn a spontaneous dinner into a difficult reservation, especially toward the weekend.",
    ],
  },

  {
    slug: "columbus-best-cheap-eats",
    title: "Where to eat well in Columbus without spending a fortune",
    excerpt:
      "Big flavor does not always require a big bill. Here are the casual Columbus favorites we keep coming back to.",
    featuredImage: "/images/columbus-dining-mosaic.png",
    category: "Guides",
    publishedAt: "August 7, 2026",
    readTime: "5 min read",
    content: [
      "Some of the most satisfying meals in Columbus are the ones that leave plenty of room in the budget for the next stop.",

      "The city has a deep bench of tacos, dumplings, sandwiches, and comforting bowls that prove value and quality can coexist.",

      "For us, a good value restaurant is not simply the cheapest option. It is a place where the price makes sense because the food has a clear point of view and the experience feels generous.",

      "Go hungry, order what the restaurant is known for, and leave room for the next stop.",
    ],
  },

  {
    slug: "columbus-food-neighborhoods-guide",
    title: "A neighborhood-by-neighborhood guide to eating in Columbus",
    excerpt:
      "German Village, Short North, Downtown, Clintonville and beyond: know where to go when you know what kind of meal you want.",
    featuredImage: "/images/columbus-dining-mosaic.png",
    category: "Neighborhoods",
    publishedAt: "August 3, 2026",
    readTime: "8 min read",
    content: [
      "Columbus rewards diners who move around. Different neighborhoods have distinct personalities, and choosing the area first can be a useful shortcut when you are deciding where to eat.",

      "German Village is a natural choice for a dinner that can stretch into a walk. Short North brings a busier, more social energy and a broad mix of restaurants and bars.",

      "Downtown is home to destination tables, while Clintonville gives you a more established neighborhood feel.",

      "The trick is not to treat neighborhoods as rigid categories. Columbus dining is constantly changing, so use the neighborhood as a starting point and then follow the restaurant.",
    ],
  },

  {
    slug: "best-brunch-columbus",
    title: "The brunch spots that make getting up early worthwhile",
    excerpt:
      "Pancake balls, chai, migas and coffee: our short list for a Columbus morning that deserves a little extra time.",
    featuredImage: "/images/columbus-dining-mosaic.png",
    category: "Brunch",
    publishedAt: "July 29, 2026",
    readTime: "5 min read",
    content: [
      "Brunch works best when it feels like more than breakfast served late.",

      "The Columbus spots we like bring a strong identity to the table, whether that means a signature dish, a distinctive room, or a menu that makes the weekend feel slower.",

      "Expect waits at popular places, particularly on sunny weekends. Arriving early or choosing a less conventional brunch hour can make the experience much easier.",

      "Pick one or two things that sound excellent, order them generously, and leave room for coffee.",
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}