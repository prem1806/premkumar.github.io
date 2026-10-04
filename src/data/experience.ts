export interface ExperienceItem {
  icon: string
  company: string
  period: string
  role: string
  wide?: boolean
}

export const experience: ExperienceItem[] = [
  {
    icon: 'corporate_fare',
    company: 'Bosch',
    period: '2022 - Current',
    role: 'Senior Developer',
  },
  {
    icon: 'terminal',
    company: 'Accenture',
    period: '2019 - 2022',
    role: 'Application Development Senior Analyst',
  },
  {
    icon: 'brush',
    company: 'Ei design Pvt Ltd',
    period: '2018 - 2019',
    role: 'Web Developer',
  },
  {
    icon: 'devices',
    company: 'Rxprism Pvt Ltd',
    period: '2017 - 2018',
    role: 'Web Developer',
  },
  {
    icon: 'code',
    company: 'Indegene Pvt Ltd',
    period: '2015 - 2017',
    role: 'Web Developer',
    wide: true,
  },
]
