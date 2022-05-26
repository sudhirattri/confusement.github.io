import React, {useEffect} from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name='viewport' content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Sudhir Attri" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sudhirattri.com"/>
        <meta property="og:image" content="https://bevyengine.org/assets/bevy_logo_fill.png" />
        <meta property="og:description" content="Description for this website todo priority" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/> */}

        <link rel="stylesheet" href="https://unpkg.com/@picocss/pico@latest/css/pico.min.css"></link>
        {/* <link rel="stylesheet" href="./site.css"/> */}
        <link rel="icon" type="image/svg+xml" href="/assets/favicon.svg"></link>
        {props.headComponents}
        <script src="script.js"></script>
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
