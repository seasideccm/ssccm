import type { NavbarConfig } from '@vuepress/theme-default'

export const zh: NavbarConfig = [
  {
    text: '血流',
	link: '/bloodflow/',
  },
  {
    text: '指南',
    children: [
      '/guidelines/',
      {
        text: '心血管',
        link: '/guidelines/Cadiovascular/',
	  },
      {	  
		text: '新冠肺炎',
        link: '/guidelines/COVID-19/',
	  },
	  {
		text: '呼吸',
        link: '/guidelines/Respiratory/',
      },
	  {
		text: '神经',
        link: '/guidelines/CNS/',
      },	  
    ],
  },

  {
    text: '测试',
	link: '/test/',
  },
]
