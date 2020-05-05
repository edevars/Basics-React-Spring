module.exports = {
  siteMetadata: {
    title: `React Spring Basics`,
    description: `A variety of basic animations to have fun with React`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Basics React Spring`,
        short_name: `Basics RS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#b100c8`,
        display: `standalone`,
        icon: `src/images/icon.png`
      },
    },
  ],
};
