import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

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
    borderColor: "white",
  }

  return (
    <nav>
      <h1>
        <Link to="/" activeStyle={activeStyle}>
          {title}
        </Link>
      </h1>
      <div className="links">
        <Link to="/resume" activeStyle={activeStyle}>
          Resume
        </Link>
        <Link to="/reading" activeStyle={activeStyle}>
          Reading
        </Link>
        <Link to="/flowchart" activeStyle={activeStyle}>
          Chart
        </Link>
        {/* <Link to="/personal-projects" activeStyle={activeStyle}>Personal Projects</Link>
        <Link to="/projects" activeStyle={activeStyle}>Projects</Link> */}
      </div>
    </nav>
  )
}
