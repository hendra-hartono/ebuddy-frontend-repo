import { Typography } from "@mui/material";
import React, { PropsWithChildren } from "react";

const ErrorMessage = ({ children }: PropsWithChildren) => {
  if (!children) return null;

  return (
    <Typography color="error" component="p">
      {children}
    </Typography>
  );
};

export default ErrorMessage;
