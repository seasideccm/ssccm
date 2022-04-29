import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import { navbar, sidebar } from './configs'
// import { sidebar } from './configs'
export default defineUserConfig<DefaultThemeOptions>({
  base: "/sscc2/",
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '海滨重症',
      description: '北戴河医院重症医学科交流平台',
    },
    '/en/': {
      lang: 'en-US',
      title: 'SSCC',
      description: 'The platform of department of CCM BeiDaiHe hospital.',
    },
  },  
  head: [['link', { rel: 'icon', href: '/sscc2/images/favicon.ico'}]],
  
    plugins: [
    
   //   '@vuepress/plugin-search',
   //   {
   //     locales: {
   //       '/': {
   //         placeholder: '搜索',
   //       },
   //       '/en/': {
   //         placeholder: 'Search',
   //       },
   //     },
   //   },
   // ],
       [
      '@vuepress/docsearch',
      {
        appId: '7H9N1GQIPC',
		apiKey: 'f43ad48b7cc1e71c487691c49d97e1b7',
        indexName: 'sscc2',
        locales: {
          '/': {
            placeholder: '搜索文档',
          },
          '/en/': {
            placeholder: 'Search Documentation',
          },
        },
      },
    ],
    ],

 themeConfig: {
    logo: 'https://seasideccm.github.io/img/SSCC.png',
	repo: 'https://github.com/seasideccm/sscc2',
	repoLabel: 'sscc',
	docsDir: 'docs',
	docsBranch: 'main',
	// sidebar: 'auto',
	lastUpdated: 'true',
	
	locales: {
      '/': {
		navbar: navbar.zh,
        selectLanguageName: '简体中文',
		selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',
		sidebar: sidebar.zh,
		
      },
      '/en/': {
		navbar: navbar.en,
        selectLanguageName: 'English',
		selectLanguageText: 'Languages',
        selectLanguageAriaLabel: 'Languages',
		sidebar: sidebar.en,
      },
    },
  },
})