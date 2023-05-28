const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const articlePost = path.resolve("./src/templates/article-post.js")
  // ###
  // const breakfastPost = path.resolve("./src/templates/breakfast-post.js")




  const result = await graphql(
    `
      {
        allStrapiArticle {
          nodes {
            title
            slug
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Strapi articles`,
      result.errors
    )

    return
  }

  const articles = result.data.allStrapiArticle.nodes

  if (articles.length > 0) {
    articles.forEach((article) => {
      createPage({
        path: `/article/${article.slug}`,
        component: articlePost,
        context: {
          slug: article.slug,
        },
      })
    })
  }

  // ### - Breakfast

  // const result1 = await graphql(
  //   `
  //     {
  //       allStrapiBreakfast {
  //         nodes {
  //           title
  //           slug
  //         }
  //       }
  //     }
  //   `
  // )

  // if (result1.errors) {
  //   reporter.panicOnBuild(
  //     `There was an error loading your Strapi breakfasts`,
  //     result1.errors
  //   )

  //   return
  // }

  // const breakfast = result1.data.allStrapiBreakfast.nodes

  // if (breakfast.length > 0) {
  //   breakfast.forEach((breakfast) => {
  //     createPage({
  //       path: `/breakfast/${breakfast.slug}`,
  //       component: breakfastPost,
  //       context: {
  //         slug: breakfast.slug,
  //       },
  //     })
  //   })
  // }





  
}
