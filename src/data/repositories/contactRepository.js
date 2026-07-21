import { COMPANY } from '../../domain/models/company.js'

export const contactRepository = {
  getPage() {
    return {
      heroTitle: 'Get in Touch with Angel Starch',
      formIntro:
        "Have questions? Just fill out the form below and we'll get back to you as soon as possible. Usually within one business day.",
      companyName: COMPANY.name,
      phone: COMPANY.phone,
      phoneHref: COMPANY.phoneHref,
      email: COMPANY.email,
      emailHref: COMPANY.emailHref,
      address: COMPANY.address,
      plantImage: '/common/factory_image.webp',
      plantImageAlt: 'Angel Starch & Food manufacturing facility',
      mapEmbedUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.0533125061474!2d77.71740957452396!3d11.330814048724404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96f14f3ca9717%3A0x8eee2be0dbff5ba5!2sANGEL%20STARCH%20%26%20FOOD%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1784639556027!5m2!1sen!2sin',
      offices: [
        {
          title: 'Admin & Registered Office',
          lines: [
            'H-19, I Floor, Periyar Nagar,',
            'Erode – 638009, Tamil Nadu, India',
            'Phone: +91 96296 11522',
          ],
        },
        {
          title: 'Factory Address',
          lines: [
            'SIPCOT Industrial Growth Centre,',
            'Perundurai / Bhavani belt, Erode District,',
            'Tamil Nadu, India',
          ],
        },
        {
          title: 'Sales Inquiry',
          lines: [
            'marketing1@angelstarch.com',
            'marketing@angelstarch.com',
            'Mobile: +91 96296 11522',
          ],
        },
        {
          title: 'Contact Us',
          lines: [
            'General inquiry: marketing1@angelstarch.com',
            'HR: hr@angelstarch.com',
            'Erode, Tamil Nadu, India',
          ],
        },
      ],
    }
  },
}
