const moment = require('moment');
module.exports = {
    title: 'Cours - Sohaib LAFIFI',
    description: '',
    base:'/courses/',
    plugins: [
        ['@vuepress/back-to-top', true],
        [
          'vuepress-plugin-mathjax',
          {
            target: 'svg',
            macros: {
              '*': '\\times',
            },
          },
        ],
        [
          '@vuepress/last-updated',
          {
            transformer: (timestamp, lang) => {
              // Don't forget to install moment yourself
              const moment = require('moment')
              moment.locale(lang)
              return moment(timestamp).format("DD-MM-YYYY")
            }
          }
        ]
    ],
    locales: {
        // The key is the path for the locale to be nested under.
        // As a special case, the default locale can use '/' as its path.
        '/': {
          lang: 'fr-FR',  
          title: 'Cours - Sohaib LAFIFI',
          description: '',
        }
    },
    themeConfig: {
        navbar: true,
        displayAllHeaders: true,
        sidebarDepth: 2,
        lastUpdated: "Dernière modification ",
        sidebar: [
            "/", {
                title: 'M2102-2 : Virtualisation',
                path: '/M2102-2/',
                collapsable: true,
                children: [{
                    title: 'TP',
                    path: '/M2102-2/TP/',
                    collapsable: true,
                    sidebarDepth: 1,
                    children: [
                        ['/M2102-2/TP/TP1', 'TP1 Virtualbox'],
                        ['/M2102-2/TP/TP2', 'TP2 Docker'],
                        ['/M2102-2/TP/TP3', 'TP3 VMware ESXi'],
                        ['/M2102-2/TP/TP4', 'TP4 Comparaison'],
                    ]
                }]
            }, {
                title: 'M2105 : Web dynamique',
                path: '/M2105/',
                collapsable: true,
                children: [{
                    title: 'TD',
                    path: '/M2105/TD/',
                    collapsable: true,
                    sidebarDepth: 1,
                    children: [
                        ['/M2105/TD/TD1', 'TD1 - Introduction PHP'],
                        ['/M2105/TD/TD2', 'TD2 - Introduction à PHP avec PostgreSQL'],
                    ]
                }, 
                {
                    title: 'TP',
                    path: '/M2105/TP/',
                    collapsable: true,
                    sidebarDepth: 1,
                    children: [
                        ['/M2105/TP/TP1', 'TP1 Introduction à PHP'],
                        ['/M2105/TP/TP2', 'TP2 Introduction au CMS Wordpress'],
                    ]
                }]
            }, 
            {
                title: 'M2207 : Consolidation des bases de la programmation',
                path: '/M2207/',
                collapsable: true,
                children: [{
                    title: 'CM',
                    path: '/M2207/CM/',
                    collapsable: true,
                    sidebarDepth: 1,
                    children: [
                        ['/M2207/CM/CM1', 'CM1 - Une introduction à la POO avec Java'],
                    ]
                },
                {
                    title: 'TP',
                    path: '/M2207/TP/',
                    collapsable: true,
                    sidebarDepth: 1,
                    children: [
                        ['/M2207/TP/TP1', 'TP1 - Consolidations des bases de la programmation'],
                        ['/M2207/TP/TP2', 'TP2 - Création de classes'],
                        ['/M2207/TP/TP3', 'TP3 - Introduction à la programmation réseau'],
                    ]
                }, 

                ]
            },{
                title: 'M23 - Administration systèmes',
                path: '/M23/',
                collapsable: true,
                children: [{
                    title: 'TP',
                    path: '/M23/TP/',
                    collapsable: true,
                    sidebarDepth: 1,
                    children: [
                        ['/M23/TP/TP1', 'TP1 Virtualisation'],
                        ['/M23/TP/TP2', 'TP2 Commandes UNIX'],
                    ]
                }]
            }
        ],

        nav: [{
            text: 'Modules',
            link: '/'
        }]
    }
}