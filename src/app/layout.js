import localFont from "next/font/local";
import "./globals.css";
import FloatingActionButton from "@/components/FloatingActionButton";

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

// Metadata with title, description, and OpenGraph settings
export const metadata = {
  title: "Co-Working with Cafe - Professional, Vibrant & Flexible Workspace",
  description: "Explore our Co-Working with Cafe, designed for startups, freelancers, and remote workers. Join us for a creative, productive, and inspiring environment.",
  openGraph: {
    title: "Co-Working with Cafe",
    description: "Explore our Co-Working with Cafe, designed for startups, freelancers, and remote workers.",
    url: "https://yourwebsite.com",
    images: [
      {
        url: "/images/og-image.jpg", // Replace with your Open Graph image path
        width: 800,
        height: 600,
        alt: "Co-Working with Cafe Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle",
    title: "Co-Working with Cafe",
    description: "Explore our Co-Working with Cafe, designed for startups, freelancers, and remote workers.",
    image: "/images/twitter-card-image.jpg", // Replace with your Twitter image path
  },
  icons: {
    icon: "/favicon.ico", // Favicon
    appleTouchIcon: "/apple-touch-icon.png", // Apple touch icon
    shortcutIcon: "/favicon-32x32.png", // Favicon for shortcuts
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
       <link rel="icon" href={metadata.icons.icon} sizes="any" />
        <link rel="apple-touch-icon" href={metadata.icons.appleTouchIcon} />
        <link rel="shortcut icon" href={metadata.icons.shortcutIcon} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <FloatingActionButton/>
      </body>
    </html>
  );
}
