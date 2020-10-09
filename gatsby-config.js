/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "021 website",
    description: "021 official website built on gatsby",
    author: [],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
        ignore: [`**/\.*`],
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `2buq21floyex`,
        accessToken: "LrXfbkc3aOCSDQIoj5elERadZVhR3CoNGChfLoHPFIc",
        // accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
}
