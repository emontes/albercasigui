import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import { graphql } from "gatsby"

export default function Servicios({ data }) {
  return (
    <Layout>
      <Hero img={data.imagen.childImageSharp.fluid}>
        <Banner title="Servicios" info="Lo que podemos ofrecerle"></Banner>
      </Hero>
      <div style={{ padding: "3rem" }}>
        <h1>Servicios que ofrecemos</h1>
        <p>
          Aquí se va a dar un listado de los servicios, tales como Diseño y
          Construcción, Mantenimiento, Limpieza....
        </p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    imagen: file(relativePath: { eq: "hero-alberca-2.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
