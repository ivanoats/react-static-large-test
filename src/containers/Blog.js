import React from 'react'
import { withRouteData, Link } from 'react-static'
//

export default withRouteData(({ locations }) => (
  <div>
    <h1>It's blog time.</h1>
    <br />
    All Posts:
    <ul>
      {locations.map(loc => (
        <li key={loc.id}>
          <Link to={`/blog/post/${loc.id}/`}>{loc.name}</Link>
        </li>
      ))}
    </ul>
  </div>
))
