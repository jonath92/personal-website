import { Box, SxProps } from "@mui/material";
import React from "react";

export const TextBox = (props: { children: React.ReactNode; sx?: SxProps }) => {
  const { sx, children } = props;

  return (
    <Box
      sx={{
        background: "rgba(201, 201, 201, 0.5)",
        padding: "25px 10px",
        margin: "auto",
        overflow: "hidden",
        textAlign: "center",
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};
