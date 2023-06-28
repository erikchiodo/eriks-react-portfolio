import React from "react";
import "../style.css";

import { Stack, Typography } from "@mui/material";

export default function About() {
  return (
    <div>
      <Stack spacing={1}>
        <img
          className="selfImage"
          src={require("../assets/Self_Image.png")}
          alt="Self"
        />
        <Typography variant="body1">Hello, my name is Erik Chiodo.</Typography>
        <Typography variant="body1">
          I work as Product Manager at JP Morgan Chase as a Product Manager
          where I manage a team called Coda, which oversees reference data and
          CRM integrations.
        </Typography>

        <Typography variant="body1">
          I'm currently enrolled in Columbia's Full-Stack Bootcamp where I've
          learned to HTML, CSS, & Javascript. I also have experience with
          Node.js, Express.js, and React. After I complete this course, I'm
          looking to build on my newly-acquired technical abilities by learning
          Java.
        </Typography>
      </Stack>
    </div>
  );
}
