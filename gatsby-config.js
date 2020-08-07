/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require(`path`);

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Klimatklockan`,
    description: `Klockan tickar på och vi behöver göra mer ifall vi ska uppnå vår del av parisavtalet.`,
    author: `Greencastle`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `images`),
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
  pathPrefix: "/carbon-budget-countdown",
};
