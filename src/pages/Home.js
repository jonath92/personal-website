import React from 'react'

import ProjectGrid from '../components/ProjectGrid'
import Cover from '../components/Cover'

import styled from 'styled-components'
import PageLayout from '../components/PageLayout'


const H2 = styled.h2.attrs(({
    className: "my-4 text-center"
}))` 
`

export default function Home() {
    return (
        <PageLayout landingPage>
            <Cover />

            <section id="projects" >
                <H2>
                    Projects
                </H2>
                <ProjectGrid width="90%" />
            </section>
        </PageLayout>
    )
}
