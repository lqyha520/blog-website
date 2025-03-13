import Link from "next/link"
import { ArrowRight, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative w-full py-20 md:py-32 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-violet-50 to-white"></div>
          <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-purple-600/5 blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-fuchsia-600/5 blur-3xl"></div>

          {/* Abstract Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute top-0 left-0 w-full h-full"
              style={{
                backgroundImage: "radial-gradient(circle, rgba(139,92,246,1) 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            ></div>
          </div>
        </div>

        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col items-center space-y-6 text-center max-w-3xl mx-auto">
            <div className="inline-block p-1.5 px-3 bg-white backdrop-blur-xl rounded-full border border-purple-200 text-xs font-medium text-purple-900 mb-2">
              知识分享
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-700 via-violet-600 to-fuchsia-500">
              博客文章
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-lg">
              探索布草芯科技的最新洞察、技术趋势和行业动态
            </p>
            <div className="w-full max-w-md mt-6">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  type="search"
                  placeholder="搜索文章..."
                  className="w-full bg-white/80 backdrop-blur-sm pl-10 pr-4 py-6 rounded-full border-purple-100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={post.id}
                className="group bg-white/50 backdrop-blur-sm border-purple-100/50 overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-purple-200/20"
              >
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        index % 3 === 0 ? "bg-purple-500" : index % 3 === 1 ? "bg-violet-500" : "bg-fuchsia-500"
                      }`}
                    ></div>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                  <CardTitle className="line-clamp-1 text-xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-2 text-sm text-gray-500">{post.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-sm font-medium text-purple-600 hover:text-purple-800 transition-colors"
                  >
                    阅读更多
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <Button className="rounded-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 border-none shadow-md shadow-purple-500/20">
              加载更多
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

const blogPosts = [
  {
    id: "1",
    title: "布草行业数字化转型的五大趋势",
    excerpt:
      "随着科技的发展，布草行业正在经历前所未有的变革。本文探讨了数字化转型的五大关键趋势，以及企业如何应对这些变化。",
    date: "2024-03-10",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "2",
    title: "智能布草管理系统如何提升酒店运营效率",
    excerpt: "智能布草管理系统正在彻底改变酒店的运营方式。了解这些系统如何通过自动化和数据分析提高效率，降低成本。",
    date: "2024-03-05",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "3",
    title: "可持续发展：布草行业的绿色革命",
    excerpt: "可持续发展已成为布草行业的重要议题。本文分析了行业内的环保创新，以及如何平衡经济效益与环境责任。",
    date: "2024-02-28",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "4",
    title: "RFID技术在布草管理中的应用",
    excerpt: "RFID技术如何彻底改变布草管理流程？本文深入探讨了这一技术的实际应用案例及其带来的效益。",
    date: "2024-02-20",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "5",
    title: "布草行业供应链优化策略",
    excerpt: "在全球供应链挑战日益增加的背景下，布草企业如何优化其供应链以提高弹性和效率？",
    date: "2024-02-15",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "6",
    title: "人工智能在布草质量控制中的应用",
    excerpt: "人工智能和机器学习如何帮助布草企业提高质量控制标准，减少废品率，提升客户满意度。",
    date: "2024-02-10",
    image: "/placeholder.svg?height=200&width=400",
  },
]

