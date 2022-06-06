import React, { useEffect } from "react"
import Helmet from "react-helmet"

import Navbar from "../components/nav"
import { str1, str2 } from "../constants/txt";
import { ChakraProvider, Text, SimpleGrid, Box } from "@chakra-ui/react"

import theme from "../theme"


const IndexPage = () => {

  const scrollHandler = () => {
    console.log(window.scrollY)
    // if (window.scrollY >= 66) {
    //   setNavbar(true)
    // } else {
    //   setNavbar(false)
    // }
  }
  useEffect(() => {
    // if (typeof window !== 'undefined') {
    //   let toggle: HTMLElement = document.getElementById("theme-toggle")!;
    //   let storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    //   if (storedTheme)
    //     document.documentElement.setAttribute('data-theme', storedTheme)
    //   setTheme(storedTheme);
    //   window.addEventListener("scroll", scrollHandler)
    // }
    // switchTheme(undefined)
  }, []);
  function switchTheme(event: any) {
    // if (typeof window !== 'undefined') {
    //   let currentTheme = document.documentElement.getAttribute("data-theme");
    //   let targetTheme = "light";

    //   if (currentTheme === "light") {
    //     targetTheme = "dark";
    //   }
    //   setTheme(targetTheme);
    //   document.documentElement.setAttribute('data-theme', targetTheme)
    //   localStorage.setItem('theme', targetTheme);
    // }
  }
  return (
    <ChakraProvider theme={theme}>
      <React.Fragment>
        <Helmet title="foo bar" defer={false} />
        <Navbar />
        <Box as='main' className='main-content' pt={{ base: '75', md: '75' }} w='full' maxW='8xl' mx='auto'>
          <Box display={{ md: 'flex' }}>
            <Box flex='1' minW='0' px={5}>
              <Text>Sidebar {str1}</Text>
            </Box>
            <Box flex='3' minW='0'>
              <Box id='content' px={5} mx='auto' minH='76vh'>
                <Text>Main Content {str1}</Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </React.Fragment>
    </ChakraProvider >
  )
}

export default IndexPage
