import React from 'react'
import JoplinComponent from '../components/JoplinComponent'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Joplin() {
    return (
        <div>
            <Navbar />
            <div style={{ paddingTop: "75px", display: "flex", width: "100%", justifyContent: "space-around" }}>
                <JoplinComponent />
            </div>

            <Footer marginTop="40px" />


        </div>
    )
}
