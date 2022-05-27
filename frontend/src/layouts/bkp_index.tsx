import React, { ReactNode, useEffect, useState } from "react"
import { withPrefix } from "gatsby";
import Helmet from "react-helmet";
import "../sass/site.scss"
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
      <div className="hero" data-theme="dark">
        <nav className="container-fluid nav-desktop">
          <ul>
            <li><a href="./" className="contrast goto" onClick={(event) => { event.preventDefault() }}><strong>Brand</strong></a></li>
          </ul>
          <ul>
            <li><a href="./" className="contrast goto goto-active" onClick={(event) => { event.preventDefault() }}><strong>Blog</strong></a></li>
            <li><a href="./" className="contrast goto" onClick={(event) => { event.preventDefault() }}><strong>Showcase</strong></a></li>
            <li><a href="./" className="contrast goto" onClick={(event) => { event.preventDefault() }}><strong>Links</strong></a></li>
            <li><a href="./" className="contrast goto" onClick={(event) => { event.preventDefault() }}><strong>About Me</strong></a></li>
          </ul>
          <ul>
            <li>
              <label htmlFor="switch" style={{ fontSize: "0.9rem" }}>
                {theme == 'dark' ? <SunnyOutline cssClasses={"ionic-icon"} color={'#00000'}></SunnyOutline> : <CloudyNightOutline cssClasses={"ionic-icon"} color={'#00000'}></CloudyNightOutline>}
                <input checked={theme == "dark" ? (true) : (false)} onClick={switchTheme} type="checkbox" id="switch" name="switch" role="switch" />
              </label>
            </li>
          </ul>
        </nav>
        <nav className="container-fluid nav-mobile">
          <ul style={{ "width": "100%" }}>
            <li className="mobile-nav-button">
              <details role="list" dir="rtl">
                <summary aria-haspopup="listbox" role="link" className="contrast"><MenuOutline cssClasses={"ionic-icon"} color={'#00000'}></MenuOutline></summary>
                <ul role="listbox">
                  <li><a href="#" data-theme-switcher="auto">Blog</a></li>
                  <li><a href="#" data-theme-switcher="light">Showcase</a></li>
                  <li><a href="#" data-theme-switcher="dark">Links</a></li>
                  <li><a href="#" data-theme-switcher="auto">About Me</a></li>
                </ul>
              </details>
            </li>
          </ul>
        </nav>
        {/* <header className="container">
          <hgroup>
            <h1>Company</h1>
            <h2>A classic company or blog layout with a sidebar</h2>
          </hgroup>
          <p><a href="#" role="button" onClick={(event) => { event.preventDefault() }}>Call to action</a></p>
        </header> */}
      </div>
      <main className="container">
        <div className="grid">
          <section>
            <h4>Section group</h4>
          </section>
          <aside>
            <h4>Aside group</h4>
          </aside>
        </div>
      </main>
    </React.Fragment>
  )
}

export default IndexPage
