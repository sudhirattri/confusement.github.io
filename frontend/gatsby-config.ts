import type {
  GatsbyConfig
} from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `sudhirattri.com`,
    siteUrl: `https://sudhirattri.com`
  },
  pathPrefix: "/",
  plugins: [{
    resolve: `gatsby-plugin-sass`,
    options: {
      sassOptions: {
        includePaths: ["src/sass"],
      }
    },
  },
    `gatsby-plugin-react-helmet`,
  {
    resolve: '@chakra-ui/gatsby-plugin',
    options: {
      /**
       * @property {boolean} [resetCSS=true]
       * if false, this plugin will not use `<CSSReset />
       */
      resetCSS: true,
      /**
       * @property {boolean} [isUsingColorMode=true]
       * if false, this plugin will not use <ColorModeProvider />
       */
      isUsingColorMode: true,
    },
  },
  ]
};

export default config;