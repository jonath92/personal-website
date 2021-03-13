// external dependencies
import styled from 'styled-components/macro'

// own features
import { JoplinCard } from './ProjectCards/Joplin'
import { KanbanCard } from './ProjectCards/Kanban'
import { RadioCard } from './ProjectCards/RadioApplet'
import { ZugabeCard } from './ProjectCards/Zugabe'

const GridContainer = styled.div`
    display: flex;
    justify-content: space-around
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2em;
    width: 90%
`

const ProjectGrid = () => {
    return (
        <GridContainer>
            <Grid>
                <KanbanCard />
                <RadioCard />
                <JoplinCard />
                <ZugabeCard />
            </Grid>
        </GridContainer>
    )
}

export { ProjectGrid }