require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Gatsby Tasker`,
    siteUrl: `https://www.ibm.com`
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
        // name: `gatsby-starter-default`,
        // short_name: `starter`,
        // start_url: `/`,
        // background_color: `#663399`,
        // theme_color: `#663399`,
        // display: `minimal-ui`,
        // icon: `src/images/favicon.ico`, // This path is relative to the root of the site.
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }
  ],
  // pathPrefix: `/security`,
};
