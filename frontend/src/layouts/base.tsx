import React, { ReactNode, useEffect, useState } from "react"
import { withPrefix } from "gatsby";
import Helmet from "react-helmet";
import "../sass/site.scss"
import { CloudyNightOutline, SunnyOutline } from 'react-ionicons'
import DarkModeToggle from "react-dark-mode-toggle";

export default function BaseLayout({ children, props }: { children: any, props: any }) {
    const [theme, setTheme] = useState("dark");
    useEffect(() => {
        if (typeof window !== 'undefined') {
            let toggle: HTMLElement = document.getElementById("theme-toggle")!;
            let storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
            if (storedTheme)
                document.documentElement.setAttribute('data-theme', storedTheme)
            setTheme(storedTheme);
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
            <nav>
                <ul>
                    <li><a href="#" className="goto">Sudhir Attri</a></li>
                </ul>
                <ul>
                    <li><a href="#" className="goto">Blog</a></li>
                    <li><a href="#" className="goto goto-active">Showcase</a></li>
                    <li><a href="#" className="goto">Links</a></li>
                    <li><a href="#" className="goto">Resume</a></li>
                </ul>
                <ul>
                    {/* <li><a href="#" className="secondary">Resume</a></li> */}
                    <label htmlFor="switch" style={{ fontSize: "0.9rem" }}>
                        {theme == 'dark' ? <SunnyOutline cssClasses={"ionic-icon"} color={'#00000'}></SunnyOutline> : <CloudyNightOutline cssClasses={"ionic-icon"} color={'#00000'}></CloudyNightOutline>}
                        <input checked={theme == "dark" ? (true) : (false)} onClick={switchTheme} type="checkbox" id="switch" name="switch" role="switch" />
                    </label>
                    {/* <label id="switch" className="switch">
                    <input type="checkbox" onClick={switchTheme} id="slider"/>
                    <span className="slider round"></span>
                </label> */}
                    {/* <DarkModeToggle
                    onChange={switchTheme}
                    size={60}
                /> */}
                </ul>
            </nav>
            <section className="section">
                <div className="container">
                    {children}
                </div>
            </section>
            {/* <Helmet>
            <script src={"Script.js"} />    
            </Helmet> */}
        </React.Fragment>
    )
}