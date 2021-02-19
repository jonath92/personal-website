import React from 'react'
import JoplinComponent from '../components/JoplinComponent'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import joplinIcon from '../images/Joplin-icon.svg'


export default function Joplin() {
    return (
        <div style={{ display: 'flex', flexDirection: "column", alignItems: "center" }}>
            <Navbar />

            <JoplinComponent
                heading="Joplin"
                subHeading="First contributions to a Project with more than 100K Downloads"
                links={[
                    {
                        href: "https://github.com/laurent22/joplin/pulls?q=is:merged+is:pr+author:jonath92",
                        text: "View my Contributions at Github"
                    },
                    {
                        href: "www.google.de",
                        text: "View in Cinnamon Store"
                    }
                ]}
                img={joplinIcon}

            />


            <Footer marginTop="40px" />


        </div >
    )
}
