import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";

export default function ContainedButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained">
        <Link
          to="/Mint"
          style={{ textAlign: "center", fontWeight: "bold", color: "white" }}
        >
          Free Mint
        </Link>
      </Button>
    </Stack>
  );
}
