import React from 'react'
import Navbar from '../components/Navbar'

import background from '../images/pexels-lukas-574069.jpg'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'

import ProjectGrid from '../components/ProjectGrid'


export default function Home() {
    return (
        <>
            <Navbar />
            <img id="landing" src={background} className="header-image" />

            <div className="header-image-overlay">

                <div className="header-image-textbox">
                    <h2>Hello, I’m Jonathan Heard. </h2>
                    <h3>I want to make things that make a difference</h3>
                </div>
            </div>


            <section id="projects" style={{ scrollMarginTop: "57px" }}>
                <h3 className="pt-3" style={{ textAlign: "center" }}>Projects</h3>

                <div style={{ display: "flex", justifyContent: "space-around" }}>
                    <ProjectGrid />
                </div>

            </section>

            <section style={{ height: "150px", background: "#e9eced" }}>

                <div style={{ display: "flex", justifyContent: "center", padding: "25px 0" }}>

                    <a href="https://www.linkedin.com/in/heardjonathan">
                        <FontAwesomeIcon
                            size='3x'
                            style={{ marginRight: "35px", cursor: "pointer", color: "black" }}
                            icon={faLinkedinIn} />
                    </a>

                    <a href="https://github.com/jonath92">

                        <FontAwesomeIcon
                            size='3x'
                            style={{ cursor: "pointer", color: "black" }}
                            icon={faGithub} />
                    </a>

                </div>

                <p style={{ textAlign: "center" }}>
                    &copy; Jonathan Heard &nbsp;  | &nbsp; Imprint &nbsp;  | &nbsp; Image and Media Copyrights
      </p>

            </section>


        </>
    )
}
