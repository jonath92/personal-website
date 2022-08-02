import React, { useEffect, useState } from "react";
import Image from "next/image";

import CoverImg from "../public/pexels-lukas-574069.jpg";
import { TypedWord } from "./TypedWord";
import { Box } from "@mui/material";
import { TextBox } from "./TextBox";

interface CoverProps {
  showAnimation: boolean;
  onAnimationFinished: () => void;
}

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

export const Cover = (props: CoverProps) => {
  const { onAnimationFinished, showAnimation } = props;

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

  return (
    <Box sx={{ width: "100%", height: "100%", position: "relative" }}>
      <Image
        alt="Laptop"
        src={CoverImg}
        layout="fill"
        objectFit="cover"
        priority
        style={{
          opacity: 0.75,
          zIndex: -1,
        }}
      />
      <TextBox
        sx={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          left: 0,
          right: 0,
          width: "calc(100vw * 0.8)",
          maxHeight: "100vh",
          fontFamily: "Raleway, sans-serif",
          /* 665 is from trial and error. Above 665 the text would be shown in one line */
          "@media only screen and (min-width: 665px)": {
            width: "calc(0.5 * 65vw)",
            right: "52vw",
          },
        }}
      >
        <h2 className="mb-4">
          {showAnimation && (
            <TypedWord finalWord={heading} {...{ lastTypedIndex }} />
          )}
          {!showAnimation && heading}
        </h2>
        <Box
          component="h3"
          sx={{
            opacity: showSubHeading ? 100 : 0,
            transition: "opacity 0.5s ease-out",
          }}
        >
          {subHeading}
        </Box>
      </TextBox>
    </Box>
  );
};
