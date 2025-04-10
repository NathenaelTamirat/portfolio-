import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CursorFollower from "@/components/cursor-follower"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nathenael Tamirat - Portfolio",
  description: "Personal portfolio of Nathenael Tamirat, software engineering student and freelancer",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function() {
              try {
                var storageKey = 'theme';
                var theme = localStorage.getItem(storageKey);
                var systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                
                if (theme === 'dark' || (!theme && systemPrefersDark)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {
                console.error('Failed to initialize theme', e);
              }
            })();
          `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="theme"
        >
          <CursorFollower />
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
