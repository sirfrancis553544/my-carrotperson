import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function ContainedButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="contained"
        target="_blank"
        href="https://0x3b9ca0f67260adadc4e0d4650c52fe4630b11a7a.netlify.app/"
        rel="noreferrer"
      >
        Free Mint
      </Button>
    </Stack>
  );
}
