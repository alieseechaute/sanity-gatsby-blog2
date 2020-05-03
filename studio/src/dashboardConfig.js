export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eaf24238aa2b7ec3b920130',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog2-studio-cj1e2hb9',
                  apiId: '1e98360e-7860-4a56-ac61-4ec01362ce56'
                },
                {
                  buildHookId: '5eaf2423e83a65077e88bc28',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog2-web-cfsf26q9',
                  apiId: 'd67d8f13-8ad5-41b2-adbc-b082afe408d0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alieseechaute/sanity-gatsby-blog2',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog2-web-cfsf26q9.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
