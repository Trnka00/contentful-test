import { graphql } from 'gatsby'
import * as React from 'react'

// markup
const IndexPage = ({ data }) => {
  return (
    <table>
      <tr>
        <td>Name</td>
        <td>Genre</td>
        <td>Website</td>
      </tr>
      {data.allContentfulBand.nodes.map(band => (
        <tr>
          <td>{band.name}</td>
          <td>{band.genre}</td>
          <td>{band.website}</td>
        </tr>
      ))}
    </table>
  )
}

export default IndexPage

export const query = graphql`
  query MyQuery {
    allContentfulBand {
      nodes {
        name
        website
        genre
      }
    }
  }
`
