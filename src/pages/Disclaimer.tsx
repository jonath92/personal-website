// external dependencies
import styled from 'styled-components/macro'

// own features
import { Disclaimer as DisclaimerContent } from '../components/Disclaimer'

const ContentContainer = styled.div` 
    width: 90%;
    max-width: 600px
`

const Disclaimer = () => {
    return (
        <ContentContainer>
            <DisclaimerContent />
        </ContentContainer>
    )
}

export { Disclaimer }