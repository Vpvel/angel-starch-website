const ABOUT_IMAGES = {
  banner: '/about/about-banner.png',
  welcome: '/about/abt_01.png.webp',
  plantBased: '/about/abt_02-300x300.webp',
  md: '/about/md-vps-radhakrishnan.png',
}

export const aboutRepository = {
  getPage() {
    return {
      title: 'About Us',
      subtitle: 'Angel Starch Private Limited',
      images: ABOUT_IMAGES,
      video: {
        title: 'Watch Our Story',
        youtubeId: 'WacA1IY3xHQ',
        embedUrl: 'https://www.youtube.com/embed/WacA1IY3xHQ',
        watchUrl: 'https://youtu.be/WacA1IY3xHQ?si=7qHJR_p7fbFxzw09',
      },
      welcome: {
        eyebrow: 'Welcome',
        heading: 'Angel Starch Private Limited',
        paragraphs: [
          'Sree Mangalmoorthi Starch Industries was started in the year 1990 for Native Starches and in 2010 Angel Starch & Food Private Limited was established in Erode, Tamil Nadu.',
          "Our core value of 'Customer Focussed Innovation' has made us emerge as one of the largest manufacturers, suppliers and exporters of wide varieties of starch in India. We have a registration and membership under the Certificate of Agricultural and Processed Food Products Export Development Authority.",
        ],
        image: ABOUT_IMAGES.welcome,
        imageAlt: 'Bowl of starch powder on green leaf',
      },
      collaborate: [
        'Collaborate with Angel to merge delectable culinary experiences',
        'with the essential benefits that consumers seek the most.',
      ],
      leadership: {
        heading: "Managing Director's Message",
        name: 'Mr. V. P. S. Radhakrishnan',
        role: 'Managing Director',
        image: ABOUT_IMAGES.md,
        imageAlt: 'Mr. V. P. S. Radhakrishnan, Managing Director of Angel Starch',
        message:
          'Under the guidance of Mr. V. P. S. Radhakrishnan and his vast industry experience of 35 years, we are able to deliver the best to our ever-growing clientele. Our exceptional product range is well known in the market. We are backed by state of the art infrastructure and equipped with a processing unit, quality checking unit and a warehouse and packaging section. Quality of the products has always been our prime concern. We take stringent measures to check our products on various parameters like composition, viscosity, pH value, purity and effectiveness. As we understand no other speciality starch manufacturing company in INDIA has created the kind of highest value for their Basic Raw material of Starches or any other carbohydrates and hydrocolloids. We are the One among the Very few to have the Subject Expertise as well as the Vision for Value Creation in India to have moved forward to the Extend of creating own retail brands Like “Foodix”.',
      },
      foodix: {
        lines: [
          '“Foodix” (Food-Mixes) is a concept to serve Healthy and Tasty Real Instant Food Products without adding',
          'Chemicals, Preservatives, Trans fats & MSG, so that our society can Live a Healthier Life.',
        ],
      },
      global: {
        columns: [
          'To spread our business network across global markets, primarily supplying to the food manufacturing giants in US and Europe including more than 5/10 top food manufacturers. We are also approved Vendors for Ferrara Candy Company (Subsidy of Ferrero Rocher’s) – USA. Con Agra – USA. Danone International, Nestle International, Nepra Foods, USA, Global Nutritional Corp – USA, INNO Foods – USA, Tyson Foods- INDIA, INDO – NISSIN Foods – India.',
          'At Angel Starch, we invest in our suppliers and help them in all kinds of practical ways. It’s a responsible investment in our shared future, and provides direct, practical benefits for our customers. In the food industry, mitigating risk can be crucial for long-term commercial success. The unique grower-owned ANGEL STARCH set-up provides you with a degree of supply reliability that no other company can match.',
        ],
      },
      plantBased: {
        heading: 'Plant-based opportunities',
        body: 'We develop food ingredients with the aim of replacing as many animal ingredients as possible with starch-based ingredients. For example, we can replace animal gelatine with modified starch in wine gums – as well as cheese, replacing the casein with ingredients. Our expectation for the near future is that greater transparency in relation to ingredients and climate footprint will be required. Therefore, we aim to enable our customers to limit CO2 emissions sustainably.',
        image: ABOUT_IMAGES.plantBased,
        imageAlt: 'Plant-based food ingredients in wooden bowls',
      },
      vision: {
        heading: 'Vision',
        body: 'We foresee Angel Starch & Food Private Limited to be the world’s leading company to place itself on the global map as a one stop solution provider for quality functional food ingredients and customized value added starches, Carbohydrates and Hydrocolloids products for Food, Nutraceuticals, pharmaceuticals and other industries.',
      },
      mission: {
        heading: 'Mission',
        points: [
          'To spread our business network across global markets while making a firm step in the Indian industries for quality starch and chemical products.',
          'To supply outstanding customized products according to the customers requirement and satisfaction.',
          'To enhance customers’ production efficiency and reduce their production cost.',
        ],
      },
      expertise: {
        heading: 'Our Expertise',
        body: 'Angel is not just a supplier, but a valued partner that empowers you to expedite the launch of high-quality, value-added products that align with consumer preferences. Our collaborative approach guarantees that you receive the necessary support to succeed in the market. Research and development of value added starches for specific applications, gluten free ingredients for food, vegan, plant based products for foods, etc., We are Customising our Value Added Modified Starches, CLEAN LABLE Starches & Functional Food Ingredients for the Applications as Binders, Thickeners, Emulsifiers, Stabilisers, Gluten Free Food Ingredients, Products, Vegan Food Products, Plant Based Food Products, Alternative Meat Products, Meat Analogues, Texturing Agents, Low Glycaemic Food Products, Probiotic- Prebiotic- Symbiotic Food Ingredients. We are a complete customised solution provider for all kind of food applications.',
      },
    }
  },
}
