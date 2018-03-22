// import fetch from 'node-fetch'
import axios from 'axios'

export default {
  getSiteData: () => ({
    title: 'React Static Large JSON test'
  }),
  getRoutes: async () => {
    const { data: locations } = await axios.get(
      'http://localhost:3001/locations'
    )
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
        getData: async () => ({
          locations
        }),
        children: locations.map(location => ({
          path: `/${location.id}`,
          component: 'src/containers/Post',
          getData: async () => ({
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
