/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env`,
});
const path = require(`path`);

module.exports = {
  /* Your site config here */
  siteMetadata: {
    siteUrl: `https://klimatklockan.se`,
    title: `Klimatklockan`,
    description: `Klockan tickar… Det är ett akut läge och Sverige behöver göra betydligt mer för att uppnå vår del av parisavtalet. Så går Sveriges kamp mot klimatkrisen.`,
    author: `Greencastle`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Klimatklockan",
        start_url: "/",
        background_color: "#6b37bf",
        display: "standalone",
        icon: "static/klimatklockan.svg",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GATSBY_GA_TRACKING_ID,
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
  pathPrefix: "/carbon-budget-countdown",
};
