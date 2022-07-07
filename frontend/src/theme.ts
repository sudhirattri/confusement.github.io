import { extendTheme, ChakraProvider, Text, SimpleGrid } from "@chakra-ui/react"
const theme = extendTheme({
  initialColorMode: 'light',
  useSystemColorMode: false,
  fonts: {
    body: "Fira Sans",
    heading: "Fira Sans",
    mono: "Fira Mono",
  },
  colors: {
    body: "rgba(0.5,0.5,0.5,0.5)"
  }

})

export default theme