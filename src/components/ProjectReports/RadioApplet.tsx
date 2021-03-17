// own features
import { ProjectReport } from './ProjectReport'
import * as screenshotsModules from 'assets/images/screenshots/radio/index'

const RadioApplet = () => {

    // TODO move this somehow directly to projectreport
    const screenshots = Object.entries(screenshotsModules).map(screenshotsModul => {
        return screenshotsModul[1]
    })


    function renderHeader() {
        return (
            <ProjectReport.Header>
                <ProjectReport.Title>
                    Linux Mint Radio Applet
            </ProjectReport.Title>
                <ProjectReport.SubTitle>
                    My <a href="https://www.wordnik.com/words/pet%20project">
                        Pet Project
                </a>
                </ProjectReport.SubTitle>
                <ProjectReport.LinksGroup>
                    <a
                        href="https://github.com/linuxmint/cinnamon-spices-applets/tree/master/radio@driglu4it"
                    >
                        View at Github
                </a>
                    <a
                        href="https://cinnamon-spices.linuxmint.com/applets/view/297"
                    >
                        View in Cinnamon Store
                </a>
                </ProjectReport.LinksGroup>
            </ProjectReport.Header>
        )
    }

    function render1stParagraph() {
        return (
            <ProjectReport.P>
                I like listening to the radio as it allows you to discover new music and catching up with the latest news. While plenty of radio applications exist, I was never able to find an application which fully could meet my requirements. As a regulary radio listener, I want to start or change a radio channel with as few clicks as possible. As far as I can see this requirement is best met with applications with a tray icon and a corresponding left-click menu. In Linux Mint (and other Linux Distributions which use Cinnamon as Desktop Environment) these type of Software can easily be installed by so called Applets.
            </ProjectReport.P>
        )
    }

    function render2ndParagraph() {
        return (
            <ProjectReport.P>
                When I started using the Linux Mint Radio Applet, it was very close to my ideal. However I found it  annoying that it was not possible to obtain the current playing song title. As a Linux Mint user you usually can see the title of the current playing media on the panel (i.e. taskbar) with the sound applet or on your Smartphone with the App kdeconnect but unfortunately this didn't work for the radio Applet. Out of curiosity, I made some reasearch why this was the case. I than found out that the reason for that was that the radio Applet used a Media Player under the hood which hasn't implemented the <i>Media Player Remote Interface Specification</i> (MPRIS). After I found the root of the problem, I also wanted to fix the problem.
            </ProjectReport.P>
        )
    }


    function renderCarousel() {
        return (
            <ProjectReport.Carousel {...{ screenshots }} />

        )
    }

    function renderQuote() {
        return (
            <ProjectReport.Quote
                cite="Love it, thanks!!"
                citeReference={<span>mockturl, happy user in <a href="https://cinnamon-spices.linuxmint.com/applets/view/297">
                    Cinnamon Store
            </a></span>}
            />
        )
    }

    function renderTechnicsGroup() {
        return (
            <ProjectReport.TechnicsGroup technics={["JS", "GIT", "D-BUS"]} />

        )
    }

    function render3thParagrah() {
        return (
            <ProjectReport.P>
                Using a player with MPRIS Support opens numerous opportunities to further extend the application. Thanks to <a href="https://en.wikipedia.org/wiki/D-Bus">D-Bus</a> and the <a href="https://gi.readthedocs.io/en/latest/goals.html">GObject introspection project</a> it is relatively easy to change the playback status, the volume and the position and also getting informed when it has been changed remotely. Therefore I made already some furthe additions such as adding a play/pause icon in front of the channel to indicate if a channel is playing or paused and an option to copy the title of the current song to the clipboard. After some contribution the founder of the Applet has asked me to replace him as maintainer as he wants to focus on other projects.
            </ProjectReport.P>
        )
    }

    function render4thParagraph() {
        return (
            <ProjectReport.P>
                In the future I want to improve the GUI and add an option to search radio stations directly from the interface instead of adding the URL manually.
            </ProjectReport.P>

        )
    }

    return (
        <ProjectReport>
            {renderHeader()}
            {renderCarousel()}
            {render1stParagraph()}
            {renderTechnicsGroup()}
            {render2ndParagraph()}
            {renderQuote()}
            {render3thParagrah()}
            {render4thParagraph()}
        </ProjectReport>
    )

}

export { RadioApplet }