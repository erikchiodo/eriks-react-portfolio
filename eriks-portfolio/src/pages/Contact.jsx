//TODO: For Name, Email Address, and Message, if user clicks in box and clicks out without filling in information, produce error saying "X is required". Clear error once user starts entering information
//TODO: Add Regex Validation that checks for valid email input. If not valid input, produce error saying "Enter Valid Email" Add onblur
import React from "react";

import { Box, Button, Stack, TextField } from "@mui/material";

export default function Contact() {
  //  const [errors, setErrors] = useState({
  //    name: "",
  //    email: "",
  //    message: "",
  //  });

  //  const validateEmail = (str) => {
  //    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
  //      str
  //    );
  //  };


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
            // onChange={handleInputChange}
            fullWidth
          />

          <TextField
            id="email"
            label="Email"
            variant="outlined"
            // onChange={handleInputChange}
            fullWidth
          />

          <TextField
            id="message"
            label="Message"
            multiline
            rows={4}
            // onChange={handleInputChange}
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
