export const blogsRepository = {
  getPage() {
    return {
      title: 'Blogs',
      subtitle: 'News & knowledge from the plant floor',
      posts: [
        {
          title: 'Choosing the right maize starch grade',
          meta: 'Insights · Quality',
          excerpt:
            'A practical guide to matching starch viscosity and purity with your end use.',
        },
        {
          title: 'Export trends in Indian starch markets',
          meta: 'Markets · Trade',
          excerpt:
            'How domestic mills are expanding into global food and industrial supply chains.',
        },
        {
          title: 'Storage tips for bulk starch buyers',
          meta: 'Operations · Care',
          excerpt:
            'Keep moisture, temperature, and packaging in check to protect product quality.',
        },
      ],
    }
  },
}
