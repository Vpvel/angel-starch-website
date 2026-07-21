import { COMPANY } from '../../domain/models/company.js'

export const careersRepository = {
  getPage() {
    return {
      title: 'Careers',
      subtitle: 'Grow with Angel Starch',
      banner: {
        src: '/careers/careers-banner.png',
        alt: 'Professional looking toward future career pathways',
      },
      intro: `Join ${COMPANY.name} and contribute to innovative starch and food ingredient solutions for customers worldwide.`,
      posts: [
        {
          id: 'qa-manager',
          title: 'Manager - Quality Assurance',
          location: 'Perundurai, Erode District, Tamil Nadu',
          image: '/career_post/743288918_122185763666748368_7565646073655344601_n.jpg',
          alt: 'We are hiring Manager - Quality Assurance at Angel Starch & Food Pvt. Ltd.',
        },
      ],
      applyEmail: 'hr@angelstarch.com',
      applyEmailAlt: 'hr1angelstarch@gmail.com',
      applyPhone: '9500411022',
    }
  },
}
