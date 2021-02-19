import React, { useState } from 'react'
import styled from 'styled-components/macro'
import metadata from '../images/metadata.json'
import { v4 as uuidv4 } from 'uuid';


const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(130px, 130px));
    gap: 1.5em;
    width: 100%;
    justify-content: space-around 
`
const GridContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: start;
    flex: 1 0 auto;
    width: ${props => props.width};
    padding-top: ${props => props.paddingTop}
`
// image + text
const GridItem = styled.div` 
    display: flex; 
    flex-direction: column;
    align-items: center
`
const ImageLink = styled.a`
    width: 80%
`
const Image = styled.div`
    background-image: url(${props => props.img});
    background-size: ${props => props.fileType === "jpg" ? "cover" : "contain"};
    /* padding-top ensres aspect-ratio 1/1. Using aspect-ratio on div doesn't work in firefox  */
    padding-top: 100%; 
    width: 100%;
    margin-bottom: 8px;
    background-repeat: no-repeat;
    background-position: center;
`

const TextContainer = styled.div` 
    word-break: break-word;
    display: flex;
    flex-direction: column;
    align-items: start
`
const P = styled.p` 
    margin: 0
`

// loading all images. Based on https://shaquillegalimba.medium.com/how-to-import-multiple-images-in-react-1936efeeae7b
function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => {
        images[item.replace('./', '')] = r(item);
    });
    return images
}

const imageObjects = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));


export default function CopyrightsGrid({ paddingTop, width }) {

    const [imagesWithMeta] = useState(() => {
        return metadata.map(meta => {
            const img = imageObjects[meta.file].default
            const fileType = meta.file.split(".")[1]
            return { ...meta, img, fileType }
        })
    })

    function renderGridItem({ href, img, owner, license, licenseLink, fileType }) {
        return (
            <GridItem key={uuidv4()}>
                <ImageLink {...{ href }}>
                    <Image {...{ img }} {...{ fileType }} />
                </ImageLink>

                <TextContainer>
                    <P>&copy; {owner}  </P>
                    {license &&
                        <P>
                            License: <a href={licenseLink}>{license}</a>
                        </P>
                    }
                </TextContainer>
            </GridItem>
        )
    }


    return (
        <GridContainer {...{ width }} {...{ paddingTop }}>
            <Grid>
                {imagesWithMeta.map(image => renderGridItem(image))}
            </Grid>
        </GridContainer >
    )
}
