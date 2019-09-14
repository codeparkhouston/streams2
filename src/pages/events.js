import React from "react"

import Layout from "../components/layout"
import Events from "../components/events"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Events />
  </Layout>
)

export default IndexPage
