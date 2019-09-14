import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Block from "./blockRoot"

const Images = () => {
  const data = useStaticQuery(graphql`
    query {
      allAirtable(filter: {table: {eq: "Media"}}, sort: {fields: data___Date_Taken, order: DESC}) {
	edges {
	  node {
	    data {
	      Date_Taken(formatString: "YYYY-MM-DD")
	      Media {
		localFiles {
		  childImageSharp {
		    fluid(maxWidth: 800) {
                      ...GatsbyImageSharpFluid_noBase64
		    }
                    id
		  }
		}
	      }
	      Tag_Line
	    }
	  }
	}
      }
    }
  `)

  return data.allAirtable.edges.map(edge =>
    <Block
      date={edge.node.data.Date_Taken}
      text={edge.node.data.Tag_Line}
      category="Media"
      categoryUrl="/media"
    >
      <div className="media-container">
        { edge.node.data.Media.localFiles.map(files =>
          <React.Fragment>
            <Link className="media-image" to={`/media/${files.childImageSharp.id}`}>
              <Img style={{height: "100%"}} fluid={files.childImageSharp.fluid} />
            </Link>
          </React.Fragment>
        )}
      </div>
    </Block>
  );
}

export default Images
