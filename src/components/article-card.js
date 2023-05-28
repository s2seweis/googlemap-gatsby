import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ArticleCard = ({ article }) => {
  return (
    <Link
      to={`/article/${article.slug}`}
      className="overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
      style={{textDecoration:"none"}}
    >



      <GatsbyImage
        image={getImage(article.cover?.localFile)}
        alt=""
      />



      <div className="px-4 py-4" style={{textDecoration:"none"}}>
        <h3 className="font-bold text-neutral-700" style={{textAlign:"center", textDecoration:"none"}}>{article.title}</h3>

        {/* <h3>Test</h3> */}

        <p className="line-clamp-2 mt-2 text-neutral-500" style={{textAlign:"center", textDecoration:"none"}}>
          {article.description}
        </p>



      </div>
    </Link>
  )
}

export const query = graphql`
  fragment ArticleCard on STRAPI_ARTICLE {
    id
    slug
    title
    description
    cover {
      alternativeText
      localFile {
        childImageSharp {
          gatsbyImageData(aspectRatio: 1.77, placeholder: BLURRED)
        }
      }
    }
  }
`

export default ArticleCard
