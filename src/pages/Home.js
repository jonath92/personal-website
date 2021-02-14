import React from 'react'
import Navbar from '../components/Navbar'

import ProjectGrid from '../components/ProjectGrid'
import Footer from '../components/Footer'
import Cover from '../components/Cover'

import styled from 'styled-components'

const H3 = styled.h3`
    text-align: center; 
    margin: ${props => props.marginY} 0
`

export default function Home() {
    return (
        <>
            <Navbar />
            <Cover />

            <section id="projects" style={{ scrollMarginTop: "57px" }}>
                <H3 marginY="20px">Projects</H3>
                <ProjectGrid width="90%" />
            </section>

            <Footer marginTop="40px" />

        </>
    )
}
