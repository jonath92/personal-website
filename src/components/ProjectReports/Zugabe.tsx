// own features
import { ProjectReport } from './ProjectReport'
import * as screenshotsModules from 'assets/images/screenshots/zugabe/index'


const Zugabe = () => {


    // TODO move this somehow directly to projectreport
    const screenshots = Object.entries(screenshotsModules).map(screenshotsModul => {
        return screenshotsModul[1]
    })

    function renderHeader() {

        return (
            <ProjectReport.Header>
                <ProjectReport.Title>
                    Zugabe
                </ProjectReport.Title>
                <ProjectReport.SubTitle>
                    My first contact with Web Development
                </ProjectReport.SubTitle>
                <ProjectReport.LinksGroup>
                    <a
                        href="http://h2927813.stratoserver.net">
                        View in Action
                    </a>
                </ProjectReport.LinksGroup>

            </ProjectReport.Header>
        )


    }

    function renderCarousel() {
        return (
            <ProjectReport.Carousel {...{ screenshots }} />
        )
    }

    function renderFirstParagraph() {
        return (
            <ProjectReport.P>
                Zugabe is a  web application for stormwater management. Sustainable stormwater controls such as trenches, swales and ponds are nowadays not only used to reduce the risk of flodding but also for improving climate protection, increasing biodiversity and many other aspects. Zugabe helps local politicans to find potential locations without neglecting important aspects or potential locations. The application consists of a login and a main page which is simmilar to google maps filled out with an interactive card. The application is supplemented by multiple minimizable windows which lay above the interactive card. The key feature of the application is a dialog consisting of multiple sliders allowing the user to specify the importance of different aspects and a button which allows to calculate the spatial distribution of the overall benefit for the given values.

            </ProjectReport.P>
        )
    }

    function renderSecondParagraph() {
        return (
            <ProjectReport.P>
                In the past a weakness of Zugabe was the missing oportunity to mark locations found with the application. Instead users were forced to collect and transmit the information with screenshots, emails or other uncomfortable techniques which leads to a loss of time and increased the probality of information loss. Therefore I implemented a feature to draw polygons on the interactive card and added a dialog to add a name and a comment to the the drawn polygon. A problem for me when starting adding the feature was that it was difficult to manage different versions as the Application is composed by multiple services (Database, Mapservice, jetty webserver) which were not proberly packaged. I therefore also migrated the codebasis to Docker.
            </ProjectReport.P>
        )
    }

    function renderThirdParagraph() {
        return (
            <ProjectReport.P>
                The spatial data is saved in a PostGIS database which is an extension for PostgreSQL. For the Frontend it has been used <a href="https://www.con-terra.com/portfolio/con-terra-technologies/mapapps">map.apps</a>, a software development kit which based on the <a href="https://dojotoolkit.org">Dojo Toolkit</a> and the <a href="https://developers.arcgis.com/javascript/latest/">ArcGIS API for JavaScript</a>.
            </ProjectReport.P>

        )
    }

    function renderTechnicsGroup() {
        return (
            <ProjectReport.TechnicsGroup technics={["JS", "GIT", "Docker", "Postgresql", "GIS"]}
                breakpoint='md' />
        )
    }


    return (
        <ProjectReport>
            {renderHeader()}
            {renderCarousel()}
            {renderFirstParagraph()}
            {renderTechnicsGroup()}
            {renderSecondParagraph()}
            {renderThirdParagraph()}
        </ProjectReport>

    )
}

export { Zugabe }