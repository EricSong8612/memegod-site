module.exports = {
  siteMetadata: {
    title: `Memes Against Friends Site`,
  },
  plugins: [
      `gatsby-plugin-react-helmet`, {
          resolve: `gatsby-plugin-google-analytics`,
          options: {
              trackingId: `UA-106565256-1`
          }
      }
  ]
}
