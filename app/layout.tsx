import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "銀鱗丸 | 淡路島育波漁港 タイラバ・タコ釣り遊漁船",
  description: "淡路島育波漁港の遊漁船「銀鱗丸」。タイラバ（マダイ）・タコ（ティップラン）の本格船釣り。船長：柿本稔也。乗合 午前9,000円・午後7,000円。ご予約は070-2829-4900まで。",
  keywords: ["銀鱗丸", "淡路島", "育波漁港", "タイラバ", "マダイ", "タコ", "ティップラン", "遊漁船", "船釣り"],
  openGraph: {
    title: "銀鱗丸 | 淡路島育波漁港",
    description: "淡路島の海から、感動の一匹を。",
    images: ["/images/hero-boat.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} ${notoSerifJP.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}