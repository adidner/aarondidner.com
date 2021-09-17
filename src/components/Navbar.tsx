import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'

export default function Navbar() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const { title } = data.site.siteMetadata

  const activeStyle = {
    borderColor: 'white',
  }

  return (
    <nav>
      <h1>{ title }</h1>
      <div className="links">
        <Link to="/" activeStyle={activeStyle}>Home</Link>
        <Link to="/about" activeStyle={activeStyle}>Resume</Link>
        <Link to="/projects" activeStyle={activeStyle}>Personal Projects</Link>
      </div>
    </nav>
  )
}
