// own features
import { ProjectCard } from './ProjectCard'
import { zugabeIcon } from 'assets/images/external/index'
import { links } from 'types'

const ZugabeCard = () => {
    return (
        <ProjectCard
            img={zugabeIcon}
            imgWidth="40%"
            title="Zugabe"
            description={
                <span>
                    Zugabe is a rainwater management tool developed by Ingenieurgesellschaft Prof. Sieker mbH. The tool combines functions for analyzing spatial data with functions for group decision support.
                    <br /> <br />
                    During my master thesis, I added a feature for digitizing spatial features and implemented Docker support.
                </span>
            }
            href={links.zugabe.location}
        />
    )
}

export { ZugabeCard }