const awards = [
  {
    title: 'Achievements',
    year: '2017',
    body: 'This was awarded to Mr. V.P.S. Radhakrishnan in July 2017 by Kumarguru College of Technology in association with Times of India for recognising exemplary alumnus for achieving professional excellence and contributing to the betterment of the society. And also won many appreciation awards from KCT.',
    image: '1.webp',
  },
  {
    title: 'Our Certifications',
    year: null,
    body: 'The Global Organic Textile Standard (GOTS) was developed through collaboration by leading standard setters with the aim of defining requirements that are recognised world-wide and that ensure the organic status of textiles from harvesting of the raw materials through environmentally and socially responsible manufacturing up to labelling in order to provide a credible assurance to the end consumer.',
    image: '2.webp',
  },
  {
    title: 'Memberships',
    year: null,
    body: 'Registered Member: Federation of Indian Export Organisation (FIEO), Govt. of India.',
    image: '3.jpg',
  },
  {
    title: 'Recognition',
    year: null,
    body: 'Angel Starch and Food Private Limited is certified to the USDA organic regulations, 7 CFR Part 205, for the categories of Handling. Once certified, a production or handling operation’s organic certification continues in effect until surrendered, suspended, or revoked. Status of this certification and specific certified organic products covered may be verified at https://organic.ams.usda.gov/Integrity/CP/OPP?nopid=4920007290',
    image: '4.webp',
  },
  {
    title: 'Recognition',
    year: null,
    body: 'Angel Starch and Food Private Limited is certified to the USDA organic regulations, 7 CFR Part 205, for the categories of Handling. Once certified, a production or handling operation’s organic certification continues in effect until surrendered, suspended, or revoked. Status of this certification and specific certified organic products covered may be verified at https://organic.ams.usda.gov/Integrity/CP/OPP?nopid=4920007290',
    image: '5.webp',
  },
  {
    title: 'Recognition',
    year: null,
    body: 'Angel Starch and Food Private Limited is certified to the USDA organic regulations, 7 CFR Part 205, for the categories of Handling. Once certified, a production or handling operation’s organic certification continues in effect until surrendered, suspended, or revoked. Status of this certification and specific certified organic products covered may be verified at https://organic.ams.usda.gov/Integrity/CP/OPP?nopid=4920007290',
    image: '6.webp',
  },
  {
    title: 'Affiliations',
    year: null,
    body: 'Young Indians (Yi) is a movement for Indian Youth to converge, lead, co-create and influence India’s future. As an integral part of the Confederation of Indian Industry (CII), a non-government, not-for-profit, industry led and industry managed organisation playing a proactive role in India’s development process. Mr. V.P.S. Radhakrishnan won many awards from Yi and also taken charge as chair of Yi (Erode Sector).',
    image: '7.webp',
  },
  {
    title: 'Quality Certificates',
    year: null,
    body: "Benefits of CDG Organics Certification. 'CDG Organics' certification as said earlier is aimed towards the endorsement of food and farming product as organic. CDG makes standards for: green building, supply chain security, vegan certification, social audit, CSR audit, forest safety, VOC emissions, organic certification.",
    image: '8.webp',
  },
]

export const accoladesRepository = {
  getPage() {
    return {
      title: 'Accolades',
      subtitle: 'Recognition for excellence and contribution to society',
      banner: {
        src: '/accolades/accolades-banner.png',
        alt: 'Golden star trophy representing awards and recognition',
      },
      items: awards.map((item) => ({
        ...item,
        image: item.image ? `/accolades/${item.image}` : null,
      })),
    }
  },
}
