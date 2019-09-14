import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const BlockDate = ({
  date,
  header,
  text,
  moreUrl,
  children,
  category,
  categoryUrl
}) => (
  <div>
    <h3>{date}</h3>
    <p><strong>{header ? `${header}: ` : ``}</strong>{text}{moreUrl ? <Link to="moreUrl">...</Link> : ``}</p>
    {children}
    <h4><Link to={categoryUrl}>{category}</Link></h4>
    <hr />
  </div>
)

BlockDate.propTypes = {
  date: PropTypes.string,
}

BlockDate.defaultProps = {
  date: ``,
}

export default BlockDate
