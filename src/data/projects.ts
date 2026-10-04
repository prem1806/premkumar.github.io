export type BadgeColor = 'blue' | 'purple' | 'emerald'

export interface Project {
  image: string
  alt: string
  badge: string
  badgeColor: BadgeColor
  title: string
  subtitle: string
  points: string[]
  tags: string[]
  impact: string
  link: string
}

export const projects: Project[] = [
  {
    image: '/images/showcase_thumb1.png',
    alt: 'Callidus Car Care - Automobile detailing service',
    badge: 'Freelance Project',
    badgeColor: 'blue',
    title: 'Callidus Car Care',
    subtitle: 'Automobile detailing service',
    points: [
      'Designed responsive business website',
      'Created service pages (PPF, coating, wash packages)',
    ],
    tags: ['ReactJs','HTML', 'CSS', 'JavaScript'],
    impact: 'Increased local customer enquiries',
    link: 'https://calliduscarcare.com',
  },
  {
    image: '/images/showcase_thumb2.png',
    alt: 'RRI Hitech Radiology - Medical radiology service website',
    badge: 'Freelance Project',
    badgeColor: 'purple',
    title: 'RRI Hitech Radiology',
    subtitle: 'Medical radiology service',
    points: [
      'Structured healthcare service information UI',
      'Appointment & contact flow UX',
      'Accessibility-friendly layout',
      'Performance optimized pages',
    ],
    tags: ['ReactJs','HTML', 'CSS', 'JavaScript'],
    impact: 'Helped patients easily understand services & contact hospital',
    link: 'https://rrihitechradiology.com/',
  },
  {
    image: '/images/showcase_thumb3.png',
    alt: 'LifeVR - Virtual Reality solutions company website',
    badge: 'Freelance Project',
    badgeColor: 'emerald',
    title: 'LifeVR',
    subtitle: 'Virtual Reality solutions company',
    points: [
      'Designed modern corporate website',
      'Structured service pages for VR solutions',
      'Built responsive layouts for all devices',
      'Created engaging sections for vision & offerings',
      'Implemented enquiry/contact flow',
    ],
    tags: ['ReactJs','HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    impact: 'Improved brand credibility, enabled easy service understanding, and generated project enquiries',
    link: 'https://lifevr.in',
  },
  {
    image: '/images/designshift.png',
    alt: 'Design Shift - UI/UX design education platform',
    badge: 'Freelance Project',
    badgeColor: 'blue',
    title: 'DESIGN SHIFT',
    subtitle: 'UI/UX Design Education Platform',
    points: [
      'Developed a responsive website for a UI/UX design education platform',
      'Implemented program pages, admission process, testimonials, and course information',
      'Built responsive layouts for desktop, tablet, and mobile',
      'Focused on usability, cross-browser compatibility, and responsive design',
    ],
    tags: ['ReactJs','HTML', 'CSS', 'JavaScript'],
    impact: 'Improved the online presence and accessibility of the Design Shift programs.',
    link: 'https://designshift.in',
  },
]

export const badgeColorClasses: Record<BadgeColor, string> = {
  blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
  purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
  emerald: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400',
}
