// external dependencies
import { useState } from 'react'
import styled from 'styled-components/macro'
import VisibilitySensor from 'react-visibility-sensor'

const BarContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 30px;
    margin-top: 45px;

    @media only screen and (min-width: 750px) {
        flex-direction: row;
    }

`

const BarLabel = styled.div` 
    width: 150px;
    margin-right: 20px
`
const BarBackground = styled.div`
    width: 100%;
    background-color: #f3f2f2;
    display: flex;
    height: 25px;
`

interface Width {
    width: number
}

const BarValue = styled.div` 
    background-color: #A5D8DD;
    width: ${(p: Width) => `${p.width}%`};
    height: 25px;
    transition: width 2s;

    @media only screen and (min-width: 750px) {
        height: 100%;
    }
`

const FullPageWidthContainer = styled.div` 
    display: flex;
    justify-content: space-around;
    width: 100%
`

const OuterContainer = styled.div`  
    width: 90%;
    max-width: 600px;

    div:first-child {
        margin-top: 0
    }
`

const TextContainer = styled.div` 
    width: ${(p: Width) => `${p.width}%`};
    display: none;
    align-items: center;
    justify-content: flex-end;
    align-self: flex-end;
    flex: 1;

    @media only screen and (min-width: 750px) {
        display: flex;
    }

`

const data = [
    { name: "JS", value: 90 },
    { name: "Git", value: 90 },
    // { name: "Gis", value: 80 },
    { name: "TypeScript", value: 80 },
    { name: "HTML", value: 80 },
    { name: "CSS", value: 80 },
    { name: "SQL", value: 80 },
    { name: "React", value: 70 },
    { name: "Docker", value: 50 },
    { name: "Linux", value: 40 },
    { name: "Java", value: 40 }
]


const SkillsBar = () => {

    const [showBar, setShowBar] = useState(false)


    function renderBar(name: string, value: number) {
        return (
            <BarContainer key={name} >
                <BarLabel>
                    <h5>
                        {name}

                    </h5>

                </BarLabel>
                <BarBackground>
                    <BarValue width={showBar ? value : 0} />
                    <TextContainer width={10}>
                        {value} % &nbsp;
                    </TextContainer>
                </BarBackground>
            </BarContainer >
        )
    }


    function onChange(isVisible: boolean) {

        if (isVisible) setShowBar(true)
    }

    return (
        <VisibilitySensor partialVisibility onChange={onChange} minTopValue={250}>
            <FullPageWidthContainer>
                <OuterContainer>
                    {data.map(skill => {
                        return (
                            renderBar(skill.name, skill.value)
                        )
                    })}
                </OuterContainer>
            </FullPageWidthContainer>
        </VisibilitySensor >

    )
}

export { SkillsBar }