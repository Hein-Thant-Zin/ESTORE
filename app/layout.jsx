import { Outfit } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

const font = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Hub Store",
  description: "Clothing Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
