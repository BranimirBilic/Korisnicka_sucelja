import { jsx, Styled } from "theme-ui"
import { Grid, Card } from "@theme-ui/components"

import React from "react"
import { graphql } from "gatsby"


import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"

const IndexPage = () => {
  return ( 
      <Layout>
        <SEO title="Naslovna" />      
      </Layout>
  )
}

export default IndexPage

