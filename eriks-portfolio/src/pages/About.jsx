import React from "react";

import { Stack, Typography } from "@mui/material";

export default function About() {
  return (
    <Stack spacing={1}>
      <Typography variant="body1">Hello, my name is Erik Chiodo.</Typography>

      <Typography variant="body1">
        I work as Product Manager at JP Morgan Chase as a Product Manager where
        I mananged a team called Coda, which manages reference data and CRM
        integrations.
      </Typography>

      <Typography variant="body1">
        I'm currently enrolled in Columbia's Full-Stack Bootcamp where I've
        learned to HTML, CSS, & Javascript. I also have experience with Node.js,
        Express.js, and React. After I complete this course, I'm looking to
        build on my newly-acquired technical abilities by learning Java.
      </Typography>
    </Stack>
  );
}