import React from "react"
import { Link, graphql } from 'gatsby'
import Layout from "../components/Layout"
import styles from '../styles/home.module.css'
import Img from "gatsby-image"

export default function Home({ data }) {
  console.log(data)
  
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Aaron Didner</h2>
          <h3>Web Developer</h3>
          <p>Also a West Coast Swing Dancer, Dungeon Master, Bookworm, Calisthenics Athletes and Cryptocurrency Enthusiust</p>
          <a className={styles.btn} href={"mailto:adidner@gmail.com"}>Contact Me</a>
        </div>
        <Img style={{height: '500px', width: 'auto'}} fluid={data.file.childImageSharp.fluid} />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: {eq: "profile-pic.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`