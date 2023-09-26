import "./globals.css";
import { Roboto } from "next/font/google";
import Laptop from "@phosphor-icons/react/dist/icons/Laptop";

const roboto = Roboto({
  weight: ["700", "400", "100"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfólio",
  description: "portfólio do Elias Lopes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="./laptop.svg"></link>
      </head>
      <body className={`${roboto.className} h-full w-full`}>{children}</body>
    </html>
  );
}
