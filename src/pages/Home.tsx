// external dependencies
import styled from 'styled-components/macro'

// own features
import { Cover } from '../components/Cover'
import { ProjectGrid } from '../components/ProjectGrid'
import { links } from 'types'

//styles
const H2 = styled.h2.attrs(({
    className: "my-5 text-center"
}))`

    display: inline-block;
    position: relative;
    padding-bottom: 10px;

    :before{
        content: "";
        position: absolute;
        width: 70%;
        height: 1px;
        bottom: 0;
        left: 15%;
        border-bottom: 3.5px solid black;
    }
`

const Project = styled.section.attrs(({
    id: links.overview.hash
}))`
    padding-bottom: 30px;
    /* background: #F3F3F3; */
`


interface Props {
    animationShown: boolean,
    onAnimationFinished: { (): void }
}

const Home = ({ animationShown, onAnimationFinished }: Props) => {


    return (
        <>
            <Cover showAnimation={!animationShown} {...{ onAnimationFinished }} />
            <Project >
                <div style={{ width: "100%", display: "flex", justifyContent: "space-around" }}>
                    <H2>Projects</H2>

                </div>
                <ProjectGrid />
            </Project>
        </>
    )
}

export { Home }
