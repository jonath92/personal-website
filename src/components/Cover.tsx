// external dependencies
import styled from "styled-components/macro";
import { useState, useEffect } from "react";

// own features
import { coverImg } from "assets/images/external/index";
import { TypedWord } from "./TypedWord";

// styles
const FullPageImage = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  opacity: 0.75;
  position: relative;
  z-index: -1;
`;
const Textbox = styled.div`
  background-color: rgba(201, 201, 201, 0.5);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
  font-family: "Raleway", sans-serif;

  left: 0;
  right: 0;
  margin: auto;

  width: calc(100vw * 0.8);
  padding: 25px 10px;
  max-height: 100vh;
  overflow: hidden;

  /* 665 is from trial and error. Above 665 the text would be shown in one line */
  @media only screen and (min-width: 665px) {
    width: calc(0.5 * 65vw);
    right: 52vw;
  }
`;
const FadeInText = styled.h3`
  opacity: 0;
  transition: opacity 0.5s ease-out;
`;

const useTyping = (finalWord: string, startTyping: boolean) => {
  const [lastTypedIndex, setLastTypedIndex] = useState<number>(-1);

  useEffect(() => {
    if (!startTyping) return;

    const delay = 125;
    const timer = setTimeout(() => {
      setLastTypedIndex((lastTypedIndex) =>
        Math.min(lastTypedIndex + 1, finalWord.length)
      );
    }, delay);

    if (lastTypedIndex === finalWord.length) clearTimeout(timer);
    return () => clearTimeout(timer);
  }, [lastTypedIndex, finalWord.length, startTyping]);

  return lastTypedIndex;
};

interface Props {
  showAnimation: boolean;
  onAnimationFinished: { (): void };
}

export const Cover = ({ showAnimation, onAnimationFinished }: Props) => {
  const heading = "Hello, I am Jonathan Heard";
  const subHeading = "I want to make things that make a difference";

  const lastTypedIndex = useTyping(heading, showAnimation);
  const [showSubHeading, setShowSubHeading] = useState(!showAnimation);

  useEffect(() => {
    if (lastTypedIndex < heading.length) return;

    const timer = setTimeout(() => {
      setShowSubHeading(true);
      onAnimationFinished();
    }, 500);

    return () => clearTimeout(timer);
  }, [lastTypedIndex, onAnimationFinished]);

  function renderFadeInText() {
    const opacity = showSubHeading ? 100 : 0;
    return <FadeInText style={{ opacity: opacity }}>{subHeading}</FadeInText>;
  }

  return (
    <>
      <FullPageImage src={coverImg} />

      <Textbox>
        <h2 className="mb-4">
          {showAnimation && (
            <TypedWord finalWord={heading} {...{ lastTypedIndex }} />
          )}
          {!showAnimation && heading}
        </h2>
        {renderFadeInText()}
      </Textbox>
    </>
  );
};
