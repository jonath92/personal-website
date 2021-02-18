import React from 'react'
import styled from 'styled-components'
import joplinIcon from '../images/Joplin-icon.svg'
import ListGroup from 'react-bootstrap/ListGroup'

const OuterContainer = styled.div` 
    width: 90%
`


export default function Joplin() {
    return (
        <OuterContainer>
            <h1>Joplin</h1>

            <div>
                <div style={{ float: "left" }}>
                    <img style={{ width: "100px", margin: "25px 25px 5px 0", maxWidth: "20vw" }} src={joplinIcon}></img>
                </div>
                <h4 className="mt-3 mb-1" style={{ hyphens: "auto" }}>First contributions to a Project with more than 100K Downloads</h4>
                <div className="mb-3"><a href="https://github.com/laurent22/joplin/pulls?q=is:merged+is:pr+author:jonath92">View my Contributions at Github</a> <br /> <a href="wwww.google.de">View in Cinnamon Store</a></div>
                <div style={{ textAlign: "justify", hyphens: "auto" }}>

                    With 21k stars at Github and more than 100k Downloads in the Google Play Store, I assume Joplin is the most used open source note taking app at all. Initially I started using Joplin because it was and I think still is the only note taking app with native support for all major operating systems (Linux based systems, macOS, Windows, Android, iOS) and synchronisation capability. Another unique feature of Joplin is that the users aren't tied to any particual service for synchronisation but can choose between a wide range of providers. Currently Joplin supports inter alia OneDrive, Nextcloud and Dropbox.
                </div>
            </div>

            <div style={{ textAlign: "justify", hyphens: "auto" }}>

                <div className="my-4">
                    <ListGroup horizontal className="mb-1">
                        <ListGroup.Item>JS</ListGroup.Item>
                        <ListGroup.Item>GIT</ListGroup.Item>
                        <ListGroup.Item>REST</ListGroup.Item>
                        <ListGroup.Item>Bash</ListGroup.Item>
                    </ListGroup>
                    <figcaption className="figure-caption">Used Technics</figcaption>
                </div>


                    When I first used Joplin a major drawback however was that it was not possible to synchronize attachments (e.g. photos) larger than 4 MB with OneDrive. As I already had some experience with <a href="https://en.wikipedia.org/wiki/Representational_state_transfer">REST</a> at that time, I assumed that fixing that issue on the one hand wouldn't be to difficult for me and on the other hand was a great opportunity to improve my JavaScript skills by reading well written code and getting feedback from a senior developer.


                <blockquote className="blockquote my-4">
                    <p className="mb-0">That looks good, many thanks for this pull request</p>
                    <footer className="blockquote-footer">Laurent Cozic, Maintainer of Joplin in response to my <a href="https://github.com/laurent22/joplin/pull/3195#issuecomment-638197627">first pull request</a></footer>
                </blockquote>

            </div>

            <div>

                <div style={{ textAlign: "justify", hyphens: "auto" }}>

                    Joplin is using Electron for the Desktop Applications and React Native for the Mobile Apps. Furthermore Joplin also has a Terminal Application which is based on plain Node.js. All Clients are using a shared library for the synchronisation which has the obvious benefit that code only needs to be written once but it has the minor disadvantage that it is a little challenging to ensure that the code is working in all environments. I didn't need to learn React Native in depth for my code contribution but I had to build the mobile app from source to test my code. After my first contribution, I also added support for OneDrive for Business and made some minor improvements to the Linux Bash Install Script.
                </div>


            </div>




            {/* 
            <ListGroup className="bg-light">
                <ListGroup.Item className="bg-light">JavaScript</ListGroup.Item>
                <ListGroup.Item className="bg-light">Node.js</ListGroup.Item>
                <ListGroup.Item className="bg-light">GIT</ListGroup.Item>
                <ListGroup.Item className="bg-light">REST</ListGroup.Item>
            </ListGroup> */}


            {/* <div style={{ display: "flex", flexDirection: "column", border: "1px solid #a2a9b1", padding: "10px" }} className="bg-light">




            </div> */}
        </OuterContainer >
    )
}
