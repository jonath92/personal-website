// own features
import { ProjectCard } from './ProjectCard'
import { radioAppletIcon } from 'assets/images/external/index'
import { links } from 'types'

const RadioCard = () => {
    return (
        <ProjectCard
            img={radioAppletIcon}
            imgWidth="40%"
            title="Linux Mint Radio Applet"
            description={
                <span>
                    Linux Mint is one of the most popular Linux distributions. A key feature of the distribution is the large number of easy installable extensions such as the Radio Applet.
                    <br /> <br />
                    I have made multiple contributions to the Applet and currently being the official maintainer of the extension.
                </span>
            }
            href={links.radio.location}
        />
    )
}

export { RadioCard }