"use client";

import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Button,
  Typography,
} from "@mui/material";
import { VideogameAsset } from "@mui/icons-material";

const NavBar = () => {
  const { status, data: session } = useSession();
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Users", href: "/users/list" },
  ];

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <VideogameAsset sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            EBUDDY
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}>
            {links.map((link) => (
              <Button
                key={link.label}
                href={link.href}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {link.label}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              {status === "authenticated" && (
                <Link href="/api/auth/signout">
                  Log out ({session.user!.email})
                </Link>
              )}
              {status === "unauthenticated" && (
                <Link href="/api/auth/signin">Login</Link>
              )}
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
