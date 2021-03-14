// external dependencies
import styled from 'styled-components/macro'
import React, { useState } from 'react'
import { useMount } from 'react-use'

// own features
import { coverImg } from 'assets/images/external/index'

// styles
const FullPageImage = styled.img`
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

const BlinkedCarred = styled.span`
  border-right: .075em solid black; /* The typwriter cursor */
  animation: 
    blink-caret 100ms step-end 1;

    /* The typewriter cursor effect */
  @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: black; }
  }

`

// const FadeInText


const Cover = () => {


    const [finalWordArr, setFinalWordArr] = useState(initFinalWordArr())


    useMount(async () => {
        setTimeout(() => {
            typeHeading()
        }, 150)
    })


    function initFinalWordArr() {
        const heading1Final = "Hello, I’m Jonathan Heard."
        const finalWordArr = [...heading1Final].map(char => {
            return {
                opacity: 0,
                isLastTypedChar: false,
                char
            }
        })
        return finalWordArr
    }


    async function typeHeading() {
        for (const [i, char] of finalWordArr.entries()) {
            await addChar(char, i)
        }
    }

    async function addChar(char: any, i: number) {
        return new Promise<void>((resolve) => {
            setTimeout(() => {

                const finalWordArrCopy = [...finalWordArr]
                finalWordArrCopy[i].opacity = 100


                if (i !== finalWordArrCopy.length - 1) {
                    finalWordArrCopy[i].isLastTypedChar = true
                }

                if (i > 0) {
                    finalWordArrCopy[i - 1].isLastTypedChar = false
                }

                setFinalWordArr(finalWordArrCopy)

                resolve()
            }, 100)
        })
    }


    return (
        <>
            {/* not optimal as the original image isn't loading stepwise. This is the case when not using styled component  */}
            <FullPageImage src={coverImg} />


            <Textbox>
                {/* <AnimatedTyping>Hello, I’m Jonathan Heard. </AnimatedTyping> */}
                <h2 className="mb-4">

                    {finalWordArr.map((charObj, index) => {
                        return (
                            <React.Fragment key={index}>
                                <span style={{ opacity: charObj.opacity }}>{charObj.char}</span>
                                {charObj.isLastTypedChar && <BlinkedCarred />}
                            </React.Fragment>
                        )
                    })}
                </h2>



                <h3>I want to make things that make a difference</h3>
            </Textbox>
        </>
    )
}

export { Cover }