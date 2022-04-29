import type { SidebarConfig } from '@vuepress/theme-default'

export const zh: SidebarConfig = {
  '/guidelines/': [
    {
      isGroup: true,
      text: '指南',
      children: [
        '/guidelines/README.md',
        '/guidelines/急性心肌梗死伴心源性休克的有创治疗.md',
      ],
    },
  ],
  '/guidelines/Cadiovascular/': [
     {
   	  isGroup: true,
      text: '心血管',
      children: [
        '/guidelines/Cadiovascular/README.md',
        '/guidelines/Cadiovascular/2020 AHA  Pediatric Basic and Advanced Life Support.md',
        '/guidelines/Cadiovascular/常规心电图检查操作指南 简版.md',
        '/guidelines/Cadiovascular/急性心肌梗死伴心源性休克的有创治疗.md',
      ],
     },
     ],

  '/guidelines/COVID-19/': [
     {
   	  isGroup: true,
      text: '新冠肺炎',
      children: [
        '/guidelines/COVID-19/README.md',
        '/guidelines/COVID-19/新型冠状病毒肺炎重症危重症患者院内转运专家共识.md',
      ],
     },
     ],

  '/guidelines/CNS/': [
     {
   	  isGroup: true,
      text: '中枢神经系统',
      children: [
        '/guidelines/CNS/README.md',
        '/guidelines/CNS/神经外科中枢神经系统感染诊治中国专家共识（2021版）.md',
      ],
     },
     ],

	 
  '/bloodflow/': [
    {
      isGroup: true,
      text: '血流',
      children: [
        '/bloodflow/readme.md',
        '/bloodflow/blood flow.md',
        '/bloodflow/Regional perfusion monitoring in shock.md',
        '/bloodflow/Microstructure and cerebral blood flow changes in patients recovered from COVID 19.md','/bloodflow/Hemodynamic Monitoring and Support.md',
		
      ],
    },
    ],
   '/test/': [
   {
      isGroup: true,
      text: '测试',
      children: [
        '/test/README.md',
        '/test/CodeGroup.md',
      ],
    },
  ],
}
