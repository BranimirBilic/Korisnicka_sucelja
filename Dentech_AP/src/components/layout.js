/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

 /*
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout*/

import React from 'react';
import NavBar from './navigation/navbar';
import Container from './container';
import { useStaticQuery, graphql } from "gatsby";
import './layout.css';

const SiteContainer = props => (
  <div style = {sitecontainerstyle}
    {...props}
  />
)

const Layout = ({children}) =>{
  /*state = { 
    pages:[
      {
        title:'O nama',
        path:'/'
      },
      {
        title:'Usluge',
        path:'/usluge'
      },
      {
        title:'Cjenik',
        path:'/cjenik'
      },
      {
        title:'Blog',
        path:'/blog'
      },
      {
        title:'Kontakt',
        path:'/'
      },
      {
        title:'Naruči se',
        path:'/narucise'
      },
    ]
   }   */
   const data = useStaticQuery(graphql`
      {
        site {
          siteMetadata {
            pages {
              title
              path
            }
          }
        }
      }
    `)

    return ( 
        <SiteContainer>
          <NavBar navlinks = {data.site.siteMetadata.pages}/> 

          <Container>{children}</Container>
        </SiteContainer>    
  );
}

const sitecontainerstyle = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  margin: "0 auto",
  
}


export default Layout;