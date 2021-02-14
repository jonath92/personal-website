import React from 'react'
import Navbar from '../components/Navbar'

import ProjectGrid from '../components/ProjectGrid'
import Footer from '../components/Footer'
import Cover from '../components/Cover'


export default function Home() {
    return (
        <>
            <Navbar />
            <Cover />

            <section id="projects" style={{ scrollMarginTop: "57px" }}>
                <h3 style={{ textAlign: "center", margin: "20px 0" }}>
                    Projects
                </h3>

                <div style={{ display: "flex", justifyContent: "space-around" }}>
                    <div style={{ width: "90%" }}>
                        <ProjectGrid />
                    </div>
                </div>
            </section>

            <Footer marginTop="40px" />


        </>
    )
}
