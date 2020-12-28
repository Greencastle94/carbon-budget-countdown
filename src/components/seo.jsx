import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function SEO({ author, description, lang, meta, titleProp }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
            title
            description
            author
            image
          }
        }
      }
    `
  );

  const title = titleProp || site.siteMetadata.title;
  const metaDescription = description || site.siteMetadata.description;
  const metaAuthor = author || site.siteMetadata.author;
  const imagePath = site.siteMetadata.image;
  const siteUrl = site.siteMetadata.siteUrl;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `author`,
          content: metaAuthor,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: siteUrl,
        },
        {
          property: `og:image`,
          content: imagePath,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: `sv`,
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
};

export default SEO;
