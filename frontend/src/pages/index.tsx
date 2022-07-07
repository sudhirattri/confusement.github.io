import React, { useEffect, useState } from "react"
import Helmet from "react-helmet"

import Navbar from "../components/nav"
import { str1, str2 } from "../constants/txt";
import { ChakraProvider, Text, Heading, Box, Flex, Center, Divider, Link, useColorModeValue, chakra } from "@chakra-ui/react"

import theme from "../theme"
import Home from "../components/home";
import { useStaticQuery, graphql } from 'gatsby'

import ShadertoyReact from 'shadertoy-react';
// import { Spring, animated } from 'react-spring'
// import { useVisibilityHook, LazyLoad } from 'react-observer-api';

interface SwitchThemeProp {
  changeTheme: (arg0: string) => any
}

const IndexPage = () => {
  const [scheme, setScheme] = useState("dark")
  function changeTheme(scheme: string) {
    setScheme(scheme)
  }
  const scrollHandler = () => {
    console.log(window.scrollY)
    // if (window.scrollY >= 66) {
    //   setNavbar(true)
    // } else {
    //   setNavbar(false)
    // }
  }
  // useEffect(() => {
  // if (typeof window !== 'undefined') {
  //   let toggle: HTMLElement = document.getElementById("theme-toggle")!;
  //   let storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  //   if (storedTheme)
  //     document.documentElement.setAttribute('data-theme', storedTheme)
  //   setTheme(storedTheme);
  //   window.addEventListener("scroll", scrollHandler)
  // }
  // switchTheme(undefined)
  // }, []);
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
  // const { setElement, isVisible } = useVisibilityHook();
  // useEffect(() => {
  //   if (isVisible) {
  //     console.log("yes is visible")
  //   }
  // }, [isVisible])

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <ChakraProvider theme={theme}>
      <React.Fragment>
        <Helmet title={data.site.siteMetadata.title} defer={false} />
        <Navbar />
        <Home />
      </React.Fragment>
    </ChakraProvider >
  )
}

export default IndexPage
