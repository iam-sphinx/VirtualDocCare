import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { AuthProvider } from "@/providers/authProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "VirtualDocCare",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-popins bg-[#f9f9f9] flex flex-col min-h-screen">
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
