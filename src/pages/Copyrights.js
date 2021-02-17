import React from 'react'
import CopyrightsGrid from '../components/CopyrightsGrid'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'


export default function Copyrights() {
    return (
        <div style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Navbar />
            <CopyrightsGrid width="90%" paddingTop="75px" />
            <Footer marginTop="40px" />

        </div>
    )
}
