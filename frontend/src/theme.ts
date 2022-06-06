import { extendTheme, ChakraProvider, Text, SimpleGrid } from "@chakra-ui/react"
const theme = extendTheme({
  initialColorMode: 'light',
  useSystemColorMode: false,
  fonts: {
    body: "Fira Sans",
    heading: "Fira Sans",
    mono: "Fira Mono",
  },
})

export default theme