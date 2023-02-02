/**
 * @type {import('gatsby').GatsbyConfig}
 */
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
]
};