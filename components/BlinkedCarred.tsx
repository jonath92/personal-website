import { Box, SxProps } from "@mui/material";
import React from "react";
import { keyframes } from "@mui/system";

const blinkCaret = keyframes`
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: black;
    }

`;

export const BlinkedCarred = () => {

  return (
    <Box
      component="span"
      sx={{
        borderRight: "0.075em solid black",
        animation: `${blinkCaret} 1s infinite ease`,
      }}
    />
  );
};
