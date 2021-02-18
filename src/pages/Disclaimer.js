import React from 'react'
import DisclaimerText from '../components/DisclaimerText'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'


export default function Imprint() {
    return (
        <>
            <Navbar />
            <div style={{ display: "flex", justifyContent: "space-around" }} >
                <DisclaimerText width="90%" paddingTop="75px" />

            </div>
            <Footer marginTop="40px" />
        </>
    )
}
