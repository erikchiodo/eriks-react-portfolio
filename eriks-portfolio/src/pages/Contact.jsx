//TODO: For Name, Email Address, and Message, if user clicks in box and clicks out without filling in information, produce error saying "X is required". Clear error once user starts entering information
//TODO: Add Regex Validation that checks for valid email input. If not valid input, produce error saying "Enter Valid Email" Add onblur
import React from "react";

import { Box, Button, Stack, TextField } from "@mui/material";

export default function Contact() {
  return (
    <Box
      sx={{
        maxWidth: "640px",
        p: 2,
      }}
    >
      <form>
        <Stack spacing={3} alignItems="flex-end">
          <TextField
            id="name"
            label="Name"
            variant="outlined"
            onblur="fieldRequired" //TODO create function to display Error when blank
            fullWidth
          />

          <TextField
            id="email"
            label="Email"
            variant="outlined"
            onblur="fieldRequired" //TODO create function to display Error when blank
            fullWidth
          />

          <TextField
            id="message"
            label="Message"
            multiline
            rows={4}
            onblur="emailValidator" //TODO create function to display Error when blank or email is wrong
            variant="outlined"
            fullWidth
          />

          <Button type="submit" variant="contained">
            Send
          </Button>
        </Stack>
      </form>
    </Box>
  );
}
