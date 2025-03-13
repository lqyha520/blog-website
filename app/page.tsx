import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const featuredPosts = [
  {
    id: 1,
    title: "Next.js 13的新特性：App Router详解",
    description: "深入了解Next.js 13中的App Router架构，以及它如何改变React应用的开发方式。",
    date: "2023-12-15",
    category: "前端开发",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    readTime: "5 分钟"
  },
  {
    id: 2,
    title: "使用Tailwind CSS打造现代响应式界面",
    description: "探索如何利用Tailwind CSS构建美观、高效且具有一致性的用户界面。",
    date: "2023-11-20",
    category: "CSS",
    imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    readTime: "4 分钟"
  },
  {
    id: 3,
    title: "TypeScript高级类型技巧详解",
    description: "掌握TypeScript的高级类型系统，提高代码质量和开发效率。",
    date: "2023-10-10",
    category: "TypeScript",
    imageUrl: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    readTime: "6 分钟"
  },
];

const recentPosts = [
  {
    id: 4,
    title: "React Server Components详解",
    description: "了解React Server Components如何彻底改变我们构建React应用的方式。",
    date: "2023-09-05",
    category: "React",
    imageUrl: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    readTime: "4 分钟"
  },
  {
    id: 5,
    title: "CSS Grid布局实战指南",
    description: "掌握CSS Grid布局，打造复杂且响应式的网页设计。",
    date: "2023-08-20",
    category: "CSS",
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    readTime: "3 分钟"
  },
  {
    id: 6,
    title: "现代JavaScript异步编程",
    description: "深入理解Promise、async/await以及它们如何简化异步JavaScript代码。",
    date: "2023-07-15",
    category: "JavaScript",
    imageUrl: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80",
    readTime: "5 分钟"
  },
];

const categories = [
  { name: "前端开发", count: 12 },
  { name: "React", count: 8 },
  { name: "Next.js", count: 6 },
  { name: "JavaScript", count: 15 },
  { name: "TypeScript", count: 7 },
  { name: "CSS", count: 9 },
  { name: "性能优化", count: 4 },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* 英雄区域 */}
      <section className="relative w-full bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 py-20 md:py-28 overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary fade-in-element">
              探索与分享技术的旅程
            </h1>
            <p className="mt-4 text-lg md:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed fade-in-element" style={{ animationDelay: "200ms" }}>
              这里是我的个人博客，分享关于前端开发、React生态、设计模式和最佳实践的见解与心得。
            </p>
            <div className="mt-8 flex flex-wrap gap-4 fade-in-element" style={{ animationDelay: "400ms" }}>
              <Link 
                href="/blog" 
                className="btn btn-primary px-6 py-3 rounded-full shadow-md hover:shadow-lg">
                浏览文章
              </Link>
              <Link 
                href="/about" 
                className="btn bg-white/80 text-primary hover:bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg">
                关于我
              </Link>
            </div>
          </div>
        </div>
        
        {/* 装饰元素 */}
        <div className="absolute -top-24 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </section>
      
      {/* 特色文章区 */}
      <section className="py-16 md:py-24 bg-white dark:bg-neutral-900">
        <div className="container-custom">
          <div className="mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">特色文章</h2>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl">
              精选的深度技术文章，融合了理论知识与实践经验
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <div key={post.id} className="card group overflow-hidden">
                <div className="img-container aspect-video">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary">
                      {post.category}
                    </span>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400">
                      {post.date}
                    </span>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400 ml-auto">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 line-clamp-2 mb-4">
                    {post.description}
                  </p>
                  <Link 
                    href={`/blog/${post.id}`} 
                    className="text-primary font-medium hover:text-primary-600 inline-flex items-center">
                    阅读全文
                    <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* 最新文章与分类区 */}
      <section className="py-16 md:py-24 bg-neutral-50 dark:bg-neutral-800/50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-primary mb-8">最新文章</h2>
              <div className="space-y-8">
                {recentPosts.map((post) => (
                  <div key={post.id} className="card flex flex-col md:flex-row gap-4 overflow-hidden">
                    <div className="img-container md:w-1/3 aspect-video md:aspect-square">
                      <Image
                        src={post.imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 30vw, 20vw"
                      />
                    </div>
                    <div className="p-4 md:p-6 md:w-2/3">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                          {post.category}
                        </span>
                        <span className="text-xs text-neutral-500 dark:text-neutral-400">
                          {post.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors">
                        <Link href={`/blog/${post.id}`}>
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                        {post.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <Link 
                          href={`/blog/${post.id}`} 
                          className="text-primary font-medium hover:text-primary-600 inline-flex items-center">
                          阅读全文
                          <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </Link>
                        <span className="text-xs text-neutral-500 dark:text-neutral-400">
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Link 
                  href="/blog" 
                  className="btn btn-secondary px-6 py-2 rounded-full inline-flex items-center">
                  查看所有文章
                  <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h2 className="text-3xl font-bold text-primary mb-8">分类</h2>
                <div className="card p-6">
                  <ul className="space-y-4">
                    {categories.map((category) => (
                      <li key={category.name} className="flex items-center justify-between">
                        <Link 
                          href={`/category/${category.name}`}
                          className="text-neutral-800 dark:text-neutral-200 hover:text-primary transition-colors">
                          {category.name}
                        </Link>
                        <span className="bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 text-xs font-medium px-2.5 py-0.5 rounded-full">
                          {category.count}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-8">
                  <h2 className="text-xl font-bold text-primary mb-4">订阅更新</h2>
                  <div className="card p-6">
                    <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                      订阅获取最新的文章和技术更新通知
                    </p>
                    <form className="space-y-4">
                      <input
                        type="email"
                        placeholder="您的电子邮箱"
                        className="w-full p-3 rounded-md border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                      <button
                        type="submit"
                        className="w-full btn btn-primary py-3 rounded-md">
                        订阅
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA区域 */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-secondary text-white text-center">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">准备好开始您的技术之旅了吗？</h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-white/90">
            无论您是刚开始学习编程，还是希望深入掌握前端技术，这里都有适合您的内容
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/blog" 
              className="btn bg-white text-primary hover:bg-white/90 px-8 py-3 rounded-full shadow-lg">
              浏览所有文章
            </Link>
            <Link 
              href="/contact" 
              className="btn bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-full shadow-lg">
              联系我
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

