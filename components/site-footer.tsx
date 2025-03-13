import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-purple-100/50 bg-white">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-violet-600">
                布草芯科技
              </span>
            </Link>
            <p className="text-sm text-gray-600">创新科技，智慧未来。我们专注于布草行业的科技创新与解决方案。</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4 text-purple-900">快速链接</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-gray-600 hover:text-purple-600 transition-colors">
                  首页
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-purple-600 transition-colors">
                  博客
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-purple-600 transition-colors">
                  关于我们
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-purple-600 transition-colors">
                  联系我们
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4 text-purple-900">解决方案</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
                  智能布草管理系统
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
                  RFID技术应用
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
                  数据分析平台
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
                  可持续发展解决方案
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4 text-purple-900">联系我们</h3>
            <ul className="space-y-3 text-sm">
              <li className="text-gray-600">上海市浦东新区张江高科技园区科苑路88号</li>
              <li className="text-gray-600">电话: +86 400-123-4567</li>
              <li className="text-gray-600">邮箱: info@bucaoxin-tech.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-purple-100/50 text-center text-sm text-gray-500">
          <p>© 2024 布草芯科技. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  )
}

