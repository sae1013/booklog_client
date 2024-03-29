"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import TopBar from "@/components/TopBar";
import "@mantine/core/styles.css";
import "@mantine/tiptap/styles.css";
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();

  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          <MantineProvider>
            <ModalsProvider>
              <TopBar></TopBar>
              <div className="px-6">{children}</div>
            </ModalsProvider>
          </MantineProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
