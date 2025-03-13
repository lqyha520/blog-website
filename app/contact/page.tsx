"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: "",
      })
    }, 1500)
  }

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
              联系我们
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-700 via-violet-600 to-fuchsia-500">
              联系我们
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-lg">
              我们期待听到您的声音。无论是咨询、合作还是加入我们的团队，请随时联系。
            </p>
          </div>
        </div>
      </section>

      <section className="relative w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-purple-900">联系方式</h2>
                <p className="text-gray-600 mb-6">您可以通过以下方式联系我们，我们的团队将在24小时内回复您的咨询。</p>
              </div>

              <div className="grid gap-6">
                <Card className="group bg-white/50 backdrop-blur-sm border-purple-100/50 overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-purple-200/20">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="rounded-full p-3 bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-lg">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-purple-900">电话</h3>
                      <p className="text-sm text-gray-500 mt-1">周一至周五 9:00-18:00</p>
                      <p className="text-lg font-medium mt-1 text-gray-700">+86 400-123-4567</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group bg-white/50 backdrop-blur-sm border-purple-100/50 overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-purple-200/20">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="rounded-full p-3 bg-gradient-to-br from-violet-500 to-violet-600 text-white shadow-lg">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-purple-900">电子邮件</h3>
                      <p className="text-sm text-gray-500 mt-1">我们会在24小时内回复</p>
                      <p className="text-lg font-medium mt-1 text-gray-700">info@bucaoxin-tech.com</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group bg-white/50 backdrop-blur-sm border-purple-100/50 overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-purple-200/20">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="rounded-full p-3 bg-gradient-to-br from-fuchsia-500 to-fuchsia-600 text-white shadow-lg">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-purple-900">公司地址</h3>
                      <p className="text-sm text-gray-500 mt-1">欢迎预约参观</p>
                      <p className="text-lg font-medium mt-1 text-gray-700">上海市浦东新区张江高科技园区科苑路88号</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="bg-white/70 backdrop-blur-sm border-purple-100/50 overflow-hidden rounded-2xl shadow-xl">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl text-purple-900">发送消息</CardTitle>
                  <p className="text-gray-600 mt-1">填写下面的表单，我们会尽快与您联系</p>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="flex flex-col items-center justify-center py-10 space-y-4 text-center">
                      <div className="rounded-full p-3 bg-gradient-to-br from-green-500 to-emerald-500 text-white shadow-lg">
                        <CheckCircle className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-medium text-purple-900">消息已发送</h3>
                      <p className="text-gray-600">感谢您的留言，我们的团队将尽快与您联系。</p>
                      <Button
                        variant="outline"
                        onClick={() => setIsSubmitted(false)}
                        className="mt-4 rounded-full border-purple-200 hover:bg-purple-50"
                      >
                        发送新消息
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-purple-900">
                            姓名
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="您的姓名"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="rounded-lg border-purple-100 focus:border-purple-300 focus:ring-purple-300"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-purple-900">
                            电子邮件
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            placeholder="your@email.com"
                            required
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="rounded-lg border-purple-100 focus:border-purple-300 focus:ring-purple-300"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-purple-900">
                          公司
                        </Label>
                        <Input
                          id="company"
                          name="company"
                          placeholder="您的公司名称"
                          value={formData.company}
                          onChange={handleChange}
                          className="rounded-lg border-purple-100 focus:border-purple-300 focus:ring-purple-300"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-purple-900">
                          咨询主题
                        </Label>
                        <Select>
                          <SelectTrigger className="rounded-lg border-purple-100 focus:border-purple-300 focus:ring-purple-300">
                            <SelectValue placeholder="选择咨询主题" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="product">产品咨询</SelectItem>
                            <SelectItem value="service">服务咨询</SelectItem>
                            <SelectItem value="partnership">合作洽谈</SelectItem>
                            <SelectItem value="support">技术支持</SelectItem>
                            <SelectItem value="other">其他</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-purple-900">
                          消息内容
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="请详细描述您的需求或问题..."
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className="rounded-lg border-purple-100 focus:border-purple-300 focus:ring-purple-300"
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 rounded-full h-12 shadow-md shadow-purple-500/20"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "发送中..." : "发送消息"}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

