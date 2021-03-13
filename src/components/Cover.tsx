// external dependencies
import styled from 'styled-components/macro'
import { LazyLoadImage } from 'react-lazy-load-image-component';

// own features
import { coverImg, coverImgThumb } from 'assets/images/external/index'

// styles
const FullPageImage = styled(LazyLoadImage)`
    width: 100%;
    height: 100vh;
    object-fit: cover; 
    opacity: 0.75;
    position: relative;
    z-index: -1
`
const Textbox = styled.div`
    background-color: rgba(201, 201, 201, 0.5);
    position        : absolute;
    top             : 50%;
    transform       : translateY(-50%);
    text-align      : center;
    font-family     : "Raleway", sans-serif;

    left  : 0;
    right : 0;
    margin: auto;

    width     : calc(100vw * 0.8);
    padding   : 25px 10px;
    max-height: 100vh;
    overflow  : hidden;
    
    /* 665 is from trial and error. Above 665 the text would be shown in one line */
    @media only screen and (min-width: 665px) {
        width    : calc(0.5 * 65vw);
        right    : 52vw;
    }
`

const Cover = () => {
    return (
        <>
            {/* not optimal as the original image isn't loading stepwise. This is the case when not using styled component  */}
            <FullPageImage src={coverImg} placeholderSrc={coverImgThumb} />


            <Textbox>
                {/* <AnimatedTyping>Hello, I’m Jonathan Heard. </AnimatedTyping> */}
                <h2 className="mb-4">Hello, I’m Jonathan Heard. </h2>

                <h3>I want to make things that make a difference</h3>
            </Textbox>
        </>
    )
}

export { Cover }