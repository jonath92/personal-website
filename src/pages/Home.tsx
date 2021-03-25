// external dependencies
import styled from 'styled-components/macro'

// own features
import { Cover } from '../components/Cover'
import { ProjectGrid } from '../components/ProjectGrid'
import { links } from 'types'
import { SkillsBar } from 'components/SkillsBar'
import { Contact } from 'components/Contact'

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

interface SectionProps {
    backgroundColor?: boolean
    id: string
}

const Section = styled.section.attrs(({
    id: links.overview.hash,
    classNames: "mb-5"
}))`
    padding-bottom: 80px;
    background: ${(p: SectionProps) => `${p.backgroundColor ? '#fbfbfb' : 'white'}`};
    width: 100%

`


interface Props {
    animationShown: boolean,
    onAnimationFinished: { (): void }
}

const Home = ({ animationShown, onAnimationFinished }: Props) => {

    return (
        <>
            <Cover showAnimation={!animationShown} {...{ onAnimationFinished }} />

            <Section backgroundColor  >
                <Header id={links.overview.hash}>
                    <H2>Projects</H2>
                </Header>
                <ProjectGrid />
            </Section>

            <Section>
                <Header id={links.skills.hash}>
                    <H2>Skills</H2>
                </Header>
                <SkillsBar />
            </Section>

            <Section backgroundColor>
                <Header id={links.contact.hash}>
                    <H2>Contact</H2>
                </Header>

                <Contact />

            </Section>

        </>
    )
}

export { Home }
