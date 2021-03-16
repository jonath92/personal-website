// external dependencies
import React from 'react'
import styled from 'styled-components/macro'

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

interface Props {
    finalWord: string;
    lastTypedIndex: number
}

const TypedWord = ({ finalWord, lastTypedIndex }: Props) => {

    return (
        <>
            {[...finalWord].map((char, index) => {
                const opacity = index > lastTypedIndex ? 0 : 1
                const lastChar = index === lastTypedIndex ? true : false

                return (
                    <React.Fragment key={index}>
                        <span key={index} style={{ opacity }}>
                            {char}
                        </span>
                        {lastChar && <BlinkedCarred />}
                    </React.Fragment>
                )
            })}
        </>
    )
}

export { TypedWord }