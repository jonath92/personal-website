// external dependencies
import { useState } from "react";
import { useMount } from "react-use";
import styled from "styled-components/macro";

// own features
import meta from "assets/images/external/metadata.json";

const GridContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: start;
  flex: 1 0 auto;
  width: 90%;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 130px));
  gap: 1.5em;
  width: 100%;
  justify-content: space-around;
`;

// image + text
const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageLink = styled.a`
  width: 80%;
`;
interface imageDivProps {
  img: string;
  fileType: string | undefined;
}

const ImageDiv = styled.div`
  background-image: ${(p: imageDivProps) => `url(${p.img})`};
  background-size: ${(p: imageDivProps) =>
    p.fileType === "svg" ? "contain" : "cover"};
  /* padding-top ensres aspect-ratio 1/1. Using aspect-ratio on div doesn't work in firefox  */
  padding-top: 100%;
  width: 100%;
  margin-bottom: 8px;
  background-repeat: no-repeat;
  background-position: center;
`;

const CaptionContainer = styled.div`
  word-break: break-word;
  display: flex;
  flex-direction: column;
  align-items: start;
`;
const Caption = styled.p`
  margin: 0;
`;

interface ImgMeta {
  file: string;
  href: string;
  author: string;
  license?: string;
  licenseLink?: string;
}

export const CopyrightsGrid = () => {
  const [imagesWithMeta, setImagesWithMeta] = useState<ImgMeta[]>([]);

  useMount(async () => {
    // TODO: set imgMeta as TS Interface
    const imgsWithMeta = await Promise.all(
      meta.map(async (imgMeta: ImgMeta) => {
        // not working when using absolut path ...
        // build verson not working when importing externalImgPath from other module(e.g. constants)
        const externalImgPath = "assets/images/external";

        const file = await import(`../${externalImgPath}/${imgMeta.file}`);
        return { ...imgMeta, file: file.default };
      })
    );
    setImagesWithMeta(imgsWithMeta);
  });

  function renderImageWithLink(href: string, filepath: string) {
    const fileType = filepath.split(".").pop();

    return (
      <ImageLink {...{ href }}>
        <ImageDiv img={filepath} {...{ fileType }} />
      </ImageLink>
    );
  }

  /**
   *
   * @param author: i.e organisation/person with the copyrigh
   */
  function renderCaption(
    author: string,
    license?: string,
    licenseLink?: string
  ) {
    return (
      <CaptionContainer>
        <Caption>&copy; {author} </Caption>
        {license && (
          <Caption>
            License: <a href={licenseLink}>{license}</a>
          </Caption>
        )}
      </CaptionContainer>
    );
  }

  function renderGridItem(imgWithMeta: ImgMeta) {
    const { href, file, author, license, licenseLink } = imgWithMeta;

    return (
      <GridItem key={imgWithMeta.file}>
        {renderImageWithLink(href, file)}
        {renderCaption(author, license, licenseLink)}
      </GridItem>
    );
  }

  return (
    <GridContainer>
      <Grid>
        {imagesWithMeta.map((imgWithMeta: ImgMeta) => {
          return renderGridItem(imgWithMeta);
        })}
      </Grid>
    </GridContainer>
  );
};
