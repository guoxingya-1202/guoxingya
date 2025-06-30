import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Web前端开发课程 - 学习作业平台",
  description: "现代化的前端开发学习平台，展示HTML、CSS、JavaScript和React技术",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
