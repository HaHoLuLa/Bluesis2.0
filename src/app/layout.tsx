import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  preload: false
})

export const metadata: Metadata = {
  title: "블루시스 마켓",
  description: "AI(인공지능) 기반 학교급식 식단 분석 및 최적의 식재료 추천 플랫폼  '급식 식재료 시장조사, 급식레시피,식재료 상품 검색'",
  keywords: [
    "AI 블루시스 마켓",
    "BLUESIS MARKET",
    "급식 시장조사",
    "식재료 트렌드",
    "레시피",
    "식재료 소개",
    "학교급식",
    "식자재 데이터",
    "급식 식재료 정보시스템",
    "식재료 홍보"
  ],
  openGraph: {
    title: "블루시스 마켓",
    description: "AI(인공지능) 기반 학교급식 식단 분석 및 최적의 식재료 추천 플랫폼",
    url: "https://market.bluesis.com",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`${notoSansKR.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
