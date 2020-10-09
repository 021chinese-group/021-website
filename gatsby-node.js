const path = require("path")

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query GetArticles {
      articles: allContentfulArticle {
        nodes {
          slug
        }
      }
    }
  `)
  result.data.articles.nodes.forEach(article => {
    createPage({
      path: `/article/${article.slug}`,
      component: path.resolve(`src/templates/article-template.js`),
      context: {
        slug: article.slug,
      },
    })
  })
}
