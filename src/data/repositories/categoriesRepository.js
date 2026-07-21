import { APPLICATION_PAGES } from './applicationPages.js'

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

const withChildren = (children = []) =>
  children.map((name) => ({
    name,
    slug: slugify(name),
  }))

export const CATEGORY_ITEMS = [
  {
    slug: 'food',
    name: 'Food',
    desc: 'Modified and functional starches for food applications including binders, thickeners, emulsifiers and stabilisers.',
    children: withChildren([
      'Bakery',
      'Batters & Breadings',
      'Confectionery',
      'Dairy',
      'Savory',
      'Meat, Seafood & Poultry',
      'Plant-Based Dairy Alternatives',
      'Plant Based Meat Alternatives',
      'Plant Based Meat',
      'Pastas',
      'Soups',
      'Snacks',
    ]),
  },
  {
    slug: 'bio-polymers',
    name: 'Bio-Polymers',
    desc: 'Sustainable starch-based biopolymer solutions for specialty and industrial formulations.',
    children: withChildren([
      'Charcoal Briquette Binder',
      'Agarbatti & Mosquito Coil Binder',
      'Oil Drilling Starch',
      'Gypsum Board Binder',
      'Foundry Starch',
      'Starch for Fireworks',
      'Binder for Plaster of Paris',
      'Starch for Detergents',
    ]),
  },
  {
    slug: 'native',
    name: 'Native',
    desc: 'Native starches delivered with consistent purity, viscosity and performance for core applications.',
    children: withChildren(['Maize / Corn Starch', 'Tapioca Starch', 'Potato Starch']),
  },
  {
    slug: 'paper-packaging',
    name: 'Paper & Packaging',
    desc: 'Starch grades engineered for paper sizing, corrugated board and packaging strength.',
    children: withChildren(['Starch for Packaging', 'Starch For Paper']),
  },
  {
    slug: 'textiles',
    name: 'Textiles',
    desc: 'Textile processing starches supporting sizing, finishing and fabric performance.',
    children: withChildren([
      'Oneshot Product Sizing',
      'Modified Starch',
      'Thin Boiled Starch',
      'Binder',
      'Softener',
      'Lubricants',
      'Printing',
      'Finishing',
    ]),
  },
  {
    slug: 'instant-mixes',
    name: 'Instant Mixes',
    desc: 'Functional ingredients and mixes aligned with Foodix healthy instant food concepts.',
    children: [],
  },
]

export const categoriesRepository = {
  getPage() {
    return {
      title: 'Categories',
      subtitle: 'Explore our starch and ingredient categories',
      items: CATEGORY_ITEMS.map((item) => ({
        ...item,
        path: `/categories/${item.slug}`,
        children: (item.children || []).map((child) => ({
          ...child,
          path: `/categories/${item.slug}/${child.slug}`,
        })),
      })),
    }
  },

  getBySlug(slug) {
    const item = CATEGORY_ITEMS.find((entry) => entry.slug === slug)
    if (!item) return null

    return {
      ...item,
      path: `/categories/${item.slug}`,
      children: (item.children || []).map((child) => ({
        ...child,
        path: `/categories/${item.slug}/${child.slug}`,
        desc: `${child.name} solutions under our ${item.name} category, supported by Angel Starch application expertise.`,
      })),
    }
  },

  getSubcategory(categorySlug, subSlug) {
    const category = this.getBySlug(categorySlug)
    if (!category) return null

    const child = category.children.find((entry) => entry.slug === subSlug)
    if (!child) return null

    const pageKey = `${categorySlug}/${subSlug}`
    const page = APPLICATION_PAGES[pageKey] || null

    return {
      category,
      subcategory: {
        ...child,
        title: child.name,
        subtitle: `${category.name} · Application`,
        body: `Angel Starch & Food develops specialised starch and ingredient solutions for ${child.name.toLowerCase()} applications within our ${category.name} portfolio. Our team works with processors to match viscosity, texture, process tolerance and clean-label needs for consistent commercial performance.`,
        page,
      },
    }
  },

  getMenuItems() {
    return CATEGORY_ITEMS.map(({ slug, name, children = [] }) => ({
      path: `/categories/${slug}`,
      label: name,
      slug,
      children: children.map((child) => ({
        ...child,
        path: `/categories/${slug}/${child.slug}`,
      })),
    }))
  },
}
