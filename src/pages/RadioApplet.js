import React from 'react'
import PageLayout from '../components/PageLayout'
import { RadioComponent } from '../components/RadioComponent'
import styled from 'styled-components/macro'

const A = styled.a.attrs(({
    className: "text-body"
}))` 
`


export default function RadioApplet() {
    return (
        <PageLayout>
            <RadioComponent>
                <header>
                    <h1>Linux Mint Radio Applet</h1>
                    <h4>
                        My <A href="https://www.wordnik.com/words/pet%20project">
                            Pet Project
                        </A>
                    </h4>
                </header>

                <RadioComponent.Carousel />
                hi
            </RadioComponent>
        </PageLayout>
    )
}
