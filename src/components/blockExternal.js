import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const BlockDate = ({ date }) => (
  <h3>{date}</h3>
)

BlockDate.propTypes = {
  date: PropTypes.string,
}

BlockDate.defaultProps = {
  date: ``,
}

export default BlockDate
