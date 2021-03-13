// own features
import { ProjectReport } from './ProjectReport'
import { joplinIcon } from 'assets/images/external/index'

const Joplin = () => {

    function renderHeader() {
        return (
            <ProjectReport.Header>
                <ProjectReport.Title>
                    Joplin
                </ProjectReport.Title>
                <ProjectReport.SubTitle>
                    First contributions to a Project with more than 100K Downloads
                </ProjectReport.SubTitle>
                <ProjectReport.LinksGroup>
                    <a
                        href="https://github.com/laurent22/joplin/pulls?q=is:merged+is:pr+author:jonath92"
                    >
                        View my Contributions at Github
                        </a>
                </ProjectReport.LinksGroup>
                <ProjectReport.HeaderImg src={joplinIcon} />

            </ProjectReport.Header>
        )
    }

    function renderFirstParagraph() {
        return (
            <ProjectReport.P>
                With 21k stars at Github and more than 100k Downloads in the Google Play Store, I assume Joplin is the most used open source note taking app at all. Initially I started using Joplin because it was and I think still is the only note taking app with native support for all major operating systems (Linux based systems, macOS, Windows, Android, iOS) and synchronisation capability. Another unique feature of Joplin is that the users aren't tied to any particual service for synchronisation but can choose between a wide range of providers. Currently Joplin supports inter alia OneDrive, Nextcloud and Dropbox.
            </ProjectReport.P>
        )
    }

    function renderSecondParagraph() {
        return (
            <ProjectReport.P>
                When I first used Joplin a major drawback however was that it was not possible to synchronize attachments (e.g. photos) larger than 4 MB with OneDrive. As I already had some experience with <a href="https://en.wikipedia.org/wiki/Representational_state_transfer">REST</a> at that time, I assumed that fixing that issue on the one hand wouldn't be to difficult for me and on the other hand was a great opportunity to improve my JavaScript skills by reading well written code and getting feedback from a senior developer.
            </ProjectReport.P>
        )
    }

    function renderTechnisGroup() {
        return (
            <ProjectReport.TechnicsGroup
                technics={["JS", "GIT", "REST", "Bash"]}
            />
        )
    }

    function renderQuote() {
        return (
            <ProjectReport.Quote
                cite="That looks good, many thanks for this pull request"
                citeReference={
                    <span>Laurent Cozic, Maintainer of Joplin in response to my <a href="https://github.com/laurent22/joplin/pull/3195#issuecomment-638197627">first pull request</a></span>
                }
            />
        )
    }

    function renderThirdParagraph() {
        return (
            <ProjectReport.P>
                Joplin is using Electron for the Desktop Applications and React Native for the Mobile Apps. Furthermore Joplin also has a Terminal Application which is based on plain Node.js. All Clients are using a shared library for the synchronisation which has the obvious benefit that code only needs to be written once but it has the minor disadvantage that it is a little challenging to ensure that the code is working in all environments. I didn't need to learn React Native in depth for my code contribution but I had to build the mobile app from source to test my code. After my first contribution, I also added support for OneDrive for Business and made some minor improvements to the Linux Bash Install Script.
            </ProjectReport.P>
        )
    }


    return (
        <ProjectReport>
            {renderHeader()}
            {renderFirstParagraph()}
            {renderTechnisGroup()}
            {renderSecondParagraph()}
            {renderQuote()}
            {renderThirdParagraph()}
        </ProjectReport>

    )
}

export { Joplin }