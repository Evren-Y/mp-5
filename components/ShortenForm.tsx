"use client";

import { useState } from "react";
import { TextField, Button, Alert, Stack, Typography } from "@mui/material";

export default function ShortenForm() {
  const [alias, setAlias] = useState("");
  const [url, setUrl] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [successUrl, setSuccessUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    setSuccessUrl(null);

    const res = await fetch("/api/shorten", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ alias, url }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.error || "Something went wrong.");
    } else {
      const origin = window.location.origin;
      setSuccessUrl(`${origin}/r/${alias}`);
      setAlias("");
      setUrl("");
    }

    setLoading(false);
  };

  return (
    <Stack spacing={2} mt={4}>
      <TextField
        label="Custom Alias"
        variant="outlined"
        value={alias}
        onChange={(e) => setAlias(e.target.value)}
        fullWidth
      />
      <TextField
        label="URL to Shorten"
        variant="outlined"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        fullWidth
      />
      <Button variant="contained" onClick={handleSubmit} disabled={loading}>
        Shorten URL
      </Button>

      {error && <Alert severity="error">{error}</Alert>}

      {successUrl && (
        <Alert severity="success">
          Shortened URL:{" "}
          <Typography component="span" fontWeight="bold">
            <a href={successUrl} target="_blank" rel="noopener noreferrer">
              {successUrl}
            </a>
          </Typography>
        </Alert>
      )}
    </Stack>
  );
}
