import React from "react"
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'gatsby'
import { graphql } from "gatsby"

export default function Home( {data} ) {
  return (
    <Layout>
    <Hero home="true" img={data.imagen.childImageSharp.fluid}>
      <Banner 
        title="La Alberca de sus Sueños"
        info="Instalamos albercas prefabricadas que se adaptan  la las necesidades de nuestros clientes, de acuerdo a su gusto, diseño arquitectónico y presupuesto.">
      <Link to="/" className="btn-primary">
          Contáctenos
        </Link>
      </Banner>
    </Hero>
    </Layout>
  )
}

export const query = graphql`
  query {
    imagen: file(relativePath: { eq: "hero-alberca-en-patio.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`