module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'Contentful Test',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: 'FWoCvvPfUDYsIag5eBk-AeLdYuf-Pme-yUfV-vx9P50',
        spaceId: 'vuxecyldom66',
      },
    },
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
  ],
}
