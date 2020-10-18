module.exports = {
  siteMetadata: {
    title: `Choi Teemo's Devlog | 최범수`,
    description: `Frontend Developer Choi Teemo(@choibumsu) Devlog. JavaScript, TypeScript, SCSS, React, Vue.js, GraphQl, Prisma and All of Development | 최범수`,
    author: `@choibumsu`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/static/images`,
      },
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `choi-teemo-devlog | 최범수`,
        short_name: `devlog`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/static/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
