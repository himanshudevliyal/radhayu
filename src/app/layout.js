// app/layout.js
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

import QueryProvider from "@/providers/query-client-provider";
import Providers from "@/lib/povider";
import { NuqsProvider } from "@/providers/nuqs-provider";
import Layout from "@/components/layout/layout";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "700"], // Add specific weights
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "700"], // Add specific weights
});

export const metadata = {
  title: "Ayugroww Ayurvedic Medicine – Natural Herbal Health Solution",
  description:
    "Ayugroww Ayurvedic medicine offers a safe and natural health solution made with 100% herbal ingredients for overall wellness and immunity.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${dmSans.variable} antialiased`}>
        {/* <SmoothScrollProvider>
          <Navbar />
          {children}
          <Footer />
        </SmoothScrollProvider> */}

        <QueryProvider>
          <Providers>
            <NuqsProvider>
              <Layout>{children}</Layout>
            </NuqsProvider>
            {/* <DelayedPopup /> */}
          </Providers>
        </QueryProvider>
      </body>
    </html>
  );
}
