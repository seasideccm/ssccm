import type { NavbarConfig } from '@vuepress/theme-default'

export const en: NavbarConfig = [
  {
    text: 'Blood Flow',
	link: '/en/bloodflow/',
  },
  {
    text: 'guidelines',
    children: [
      '/en/guidelines/',
      {
        text: 'Cadiovascular',
        link: '/en/guidelines/Cadiovascular/',
	  },
      {	  
		text: 'COVID-19',
        link: '/en/guidelines/COVID-19/',
	  },
	  {
		text: 'Respiratory',
        link: '/en/guidelines/Respiratory/',
      },
	  {
		text: 'CNS',
        link: '/en/guidelines/CNS/',
      },
    ],
  },

  {
    text: 'Test',
	link: '/en/test/',
  },
]
