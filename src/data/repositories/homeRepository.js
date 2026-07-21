import { COMPANY } from '../../domain/models/company.js'

const HOME_IMAGES = {
  starchBowl: '/homepage/static-1.jpg',
  maizeStarch: '/homepage/static-2.jpg',
}

const BANNER_IMAGES = {
  experience: '/banner/istockphoto-2157667752-612x612.jpg',
  market: '/banner/istockphoto-508459346-612x612.jpg',
  satisfaction: '/banner/istockphoto-641000608-612x612.jpg',
}

const slides = [
  {
    id: 1,
    title: 'Rich Experience and Expertise.',
    text: '33 Years of industry rich experience and expertise',
    image: BANNER_IMAGES.experience,
  },
  {
    id: 2,
    title: 'Domestic & Global Market.',
    text: 'Serving top industries across the domestic & global market',
    image: BANNER_IMAGES.market,
  },
  {
    id: 3,
    title: 'High Level of Customer Satisfaction.',
    text: 'Competitive prices and high level of customer satisfaction',
    image: BANNER_IMAGES.satisfaction,
  },
]

const welcome = {
  eyebrow: 'Welcome',
  heading: 'Customising our Value Added Modified Starches',
  paragraphs: [
    "Our primary goal is to supply outstanding customized products according to the customer's requirement and satisfaction. We are Customising our Value Added Modified Starches & Functional Food Ingredients for the Applications as Binders, Thickeners, Emulsifiers, Stabilisers, Gluten Free Food Ingredients, Products, Vegan Food Products, Plant Based Food Products, Alternative Meat Products, Meat Analogues, Texturing Agents, Low Glycaemic Food Products, Dietary Fibre Food Products, Probiotic- Prebiotic- Symbiotic Food Ingredients.",
    "Also we customizing applications for Meat Processing Industries Like Sausage – Meat Balls- Hams- Burgers, Marinades & Spice Blends as – KFC Kind of Crispiness enhancers- Tempura Batters – Noodles Bouillon – Taste Makers, Different Kinds of Seasonings, KetchUps – Different Varieties of Sauces, Noodles, Pasta, Dairy Industry as Curd- Cheese Analogues- Yoghurt- Paneer- Milkshake Mixes, Confectionary Products like – Gummies, Chewing Gums, Chocolates, Cakes, Candies, Fat Replacers, Different Varieties Of Soups as per Customer's Specific Requirements. Also We are Manufacturing Sweeteners like Liquid Glucose. Maltodextrins of Different DE like Low DE Maltodextrin, High DE Maltodextrin, Medium DE Maltodextrin, High Maltose Corn Syrups, Dextrose Mono Hydrate, Dextrose AnHydrous.",
  ],
  image: HOME_IMAGES.starchBowl,
  imageAlt: 'Bowl of starch powder with raw cassava roots',
}

const products = {
  eyebrow: 'Products',
  heading: 'Custom-made Solutions That Cater',
  paragraphs: [
    'Our products, systems, experts, and innovation services are built on advanced scientific knowledge and are aimed at equipping manufacturers with the tools to shape the future of the food and beverage industry. By refining formulas that strike the perfect balance between product features and benefits, we enhance consumer appeal and cater to their diverse needs, thereby boosting the likelihood of repeat purchases.',
  ],
  image: HOME_IMAGES.maizeStarch,
  imageAlt: 'Wooden bowl of maize starch with corn kernels',
}

const buyers = {
  heading: 'Our Buyers',
  logos: [
    { name: 'Buyer 1', src: '/ourbuyers/1-300x300.png.webp' },
    { name: 'Buyer 2', src: '/ourbuyers/2-300x300.png.webp' },
    { name: 'Buyer 3', src: '/ourbuyers/3-300x300.png.webp' },
    { name: 'Buyer 4', src: '/ourbuyers/4-300x300.png.webp' },
    { name: 'Buyer 5', src: '/ourbuyers/5-300x300.png.webp' },
    { name: 'Buyer 21', src: '/ourbuyers/21-300x300.png.webp' },
    { name: 'Buyer 26', src: '/ourbuyers/26-300x300.png.webp' },
    { name: 'Aachi', src: '/ourbuyers/Aachi-new-300x300.png.webp' },
    { name: 'CCD', src: '/ourbuyers/CCD-new-300x300.png.webp' },
    { name: 'Chings', src: '/ourbuyers/Chings-new-300x300.png.webp' },
    { name: 'Haldirams', src: '/ourbuyers/Haldirams-new-300x300.png.webp' },
    { name: 'Manna', src: '/ourbuyers/Manna-new-300x300.png.webp' },
    { name: 'Peppy', src: '/ourbuyers/Peppy-new-300x300.png.webp' },
    { name: 'Plant Lipids', src: '/ourbuyers/Plant-lipids-new-300x300.png.webp' },
  ],
}

const productPosts = {
  heading: 'Product Posts',
  subtitle: 'Explore our featured starch and ingredient highlights',
  items: [
    {
      id: 'post-1',
      title: 'Product highlight 1',
      image: '/product_post/product1.jpg',
    },
    {
      id: 'post-2',
      title: 'Product highlight 2',
      image: '/product_post/product2.jpg',
    },
    {
      id: 'post-3',
      title: 'Product highlight 3',
      image: '/product_post/product3.jpg',
    },
    {
      id: 'post-4',
      title: 'Product highlight 4',
      image: '/product_post/product4.jpg',
    },
    {
      id: 'post-5',
      title: 'Product highlight 5',
      image: '/product_post/product5.jpg',
    },
    {
      id: 'post-6',
      title: 'Product highlight 6',
      image: '/product_post/product6.jpg',
    },
    {
      id: 'post-7',
      title: 'Product highlight 7',
      image: '/product_post/product7.jpeg',
    },
    {
      id: 'post-8',
      title: 'Product highlight 8',
      image: '/product_post/product8.jpeg',
    },
  ],
}

export const homeRepository = {
  getCompany() {
    return COMPANY
  },
  getImages() {
    return HOME_IMAGES
  },
  getSlides() {
    return slides
  },
  getTagline() {
    return COMPANY.tagline
  },
  getWelcome() {
    return welcome
  },
  getProducts() {
    return products
  },
  getBuyers() {
    return buyers
  },
  getProductPosts() {
    return productPosts
  },
}
