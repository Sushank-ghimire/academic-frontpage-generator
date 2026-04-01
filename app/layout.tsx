import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ContextProviders from "@/components/providers/Providers";
import Header from "@/components/header";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Academic Frontpage Generator",
    template: "%s | Academic",
  },
  description:
    "Generate professional Academic front pages quickly and easily with Academic Frontpage Generator.",
  keywords: [
    "Academic frontpage",
    "report cover generator",
    "college project cover",
    "Next.js PDF generator",
    "student report front page",
  ],
  authors: [
    {
      name: "Sushank Ghimire",
      url: "https://github.com/Sushank-ghimire",
    },
  ],
  creator: "Sushank Ghimire",
  publisher: "Sushank Ghimire",
  applicationName: "Academic Frontpage Generator",
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://yourdomain.com"),
  openGraph: {
    title: "Academic Frontpage Generator",
    description:
      "Generate professional Academic front pages quickly and easily with Academic Frontpage Generator.",
    url: "https://ghimiresushank.com.np",
    siteName: "Academic",
    images: [
      {
        url: "https://ghimiresushank.com.np/og-image.png",
        width: 1200,
        height: 630,
        alt: "Academic Frontpage Generator",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Academic Frontpage Generator",
    description:
      "Generate professional Academic front pages quickly and easily with Academic Frontpage Generator.",
    creator: "@sushank_ghimire",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      suppressContentEditableWarning
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <ContextProviders>
        <NextTopLoader
          color="#2299DD"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
        />
        <body className="min-h-full flex flex-col selection:bg-teal-600 selection:text-white overflow-x-hidden">
          <Header />
          {children}
          <Toaster position="top-center" />
        </body>
      </ContextProviders>
    </html>
  );
}
