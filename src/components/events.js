import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Block from "./blockRoot"

const Images = () => {
  const data = useStaticQuery(graphql`
    query {
      allAirtable(filter: {table: {eq: "Events"}}, sort: {fields: data___Start, order: DESC}) {
	edges {
	  node {
	    id
	    data {
	      Name
	      Map
	      Address
	      Program_Name
              Start(formatString: "YYYY-MM-DD h:mm a")
	    }
	  }
	}
      }
    }
  `)

  return data.allAirtable.edges.map(edge =>
    <Block
      date={edge.node.data.Start}
      text={edge.node.data.Name}
      category="Events"
      categoryUrl="/events"
    >
      <a href={edge.node.data.Map} rel="noopener noreferrer" target="_blank">{edge.node.data.Address}</a>
    </Block>
  );
}

export default Images
