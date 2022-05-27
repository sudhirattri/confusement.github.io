import React, { ReactNode, useEffect, useState } from "react"
import { withPrefix } from "gatsby";
import Helmet from "react-helmet";
// import "../sass/site.scss"
import { CloudyNightOutline, SunnyOutline, MenuOutline } from 'react-ionicons'
import DarkModeToggle from "react-dark-mode-toggle";

const IndexPage = () => {
  const [theme, setTheme] = useState("dark");

  const scrollHandler = () => {
    console.log(window.scrollY)
    // if (window.scrollY >= 66) {
    //   setNavbar(true)
    // } else {
    //   setNavbar(false)
    // }
  }
  useEffect(() => {
    if (typeof window !== 'undefined') {
      let toggle: HTMLElement = document.getElementById("theme-toggle")!;
      let storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      if (storedTheme)
        document.documentElement.setAttribute('data-theme', storedTheme)
      setTheme(storedTheme);
      window.addEventListener("scroll", scrollHandler)
    }
    // switchTheme(undefined)
  }, []);
  function switchTheme(event: any) {
    if (typeof window !== 'undefined') {
      let currentTheme = document.documentElement.getAttribute("data-theme");
      let targetTheme = "light";

      if (currentTheme === "light") {
        targetTheme = "dark";
      }
      setTheme(targetTheme);
      document.documentElement.setAttribute('data-theme', targetTheme)
      localStorage.setItem('theme', targetTheme);
    }
  }
  return (
    <React.Fragment>
      <Helmet title="foo bar" defer={false} />
      <main>
        <h2>Hello</h2>
      </main>
    </React.Fragment>
  )
}

export default IndexPage
