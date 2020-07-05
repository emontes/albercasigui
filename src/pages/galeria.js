import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import { graphql } from "gatsby"

export default function Galeria({ data }) {
  return (
    <Layout>
      <Hero img={data.imagen.childImageSharp.fluid}>
        <Banner
          title="Galería"
          info="Enamórese de la Gran Variedad de Albercas que tenemos para usted"
        ></Banner>
      </Hero>
      <div style={{ padding: "3rem" }}>
        <h1>Bienvenido a la Galería de Imágenes</h1>
        <p>
          En esta parte se desplegarán imágenes de los distintos tipos de
          alberca que manejamos, una especie de catálogo virtual
        </p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    imagen: file(relativePath: { eq: "hero-alberca-3.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
