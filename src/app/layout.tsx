import type { Metadata } from "next";
import "@/app/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { Lato } from "next/font/google";
import MainRoot from "./main-root";
import StoreProvider from "@/components/Providers/StoreProvider";

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "WoW Tasker",
  description: "Revolutionize your botting experience with WoW Tasker!",
  openGraph: {
    title: "WoW Tasker",
    description: "Revolutionize your botting experience with WoW Tasker!",
    type: "website",
    siteName: "WoW Tasker",
    images: [
      {
        url: "/assets/company-logo-minimized.png",
        width: 400,
        height: 400,
      },
    ],
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={lato.className}>
      <body className="preload overflow-x-hidden bg-black  text-white ">
        <MainRoot>
          <StoreProvider>{children}</StoreProvider>
        </MainRoot>
      </body>
    </html>
  );
}
