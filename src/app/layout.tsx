"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { RecoilRoot } from "recoil";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import TopBar from "@/components/TopBar";
import "@mantine/core/styles.css";
import "@mantine/tiptap/styles.css";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();
  return (
    <html lang="en">
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <body className={inter.className}>
            <TopBar></TopBar>
            <div className="px-6">{children}</div>
          </body>
        </QueryClientProvider>
      </RecoilRoot>
    </html>
  );
}
