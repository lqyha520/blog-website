import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, CheckCircle, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
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
              关于我们
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-700 via-violet-600 to-fuchsia-500">
              关于布草芯科技
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-lg">
              我们致力于通过创新科技解决方案，推动布草行业的数字化转型
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="relative w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="inline-block p-1.5 px-3 bg-white backdrop-blur-xl rounded-full border border-purple-200 text-xs font-medium text-purple-900">
                我们的故事
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-violet-600">
                从创新理念到行业领导者
              </h2>
              <p className="text-gray-600 md:text-lg">
                布草芯科技成立于2018年，由一群对布草行业充满热情的技术专家和行业资深人士共同创立。我们看到了传统布草管理中的效率低下和资源浪费问题，决心通过科技创新来改变这一现状。
              </p>
              <p className="text-gray-600 md:text-lg">
                经过多年的发展，我们已从一家初创企业成长为行业领导者，为全国数百家酒店、医院和洗涤工厂提供智能布草管理解决方案。我们的使命是通过数字化转型提高布草行业的效率、可持续性和服务质量。
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 rounded-2xl blur-xl opacity-50 -z-10"></div>
              <div className="aspect-video overflow-hidden rounded-2xl shadow-xl">
                <img
                  alt="Company founders"
                  className="object-cover w-full h-full"
                  src="/placeholder.svg?height=400&width=600"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="relative w-full py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-violet-50 to-white"></div>
          <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-gradient-radial from-purple-100 to-transparent opacity-60 blur-2xl"></div>
          <div className="absolute bottom-1/4 left-0 w-1/3 h-1/3 bg-gradient-radial from-fuchsia-100 to-transparent opacity-60 blur-2xl"></div>
        </div>

        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block p-1.5 px-3 bg-white backdrop-blur-xl rounded-full border border-purple-200 text-xs font-medium text-purple-900 mb-2">
              核心价值观
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-violet-600">
              我们的价值观引领我们前进
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-lg">
              这些价值观是我们企业文化的基石，指导我们的决策和行动
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <Card
                key={value.title}
                className="group bg-white/50 backdrop-blur-sm border-purple-100/50 overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-purple-200/20"
              >
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div
                    className={`mb-6 rounded-full p-4 ${
                      index === 0
                        ? "bg-gradient-to-br from-purple-500 to-purple-600"
                        : index === 1
                          ? "bg-gradient-to-br from-violet-500 to-violet-600"
                          : "bg-gradient-to-br from-fuchsia-500 to-fuchsia-600"
                    } text-white shadow-lg`}
                  >
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-purple-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="relative w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block p-1.5 px-3 bg-white backdrop-blur-xl rounded-full border border-purple-200 text-xs font-medium text-purple-900 mb-2">
              我们的团队
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-violet-600">
              认识我们的领导团队
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-lg">
              由行业专家和技术创新者组成的团队，致力于推动布草行业的未来发展
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {teamMembers.map((member) => (
              <div key={member.name} className="flex flex-col items-center space-y-4">
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 rounded-full blur-md opacity-70"></div>
                  <div className="relative overflow-hidden rounded-full w-40 h-40 border-2 border-white shadow-xl">
                    <img
                      alt={member.name}
                      className="object-cover w-full h-full"
                      src={member.image || "/placeholder.svg"}
                    />
                  </div>
                </div>
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold text-purple-900">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative w-full py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-violet-800 to-fuchsia-900"></div>
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-purple-500/20 to-transparent blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-fuchsia-500/20 to-transparent blur-3xl"></div>

          {/* Abstract Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute top-0 left-0 w-full h-full"
              style={{
                backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            ></div>
          </div>
        </div>

        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col items-center justify-center space-y-6 text-center max-w-3xl mx-auto">
            <div className="inline-block p-1.5 px-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 text-xs font-medium text-white mb-4">
              加入我们
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              加入布草芯科技的创新之旅
            </h2>
            <p className="mx-auto max-w-[600px] text-purple-100/80 md:text-lg">
              无论您是寻找合作伙伴还是加入我们的团队，我们期待与您共同创造未来
            </p>
            <Button
              asChild
              className="mt-4 bg-white text-purple-900 hover:bg-purple-50 rounded-full h-12 px-8 shadow-lg shadow-purple-900/30"
            >
              <Link href="/contact">联系我们</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

const coreValues = [
  {
    title: "创新驱动",
    description: "我们不断探索新技术和方法，推动行业标准向前发展，为客户创造更大价值。",
    icon: <CheckCircle className="h-6 w-6" />,
  },
  {
    title: "客户至上",
    description: "我们深入了解客户需求，提供超越期望的解决方案和服务，建立长期信任关系。",
    icon: <Users className="h-6 w-6" />,
  },
  {
    title: "卓越品质",
    description: "我们追求卓越，在产品开发、服务交付和客户支持的每个环节都坚持最高标准。",
    icon: <Award className="h-6 w-6" />,
  },
]

const teamMembers = [
  {
    name: "张明",
    title: "创始人兼首席执行官",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "李华",
    title: "首席技术官",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "王丽",
    title: "运营总监",
    image: "/placeholder.svg?height=200&width=200",
  },
]

