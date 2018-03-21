import React from 'react'
import { withRouteData, Link } from 'react-static'
//

export default withRouteData(({ post }) => (
  <div>
    <Link to="/location/">{'<'} Back</Link>
    <br />
    <h3>
      {post.name}, {post.state}
    </h3>
    <p>{post.body}</p>
  </div>
))
