import fetch from 'node-fetch'

export default {
  getSiteData: () => ({
    title: 'React Static'
  }),
  getRoutes: async () => {
    const { data: locations } = await fetch('http://localhost:3001/locations')
    return [
      {
        path: '/',
        component: 'src/containers/Home'
      },
      {
        path: '/about',
        component: 'src/containers/About'
      },
      {
        path: '/location',
        component: 'src/containers/Blog',
        getData: () => ({
          locations
        }),
        children: locations.map(location => ({
          path: `/location/${location.id}`,
          component: 'src/containers/Post',
          getData: () => ({
            location
          })
        }))
      },
      {
        is404: true,
        component: 'src/containers/404'
      }
    ]
  }
}
