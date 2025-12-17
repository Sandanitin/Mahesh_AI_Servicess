import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Brain, Zap, Shield, TrendingUp, Users, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Home() {
    const features = [
        {
            icon: Brain,
            title: 'Intelligent Automation',
            description: 'Automate complex workflows with AI-powered decision making and process optimization.',
        },
        {
            icon: Zap,
            title: 'Lightning Fast',
            description: 'Deploy AI solutions in minutes, not months. Get instant results with our pre-trained models.',
        },
        {
            icon: Shield,
            title: 'Enterprise Security',
            description: 'Bank-grade security with end-to-end encryption and compliance with global standards.',
        },
        {
            icon: TrendingUp,
            title: 'Scalable Growth',
            description: 'Scale seamlessly from startup to enterprise with our flexible AI infrastructure.',
        },
        {
            icon: Users,
            title: 'Expert Support',
            description: '24/7 dedicated support from AI specialists to ensure your success.',
        },
        {
            icon: Sparkles,
            title: 'Continuous Innovation',
            description: 'Stay ahead with regular updates and access to the latest AI breakthroughs.',
        },
    ]

    const stats = [
        { value: '500+', label: 'Enterprise Clients' },
        { value: '99.9%', label: 'Uptime SLA' },
        { value: '10M+', label: 'AI Predictions Daily' },
        { value: '50+', label: 'Countries Served' },
    ]

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
                {/* Animated Background */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-primary/5 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
                </div>

                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
                            <span className="text-sm font-semibold text-primary">AI-Powered Business Solutions</span>
                        </div>

                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
                            Transform Your Business
                            <br />
                            with AI Excellence
                        </h1>

                        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                            Empower your organization with cutting-edge artificial intelligence solutions.
                            Drive productivity, enhance customer experiences, and unlock unprecedented growth.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact">
                                <Button size="lg" className="text-lg px-8 py-6 group">
                                    Get Started
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                            <Link to="/services">
                                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                                    Explore Services
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                                <div className="text-sm text-muted-foreground">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Why Choose Sample AI Services</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Experience the future of business intelligence with our comprehensive AI platform
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group p-6 rounded-2xl border border-border bg-card hover:shadow-lg hover:border-primary/50 transition-all duration-300"
                            >
                                <div className="mb-4 p-3 bg-primary/10 rounded-lg inline-block group-hover:bg-primary/20 transition-colors">
                                    <feature.icon className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                <p className="text-muted-foreground">{feature.description}</p>
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
                        <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
                        <p className="text-xl text-muted-foreground mb-8">
                            Join hundreds of companies already leveraging AI to drive growth and innovation
                        </p>
                        <Link to="/contact">
                            <Button size="lg" className="text-lg px-8 py-6">
                                Schedule a Demo
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
