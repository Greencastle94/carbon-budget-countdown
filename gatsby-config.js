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
    description: `Klockan tickar… Det är ett akut läge och Sverige behöver göra betydligt mer för att uppnå vår del av parisavtalet. Så går Sveriges kamp mot klimatkrisen.`,
    author: `Greencastle`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "G-PZ2G6LG6XF",
        head: true,
        anonymize: true,
        respectDNT: true,
      },
    },
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
  // pathPrefix: "/carbon-budget-countdown",
};
