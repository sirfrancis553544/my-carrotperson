import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function ContainedButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="contained"
        target="_blank"
        href="https://opensea.io/collection/carrotperson"
      >
        Buy on OpenSea
      </Button>
    </Stack>
  );
}
