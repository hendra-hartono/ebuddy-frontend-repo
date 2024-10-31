import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";

const UserAction = () => (
  <div>
    <Button variant="outlined" sx={{ mb: 5 }}>
      <Link href="/users/new">New User</Link>
    </Button>
  </div>
);

export default UserAction;
