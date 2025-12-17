import { motion } from 'framer-motion'
import { TrendingUp, Headphones, Megaphone, ShoppingCart, Check, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export function Services() {
    const services = [
        {
            id: 'sales',
            icon: TrendingUp,
            title: 'Sales AI',
            subtitle: 'Accelerate Your Sales Pipeline',
            description: 'Transform your sales process with AI-powered insights and automation. Close deals faster and build stronger customer relationships.',
            features: [
                'AI-powered lead scoring and prioritization',
                'Automated email composition with customer data',
                'Real-time sales call analysis and summaries',
                'Predictive analytics for deal forecasting',
                'Intelligent sales process automation',
                'Personalized customer engagement recommendations',
            ],
            benefits: [
                '40% increase in sales productivity',
                '35% higher conversion rates',
                '60% reduction in admin time',
            ],
            color: 'from-blue-500 to-cyan-500',
        },
        {
            id: 'service',
            icon: Headphones,
            title: 'Customer Service AI',
            subtitle: 'Elevate Customer Experience',
            description: 'Deliver exceptional customer service at scale with AI agents that understand, assist, and delight your customers 24/7.',
            features: [
                'Intelligent AI agents for instant support',
                'Automated case summarization and resolution',
                'Multi-channel customer engagement',
                'Sentiment analysis and escalation',
                'Knowledge base auto-generation',
                'Real-time agent assistance and coaching',
            ],
            benefits: [
                '70% faster response times',
                '50% reduction in support costs',
                '90% customer satisfaction rate',
            ],
            color: 'from-purple-500 to-pink-500',
        },
        {
            id: 'marketing',
            icon: Megaphone,
            title: 'Marketing AI',
            subtitle: 'Personalize at Scale',
            description: 'Create hyper-personalized marketing campaigns that resonate with your audience and drive measurable results.',
            features: [
                'AI-generated content and copy',
                'Predictive customer segmentation',
                'Automated campaign optimization',
                'Personalized customer journey mapping',
                'Real-time engagement insights',
                'Multi-channel attribution modeling',
            ],
            benefits: [
                '3x improvement in engagement',
                '45% increase in conversion rates',
                '60% time saved on content creation',
            ],
            color: 'from-orange-500 to-red-500',
        },
        {
            id: 'commerce',
            icon: ShoppingCart,
            title: 'Commerce AI',
            subtitle: 'Optimize Every Transaction',
            description: 'Maximize revenue and customer satisfaction with AI-powered commerce solutions that personalize every shopping experience.',
            features: [
                'Intelligent product recommendations',
                'Dynamic pricing optimization',
                'Automated product description generation',
                'Visual search and discovery',
                'Inventory demand forecasting',
                'Personalized shopping experiences',
            ],
            benefits: [
                '25% increase in average order value',
                '40% boost in conversion rates',
                '30% reduction in cart abandonment',
            ],
            color: 'from-green-500 to-emerald-500',
        },
    ]

    return (
        <div className="min-h-screen pt-16">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-background via-background to-primary/5">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                            AI Solutions for Every Department
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Empower your entire organization with AI tools built for sales, service, marketing, and commerce teams.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-32">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                id={service.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                                    <div className={`inline-block p-3 bg-gradient-to-r ${service.color} rounded-2xl mb-6`}>
                                        <service.icon className="h-8 w-8 text-white" />
                                    </div>
                                    <h2 className="text-4xl font-bold mb-2">{service.title}</h2>
                                    <p className="text-xl text-primary mb-4">{service.subtitle}</p>
                                    <p className="text-lg text-muted-foreground mb-6">{service.description}</p>

                                    {/* Features List */}
                                    <div className="space-y-3 mb-8">
                                        {service.features.map((feature) => (
                                            <div key={feature} className="flex items-start gap-3">
                                                <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                                <span className="text-muted-foreground">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <Link to="/contact">
                                        <Button size="lg" className="group">
                                            Learn More
                                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </Link>
                                </div>

                                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                                    <div className="bg-gradient-to-br from-muted/50 to-muted/20 rounded-2xl p-8 border border-border">
                                        <h3 className="text-xl font-semibold mb-6">Key Benefits</h3>
                                        <div className="space-y-6">
                                            {service.benefits.map((benefit, idx) => (
                                                <motion.div
                                                    key={benefit}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: idx * 0.1 }}
                                                    viewport={{ once: true }}
                                                    className="flex items-center gap-4"
                                                >
                                                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center text-white font-bold`}>
                                                        {idx + 1}
                                                    </div>
                                                    <span className="text-lg font-medium">{benefit}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto"
                    >
                        <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
                        <p className="text-xl text-muted-foreground mb-8">
                            Let's discuss how our AI solutions can transform your business
                        </p>
                        <Link to="/contact">
                            <Button size="lg" className="text-lg px-8 py-6">
                                Schedule a Consultation
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
