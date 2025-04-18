import React from "react";
import MuiThemeProvider from "@/components/MuiThemeProvider";
import Header from "@/components/Header";


export default function RootLayout(
    {children,}:
      Readonly<{children: React.ReactNode;}>
){
  return (
    <html lang="en">
      <body>
        <MuiThemeProvider>
          <Header />
          {children}
        </MuiThemeProvider>
      </body>
    </html>
  );
}