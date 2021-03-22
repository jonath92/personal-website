// external dependencies
import styled from 'styled-components/macro'

// own features
import { Cover } from '../components/Cover'
import { ProjectGrid } from '../components/ProjectGrid'
import { links } from 'types'
// import { SkillsBar } from 'components/SkillsBar'

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

const Header = styled.div` 
    width: 100%;
    display: flex;
    justify-content: space-around
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

            {/* <Header>
                <H2>Skills</H2>
            </Header> */}
            {/* <SkillsBar /> */}
            <Project >
                <Header>
                    <H2>Projects</H2>
                </Header>
                <ProjectGrid />
            </Project>

        </>
    )
}

export { Home }
