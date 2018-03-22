import React from 'react'
import { withRouteData, Link } from 'react-static'
//

export default withRouteData(({ location }) => (
  <div>
    <Link to="/location/">{'<'} Back</Link>
    <br />
    <h3>
      {location.name}, {location.state}
    </h3>
    <p>{location.body}</p>
  </div>
))
