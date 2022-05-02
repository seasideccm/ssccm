import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { navbar, sidebar } from './configs'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'


export default defineUserConfig({
  base: "/",
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
  head: [['link', { rel: 'icon', href: '/images/favicon.ico'}]],
  
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

      
      docsearchPlugin({
        appId: 'ORWYCND0OB',
        apiKey: '1bc38658a874b69b61a2ba75867e88ce',
        indexName: 'netlify_3077aa08-89d1-47ba-ac04-f9347753d7ef_main_all',
        locales: {
          '/': {
            placeholder: '搜索文档',
          },
          '/en/': {
            placeholder: 'Search Documentation',
          },
        },
      }),
    ],

theme: defaultTheme({
  logo: '/images/SSCC.png',
	repo: 'https://github.com/seasideccm/ssccm',
	repoLabel: 'ssccm',
	docsDir: 'docs',
	docsBranch: 'docs',
	// sidebar: 'auto',
	lastUpdated: 'true',
  
	locales: {
      '/': {
		    navbar: navbar.zh,
        selectLanguageName: '简体中文',
		    selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',
		    sidebar: sidebar.zh
      },

      '/en/': {
		    navbar: navbar.en,
        selectLanguageName: 'English',
		    selectLanguageText: 'Languages',
        selectLanguageAriaLabel: 'Languages',
		    sidebar: sidebar.en,
      },
  },
}),
})
