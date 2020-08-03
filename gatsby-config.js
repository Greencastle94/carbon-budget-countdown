/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Ont om tid`,
    description: `Klockan tickar på och vi behöver göra mer ifall vi ska uppnå vår del av parisavtalet.`,
    author: `Greencastle`,
  },
  plugins: [`gatsby-plugin-react-helmet`, `gatsby-plugin-emotion`],
  pathPrefix: "/carbon-budget-countdown",
};
