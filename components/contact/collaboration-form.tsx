
"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useState } from "react"

// Custom RadioOption component with enhanced styling
function RadioOption({ 
    value, 
    id, 
    children
}: { 
    value: string
    id: string
    children: React.ReactNode
}) {
    return (
        <label
            htmlFor={id}
            className="radio-option-label group relative flex cursor-pointer items-start space-x-3 rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/50 hover:bg-accent/30 hover:shadow-sm"
        >
            <RadioGroupItem value={value} id={id} className="mt-0.5" />
            <Label htmlFor={id} className="flex-1 cursor-pointer font-normal leading-relaxed">
                {children}
            </Label>
        </label>
    )
}

export function CollaborationForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000))
        setIsSubmitting(false)
        alert("感谢您的详细咨询。我会仔细审阅您的信息，并尽快与您联系。")
    }

    return (
        <section className="mx-auto max-w-3xl px-6 py-12">
            <div className="mb-10 text-left">
                <h2 className="mb-4 text-3xl font-bold text-foreground">开始对话</h2>
                <p className="text-lg text-muted-foreground">
                    请填写下面的表单。我会亲自阅读每一条消息。
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-10">
                {/* Basic Info */}
                <div className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="name">姓名</Label>
                            <Input id="name" required placeholder="您的姓名" className="h-11 transition-colors hover:bg-accent/30" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">工作邮箱</Label>
                            <Input id="email" type="email" required placeholder="name@company.com" className="h-11 transition-colors hover:bg-accent/30" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="industry">行业 <span className="text-destructive">*</span></Label>
                        <Select required>
                            <SelectTrigger id="industry" className="h-11 bg-background transition-colors hover:bg-accent/30">
                                <SelectValue placeholder="请选择您的行业" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="manufacturing">制造业 / 工业</SelectItem>
                                <SelectItem value="brand">品牌 / 消费品</SelectItem>
                                <SelectItem value="trade">外贸 / 跨境</SelectItem>
                                <SelectItem value="service">服务型企业</SelectItem>
                                <SelectItem value="other">其他</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="website">当前网站（如有）</Label>
                        <Input id="website" placeholder="https://www.example.com" className="h-11 transition-colors hover:bg-accent/30" />
                    </div>
                </div>

                {/* Website Status - Critical */}
                <div className="space-y-4 rounded-lg border border-border bg-card/50 p-6">
                    <Label className="text-base font-semibold">当前网站状态 <span className="text-destructive">*</span></Label>
                    <RadioGroup defaultValue="none" className="grid gap-3">
                        <RadioOption value="none" id="status-none">
                            还没有网站
                        </RadioOption>
                        <RadioOption value="new" id="status-new">
                            有网站，但几乎没有自然流量
                        </RadioOption>
                        <RadioOption value="unstable" id="status-unstable">
                            有一些流量，但不稳定
                        </RadioOption>
                        <RadioOption value="mature" id="status-mature">
                            成熟网站，寻求系统性增长
                        </RadioOption>
                    </RadioGroup>
                </div>

                {/* Core Challenge - Core Judgment */}
                <div className="space-y-2">
                    <Label htmlFor="challenge" className="text-base font-semibold">您希望通过网站解决什么问题？ <span className="text-destructive">*</span></Label>
                    <Textarea
                        id="challenge"
                        required
                        className="min-h-[100px] bg-muted/30 transition-colors hover:bg-accent/20 focus:bg-background"
                        placeholder="例如：获得询盘、提升品牌曝光、减少对广告的依赖..."
                    />
                </div>

                {/* Timeframe - High Filter Value */}
                <div className="space-y-4">
                    <Label className="text-base font-semibold">您对 SEO 效果的预期时间框架是？ <span className="text-destructive">*</span></Label>
                    <RadioGroup className="grid gap-3">
                        <RadioOption value="3m" id="time-3m">
                            3 个月内（立即见效）
                        </RadioOption>
                        <RadioOption value="3-6m" id="time-3-6m">
                            3-6 个月（逐步增长）
                        </RadioOption>
                        <RadioOption value="6-12m" id="time-6-12m">
                            6-12 个月（长期投资）
                        </RadioOption>
                        <RadioOption value="unsure" id="time-unsure">
                            不确定，寻求建议
                        </RadioOption>
                    </RadioGroup>
                </div>

                {/* Preferred Mode */}
                <div className="space-y-4">
                    <Label className="text-base font-semibold">首选合作模式 <span className="text-destructive">*</span></Label>
                    <RadioGroup className="grid gap-3">
                        <RadioOption value="construction" id="mode-construction">
                            网站结构搭建与基础设施
                        </RadioOption>
                        <RadioOption value="consulting" id="mode-consulting">
                            网站建设 + SEO 咨询支持
                        </RadioOption>
                        <RadioOption value="operation" id="mode-operation">
                            年度持续运营与优化
                        </RadioOption>
                        <RadioOption value="unsure" id="mode-unsure">
                            还不确定
                        </RadioOption>
                    </RadioGroup>
                </div>

                {/* Other Info */}
                <div className="space-y-2">
                    <Label htmlFor="other">还有其他信息需要补充吗？（可选）</Label>
                    <Textarea
                        id="other"
                        className="min-h-[80px] bg-muted/30 transition-colors hover:bg-accent/20 focus:bg-background"
                        placeholder="具体约束条件、背景信息或截止日期..."
                    />
                </div>

                <div className="pt-4">
                    <Button type="submit" size="lg" className="w-full md:w-auto" disabled={isSubmitting}>
                        {isSubmitting ? "发送中..." : "提交咨询"}
                    </Button>
                </div>
            </form>
        </section>
    )
}
