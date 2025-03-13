import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import "./globals.css";

// 配置字体
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

export const metadata = {
  title: "个人博客网站",
  description: "分享技术、思考和生活",
  keywords: ["博客", "技术", "编程", "Next.js", "React"],
  authors: [{ name: "博主" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="zh-CN" 
      className={`${inter.variable} ${jakarta.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background font-sans antialiased">
        <div className="relative flex min-h-screen flex-col">
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center">
              <nav className="flex items-center space-x-6 text-sm font-medium">
                <a href="/" className="font-bold text-primary text-lg transition-colors hover:text-primary-600">首页</a>
                <a href="/blog" className="transition-colors hover:text-primary">博客</a>
                <a href="/about" className="transition-colors hover:text-primary">关于</a>
                <a href="/contact" className="transition-colors hover:text-primary">联系</a>
              </nav>
              <div className="ml-auto flex items-center space-x-4">
                <button className="btn btn-primary px-4 py-2">订阅</button>
              </div>
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="border-t py-6 md:py-8">
            <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} 个人博客. 保留所有权利.
              </p>
              <div className="flex items-center space-x-4">
                <a href="/terms" className="text-sm text-muted-foreground hover:text-foreground">使用条款</a>
                <a href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">隐私政策</a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}



import './globals.css'