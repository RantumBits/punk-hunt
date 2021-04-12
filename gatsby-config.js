module.exports = {
  siteMetadata: {
    title: 'PunkHunt | Find them All',
    author: '@RantumBits',
    description: 'Complete all the PunkHunt challenges during the Miami billboard takeover',
    image: 'src/images/punkhunt_billboard.png',
    siteUrl: 'https://PunkHunt.com'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'PunkHunt | Find them all',
        short_name: 'punkhunt',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#ff04b4',
        display: 'minimal-ui',
        icon: 'src/images/rocket.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "G-CGLW2QJBKX",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        //optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        //experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        //variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "PunkHunt.com",
      },
    },
  ],
}
