"use client";

import Link from "next/link";
import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Header() {
  return (
    <AppBar position="static" color="default" sx={{ borderBottom: "1px solid #444" }}>
      <Toolbar>
        <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Typography variant="h6" fontWeight="bold">
            CS391 URL Shortener
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
