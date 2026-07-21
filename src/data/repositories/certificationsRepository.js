const certificates = [
  'AEO-1024x1024.png',
  'APEDA-1024x1024.png',
  'brcs-new-tr-1024x1024.png',
  'Drug-License-1024x1024.png',
  'FDA-1024x1024.png',
  'FIEO-1024x1024.png',
  'Fssai-1024x1024.png',
  'Halal-1024x1024.png',
  'ISO-9001-1024x1024.png',
  'JUHF-HALAL-1024x1024.png',
  'Kosher-Check-1024x1024.png',
  'Sedex-1024x1024.png',
  'spices-board-1024x1024.png',
  'USDA-1024x1024.png',
  'Zed-1024x1024.png',
]

export const certificationsRepository = {
  getPage() {
    return {
      title: 'Certifications',
      subtitle: 'Quality and compliance credentials',
      items: certificates.map((file) => ({
        name: file.replace(/-1024x1024\.png$/i, '').replace(/-/g, ' '),
        src: `/asset/certificates/${file}`,
      })),
    }
  },
}
