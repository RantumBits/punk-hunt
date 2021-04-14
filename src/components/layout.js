import '../assets/scss/main.scss'
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import JSONData from "../content/mycontent.json"




const Layout = ({ children, location }) => {

  let content;

  if (location && location.pathname === '/') {
    content = (
      <div>
        {children}
      </div>
    )
  } else {
    content = (
      <div id="wrapper" className="page">
        <div>
          {children}
        </div>
      </div>
    )
  }

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              description
              image
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
            title={JSONData.Title}
            meta={[
              { name: 'description', content: 'CryptoPunks are taking over the billboards of Miami. Here is your chance to get involved.' },
              { name: 'og:description', content: 'CryptoPunks are taking over the billboards of Miami. Here is your chance to get involved.' },
              { name: 'og:title', content: 'PunkHunt | Find them all | CryptoPunks on Billboards' },
              { name: 'image',  content: "https://punkhunt.com/images/punkhunt_cryptopunks_miami_billboard.png" },
              { name: 'og:image',  content: "/images/punkhunt_cryptopunks_miami_billboard.png" },
              { name: 'og:type',  content: "website" }

            ]}
          >
            <html lang="en" />
          </Helmet>
          {content}
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
