import React, { useEffect } from 'react'
import PageLayout from '../components/PageLayout'
import { RadioComponent } from '../components/RadioComponent'
import styled from 'styled-components/macro'
import { importAllImgFromDirWithoutKey } from '../utils'


const imgContext = require.context('../images/screenshots/radio', false, /\.(png|jpe?g|svg)$/)


const screenshots = importAllImgFromDirWithoutKey(imgContext)

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
                <RadioComponent.Links className="mb-3">
                    <a href="https://github.com/linuxmint/cinnamon-spices-applets/tree/master/radio@driglu4it">
                        View at Github
                    </a>
                    <a href="https://cinnamon-spices.linuxmint.com/applets/view/297">
                        View in Cinnamon Store
                    </a>
                </RadioComponent.Links>

                <RadioComponent.Carousel {...{ screenshots }} />



                <span>
                    I like listening to the radio as it allows you to discover new music and catching up with the latest news. While plenty of radio applications exist, I was never able to find an application which fully could meet my requirements. As a regulary radio listener, I want to start or change a radio channel with as few clicks as possible. As far as I can see this requirement is best met with applications with a tray icon and a corresponding left-click menu. In Linux Mint (and other Linux Distributions which use Cinnamon as Desktop Environment) these type of Software can easily be installed by so called Applets.
                </span>

                <RadioComponent.Technics className="my-4" technics={["JS", "D-BUS"]} />

                <span>
                    When I started using the Linux Mint Radio Applet, it was very close to my ideal. However I found it  annoying that it was not possible to obtain the current playing song title. As a Linux Mint user you usually can see the title of the current playing media on the panel (i.e. taskbar) with the sound applet or with the Android Application kdeconnect but unfortunately this didn't work for the radio Applet. Out of curiosity, I made some reasearch why this was the case. I than found out that the reason for that was that the radio Applet used a Media Player under the hood which hasn't implemented the <i>Media Player Remote Interface Specification</i> (MPRIS). After I found the root of the problem, I also wanted to fix the problem.
                </span>

                <RadioComponent.Quote
                    cite="Love it, thanks!!"
                    citeReference={<span>mockturl, happy user in <a href="https://cinnamon-spices.linuxmint.com/applets/view/297">
                        Cinnamon Store
                    </a></span>}
                />

                Using a player with MPRIS Support opens numerous opportunities to further extend the application. Thanks to the  <a href="https://gi.readthedocs.io/en/latest/goals.html">GObject introspection project</a> it is relatively easy to change the playback status, the volume and the position and also getting informed when it has been changed remotely. Therefore I made already some furthe additions such as adding a play/pause icon in front of the channel to indicate if a channel is playing or paused and an option to copy the title of the current song to the clipboard. After some contribution the founder of the Applet has asked me to replace him as maintainer as he wants to focus on other projects.

                <br /> <br />
                In the future I want to improve the GUI and add an option to search radio stations directly from the interface instead of adding the URL manually.
            </RadioComponent>
        </PageLayout>
    )
}
