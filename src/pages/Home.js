import React from 'react'
import Navbar from '../components/Navbar'

import background from '../images/pexels-lukas-574069.jpg'
import radio from '../images/radioapplet-symbolic.svg'
import joplin from '../images/Joplin-icon.svg'
import zugabe from '../images/zugabe.svg'
import eisenhower from '../images/calendar-check-solid.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'

import { Card } from 'react-bootstrap'


export default function Home() {
    return (
        <>
            <Navbar />
            <img src={background} className="header-image" />

            <div className="header-image-overlay">

                <div className="header-image-textbox">
                    <h2>Hello, I’m Jonathan Heard. </h2>
                    <h3>I want to make things that make a difference</h3>
                </div>
            </div>


        <section id="projects" style={{ scrollMarginTop: "57px" }}>
        <h3 className="pt-3" style={{ textAlign: "center" }}>Projects</h3>

        <div style={{display:"flex", justifyContent: "space-around"}}>


        <div className="grid">

          <Card style={{ margin: "1em", padding: "1em" }}>
            <div style={{ width: "100%", textAlign: "center" }}>
              <Card.Img variant="top" src={radio} style={{ width: "40%" }} />
            </div>

            <Card.Body>
              <Card.Title>Linux Mint Radio Applet</Card.Title>
              <Card.Text>
                Linux Mint is one of the most popular Linux distributions. A key feature of the distribution is the large number of easy installable extensions such as the Radio Applet.
                <br /> <br />
                I have made multiple contributions to the Applet and currently being the official maintainer of the extension.

              </Card.Text>
              <Card.Link href="https://cinnamon-spices.linuxmint.com/applets/view/297">View in Cinnamon Store</Card.Link><br />

              {/* TODO: view Source Code, technical details */}
              {/* <Card.Link href="https://cinnamon-spices.linuxmint.com/applets/view/297">View in Cinnamon Store</Card.Link> */}
            </Card.Body>
          </Card>


          <Card style={{ margin: "1em", padding: "1em" }}>
            <div style={{ width: "100%", textAlign: "center" }}>
              <Card.Img variant="top" src={joplin} style={{ width: "40%" }} />
            </div>

            <Card.Body>
              <Card.Title>Joplin</Card.Title>
              <Card.Text>
                Joplin is for several reason an outstanding note-taking app. It is open-source, cross plattform and is probably the best note-taking app for developers as the notes are saved in Markdown format.
                
               {/* probably the best note-taking app for developers as the notes are saved in Markdown format.  */}

                <br /> <br />

                For the synchronisation users can select from a variety of cloud storage providers. However when I started using Joplin I was frustrated that it was not possible to synchronize attachments larger than 4 MB which I therefore fixed. Since then I also made some other contributions to the project. 
                

                <br /> <br />


{/* 
                Another cool feature of Joplin is that 

                When I started using

                Joplin is probably the best cross plattform note taking app on the market.


                Linux Mint is one of the most popular Linux distributions. A key feature of the distribution is the large number of easy installable extensions such as the Radio Applet.
                <br /> <br />

                I have made multiple contributions to the Applet and currently being the official maintainer of the extension. */}

              </Card.Text>
              <Card.Link href="https://cinnamon-spices.linuxmint.com/applets/view/297">View in Cinnamon Store</Card.Link><br />

              {/* TODO: view Source Code, technical details */}
              {/* <Card.Link href="https://cinnamon-spices.linuxmint.com/applets/view/297">View in Cinnamon Store</Card.Link> */}
            </Card.Body>
          </Card>



          <Card style={{ margin: "1em", padding: "1em" }}>
            <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
              <Card.Img variant="top" src={zugabe} style={{ width: "40%" }} />
            </div>

            <Card.Body>
              <Card.Title>Zugabe</Card.Title>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit facere alias, consequuntur laboriosam fugit, dolor quibusdam, cumque repellat commodi dolorem nemo blanditiis molestias exercitationem obcaecati dolores fugiat pariatur vero vel.
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
            </Card.Body>
          </Card>

          <Card style={{ margin: "1em", padding: "1em" }}>
            <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
              <Card.Img variant="top" src={eisenhower} style={{ width: "35%" }} />
            </div>

            <Card.Body>
              <Card.Title>Linux Mint Radio Applet</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
            </Card.Body>
          </Card>
  
        </div>
        </div>

      </section>

      <section  style={{height: "150px", background: "#e9eced"}}>
      
      <div style={{display: "flex", justifyContent: "center", padding: "25px 0"}}>  

        <a href="https://www.linkedin.com/in/heardjonathan">
        <FontAwesomeIcon 
            size='3x' 
            style={{marginRight: "35px", cursor: "pointer", color: "black"}} 
            icon={faLinkedinIn} />
        </a>

        <a href="https://github.com/jonath92">

          <FontAwesomeIcon 
          size='3x'
          style={{cursor: "pointer", color: "black"}} 
          icon={faGithub} />
        </a>

      </div>

      <p style={{textAlign: "center"}}>
        &copy; Jonathan Heard &nbsp;  | &nbsp; Imprint &nbsp;  | &nbsp; Image and Media Copyrights 
      </p>
      
      </section>


        </>
    )
}
