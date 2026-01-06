import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@/lib/AntdRegistry";
import { ConfigProvider } from "antd";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "T-Home | Your Trusted Partner for Home Loans",
  description:
    "T-Home - Your trusted partner for home loans, personal loans, balance transfer, and business registration services. DPIIT certified, Government of India recognized.",
  keywords: [
    "home loans",
    "personal loans",
    "T-Home",
    "Hyderabad",
    "balance transfer",
    "business registration",
  ],
  authors: [{ name: "T-Home" }],
  openGraph: {
    title: "T-Home | Your Trusted Partner for Home Loans",
    description:
      "Helping families, individuals, and businesses with smarter home loans. Trusted, recognized, and reliable.",
    type: "website",
    locale: "en_IN",
    siteName: "T-Home",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="font-poppins antialiased overflow-x-hidden min-h-screen w-full">
        <AntdRegistry>
          <ConfigProvider
            theme={{
              token: {
                fontFamily: "var(--font-poppins), sans-serif",
                colorPrimary: "#1e3a5f",
                colorError: "#c41e3a",
                borderRadius: 12,
              },
              components: {
                Button: {
                  controlHeight: 44,
                  controlHeightLG: 52,
                },
                Input: {
                  controlHeight: 44,
                  controlHeightLG: 52,
                },
                Select: {
                  controlHeight: 44,
                  controlHeightLG: 52,
                },
              },
            }}
          >
            {children}
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
