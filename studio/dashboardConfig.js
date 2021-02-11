export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '60247a8e31b34075edba676b',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-4d842he9',
                  apiId: '0c134057-ebd1-4200-9cbf-9596419c7935'
                },
                {
                  buildHookId: '60247a8e0d6fb87ef34b52cc',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-n5npdktf',
                  apiId: 'c3b50345-8682-475d-8a27-ef10b1e996fc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/zl3in/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-n5npdktf.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
