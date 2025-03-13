import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-purple-100/50 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-violet-600">
              布草芯科技
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <Link href="/" className="text-gray-600 transition-colors hover:text-purple-700">
              首页
            </Link>
            <Link href="/blog" className="text-gray-600 transition-colors hover:text-purple-700">
              博客
            </Link>
            <Link href="/about" className="text-gray-600 transition-colors hover:text-purple-700">
              关于我们
            </Link>
            <Link href="/contact" className="text-gray-600 transition-colors hover:text-purple-700">
              联系我们
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Button
              asChild
              variant="default"
              size="sm"
              className="hidden md:flex bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 border-none shadow-md shadow-purple-500/20 rounded-full"
            >
              <Link href="/contact">立即咨询</Link>
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden rounded-full">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="border-l-purple-100/50 bg-white/95 backdrop-blur-md">
                <nav className="flex flex-col gap-6 text-lg font-medium mt-12">
                  <Link href="/" className="text-gray-600 hover:text-purple-700 transition-colors">
                    首页
                  </Link>
                  <Link href="/blog" className="text-gray-600 hover:text-purple-700 transition-colors">
                    博客
                  </Link>
                  <Link href="/about" className="text-gray-600 hover:text-purple-700 transition-colors">
                    关于我们
                  </Link>
                  <Link href="/contact" className="text-gray-600 hover:text-purple-700 transition-colors">
                    联系我们
                  </Link>
                  <Button
                    asChild
                    size="lg"
                    className="mt-4 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 border-none shadow-md shadow-purple-500/20 rounded-full"
                  >
                    <Link href="/contact">立即咨询</Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </div>
    </header>
  )
}

