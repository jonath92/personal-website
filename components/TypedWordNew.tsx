import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";

interface TypedWordProps {
  word: string;
  onTypingFinished?: () => void;
}

export const TypedWordNew = (props: TypedWordProps) => {
  const { word, onTypingFinished } = props;

  const [lastTypedIndex, setLastTypedIndex] = useState(-1);

  useEffect(() => {
    const timer = setInterval(() => {
      setLastTypedIndex((lastTypedIndex) =>
        Math.min(lastTypedIndex + 1, word.length)
      );
    }, 125);

    if (lastTypedIndex === word.length) clearTimeout(timer);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {[...word].map((char, index) => {
        const isLastChar = index === lastTypedIndex;

        return (
          <React.Fragment key={index}>
            <span
              style={{ opacity: index > lastTypedIndex ? 0 : 1 }}
              key={index}
            >
              {char}
            </span>
          </React.Fragment>
        );
      })}
    </>
  );
};
