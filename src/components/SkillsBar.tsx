import React from 'react'
import styled from 'styled-components/macro'

const BarContainer = styled.div`
    display: flex;
    width: 100%;
    height: 30px;
    margin-top: 45px
`

const BarLabel = styled.div` 
    /* background-color: rgba(17,36,39,0.8); */
    /* color: white; */
    /* display: flex; */
    /* vertical-align: bottom;
    display: table-cell; */
    /* align-items: center;  */
    /* justify-content: space-around; */
    width: 150px;
    margin-right: 20px
`
const BarBackground = styled.div`
    width: 100%;
    background-color: #e0e0de;
`

interface BarValueProps {
    width: number
}

const BarValue = styled.div` 
    background-color: #17a2b8;
    width: ${(p: BarValueProps) => `${p.width}%`};
    height: 100%

`


const data = [
    { name: "JS", value: 90 },
    { name: "TypeScript", value: 80 },
    { name: "HTML", value: 80 },
    { name: "CSS", value: 80 },
    { name: "SQL", value: 80 },
    { name: "React", value: 70 },
    { name: "Docker", value: 50 },
    { name: "Linux", value: 40 },
    { name: "Java", value: 40 }
]

function renderBar(name: string, value: number) {
    console.log(name)
    return (
        <BarContainer >
            <BarLabel>
                <h4>
                    {name}

                </h4>

            </BarLabel>
            <BarBackground>
                <BarValue width={value} />

            </BarBackground>
        </BarContainer>
    )
}

const SkillsBar = () => {
    return (
        <div style={{ display: "flex", justifyContent: "space-around", width: "100%" }}>

            <div style={{ width: "90%", maxWidth: "600px" }}>
                {data.map(skill => {
                    return (
                        renderBar(skill.name, skill.value)
                    )
                })}


            </div>
        </div>

    )
}

export { SkillsBar }