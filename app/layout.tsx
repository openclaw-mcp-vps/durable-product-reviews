import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DurableReviews – Rotten Tomatoes for Product Longevity",
  description: "A review platform focused on product durability and longevity with verified ownership proof. Longevity scoring, time-based updates, and premium analytics."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="8e5f9ee6-0f61-4417-8361-ffe65003c459"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] font-sans antialiased">{children}</body>
    </html>
  );
}
