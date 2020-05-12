module.exports = {
    title: 'Cours - Sohaib LAFIFI',
    description: '',
    plugins: [
        ['@vuepress/back-to-top', true],
        ['@vuepress/last-updated'],
    ],
    themeConfig: {
        navbar: true,
        displayAllHeaders: true,
        sidebarDepth: 2,
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
                    title: 'TP',
                    path: '/M2105/TP/',
                    collapsable: true,
                    sidebarDepth: 1,
                    children: [
                        ['/M2105/TP/TP1', 'TP1 Introduction à PHP'],
                        ['/M2105/TP/TP2', 'TP2 Introduction au CMS Wordpress'],
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