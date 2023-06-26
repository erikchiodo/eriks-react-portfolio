//TODO: Create input for Name, Email Address, and Message
//TODO: For Name, Email Address, and Message, if user clicks in box and clicks out without filling in information, produce error saying "X is required". Clear error once user starts entering information
//TODO: Add Regex Validation that checks for valid email input. If not valid input, produce error saying "Enter Valid Email"
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
          <TextField id="name" label="Name" variant="outlined" fullWidth />

          <TextField id="email" label="Email" variant="outlined" fullWidth />

          <TextField
            id="message"
            label="Message"
            multiline
            rows={4}
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
