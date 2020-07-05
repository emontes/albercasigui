import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import { graphql } from "gatsby"

export default function Contacto({ data }) {
  return (
    <Layout>
      <Hero img={data.imagen.childImageSharp.fluid}>
        <Banner title="Contacto"></Banner>
      </Hero>
      <div style={{ padding: "3rem" }}>
        <h1>Bienvenido a la Página de Contactos</h1>
        <p>
          Desde aquí podrá contactarse con nosotros habrá un formulario para que
          llene sus datos.
        </p>
        <p>
          Estos datos llegarán a nuestro CRM (Customer Relationship management)
          donde le daremos seguimiento.
        </p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    imagen: file(relativePath: { eq: "hero-alberca-4.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
