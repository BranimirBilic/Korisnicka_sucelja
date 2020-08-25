import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Product from '../components/product/product'

const ONama = () => (
  <Layout>
    <SEO title="Home" />  
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Product/>
      </div>   
  </Layout>
)

export default ONama
