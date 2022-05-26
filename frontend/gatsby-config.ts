import type {
  GatsbyConfig
} from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `sudhirattri.com`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          includePaths: ["src/sass"],
        }
      },
    },
    `gatsby-plugin-react-helmet`
  ]
};

export default config;