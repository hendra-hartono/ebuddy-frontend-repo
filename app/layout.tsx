import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Container } from "@mui/material";
import NavBar from "./NavBar";
import AuthProvider from "./api/auth/Provider";
import { ReduxProvider } from "@/redux/provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ebuddy Dev",
  description: "Created by Hendra Hartono",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ReduxProvider>
          <AuthProvider>
            <NavBar />
            <main>
              <Container sx={{ py: 2 }}>{children}</Container>
            </main>
          </AuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
