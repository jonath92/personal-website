// external dependencies
import styled from 'styled-components/macro'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useState } from 'react'

// own features
import { coverImg, coverImgThumb } from 'assets/images/external/index'

// styles
const FullPageImage = styled(LazyLoadImage)`
    width: 100%;
    height: 100vh;
    object-fit: cover; 
    opacity: 0.75;
    position: relative;
    z-index: -1
`
const Textbox = styled.div`
    background-color: rgba(201, 201, 201, 0.5);
    position        : absolute;
    top             : 50%;
    transform       : translateY(-50%);
    text-align      : center;
    font-family     : "Raleway", sans-serif;

    left  : 0;
    right : 0;
    margin: auto;

    width     : calc(100vw * 0.8);
    padding   : 25px 10px;
    max-height: 100vh;
    overflow  : hidden;
    
    /* 665 is from trial and error. Above 665 the text would be shown in one line */
    @media only screen and (min-width: 665px) {
        width    : calc(0.5 * 65vw);
        right    : 52vw;
    }
`

const TestH2 = styled.h2`
::after {
    content: '|';
    transition: content 75ms
}

`

const Cover = () => {

    const [heading1, setHeading1] = useState("Hello, I’m Jonathan Heard.")

    const heading1Final = "Hello, I’m Jonathan Heard."


    async function typeHeading() {

        const finalWordArr = [...heading1Final]
        for (const char of finalWordArr) {
            await addChar(char)
        }

    }

    async function handleThumbnailLoaded() {
        setHeading1("")
        setTimeout(() => {
            typeHeading()
        }, 150)
    }

    function addChar(char: string) {
        return new Promise<void>((resolve) => {
            setTimeout(() => {
                setHeading1(heading1 => heading1 + char)
                resolve()
            }, 150)
        })
    }



    return (
        <>
            {/* not optimal as the original image isn't loading stepwise. This is the case when not using styled component  */}
            <FullPageImage src={coverImg} placeholderSrc={coverImgThumb} beforeLoad={() => handleThumbnailLoaded()} />


            <Textbox>
                {/* <AnimatedTyping>Hello, I’m Jonathan Heard. </AnimatedTyping> */}
                <div style={{ position: "relative", margin: "0 auto", textAlign: "center" }}>
                    <h2 className="mb-4" style={{ opacity: 0, zIndex: -1 }}>{heading1Final}</h2>
                    <div style={{ position: "absolute", top: 0, width: "100%", display: "block" }}>
                        <TestH2 className="mb-4">{heading1} </TestH2>
                    </div>
                    <div>

                    </div>

                </div>



                <h3>I want to make things that make a difference</h3>
            </Textbox>
        </>
    )
}

export { Cover }