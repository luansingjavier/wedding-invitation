import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Javier & Kirbelyn | Wedding Invitation",
  description: "Join us in celebrating our special day",
  icons: {
    icon: [
      {
        url: "/heart.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: ["/heart.svg"],
    apple: [
      {
        url: "/heart.svg",
        type: "image/svg+xml",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
