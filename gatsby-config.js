/**
 * @type {import('gatsby').GatsbyConfig}
 */

 require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Phifer Projects`,
    siteUrl: `https://projects.ericphifer.com`
  },
  plugins: [
    "gatsby-plugin-image", 
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp", 
    "gatsby-plugin-styled-components", 
    "gatsby-plugin-sitemap",
    "gatsby-plugin-google-gtag", 
  {
    resolve: 'gatsby-source-sanity',
    options: {
      "projectId": "84qa0kd3",
      "dataset": "production"
    }
  },
  {
    resolve: 'gatsby-plugin-sanity-image',
    options: {
      projectId: process.env.SANITY_PROJECT_ID,
      dataset: process.env.SANITY_DATASET,
    },
  },
]
};