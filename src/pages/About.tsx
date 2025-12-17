import { motion } from 'framer-motion'
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'
import { Target, Eye, Heart, Award } from 'lucide-react'

export function About() {
    const values = [
        {
            icon: Target,
            title: 'Mission-Driven',
            description: 'We are committed to democratizing AI technology and making it accessible to businesses of all sizes.',
        },
        {
            icon: Eye,
            title: 'Visionary',
            description: 'We envision a future where AI empowers every organization to achieve extraordinary results.',
        },
        {
            icon: Heart,
            title: 'Customer-Centric',
            description: 'Your success is our success. We build lasting partnerships based on trust and mutual growth.',
        },
        {
            icon: Award,
            title: 'Excellence',
            description: 'We maintain the highest standards in AI development, security, and customer service.',
        },
    ]

    const testimonials = [
        {
            quote: "Sample AI Services transformed our customer service operations. We've seen a 60% reduction in response time and our customer satisfaction scores have never been higher.",
            name: "Sarah Chen",
            designation: "VP of Customer Success at TechCorp",
            src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
        },
        {
            quote: "The AI-powered insights have revolutionized our sales process. Our team is closing deals faster and with higher success rates than ever before.",
            name: "Michael Rodriguez",
            designation: "Sales Director at InnovateCo",
            src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        },
        {
            quote: "Implementation was seamless and the ROI was immediate. The platform's flexibility allowed us to customize it perfectly for our unique needs.",
            name: "Emily Watson",
            designation: "CTO at DataFlow Systems",
            src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800&auto=format&fit=crop",
        },
        {
            quote: "Outstanding support and cutting-edge technology. Sample AI Services has become an integral part of our digital transformation strategy.",
            name: "James Kim",
            designation: "Chief Innovation Officer at FutureTech",
            src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
        },
        {
            quote: "The scalability and performance have exceeded our expectations. We've grown 300% and the platform has scaled effortlessly with us.",
            name: "Lisa Thompson",
            designation: "CEO at GrowthLabs",
            src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop",
        },
    ]

    const milestones = [
        { year: '2018', title: 'Company Founded', description: 'Started with a vision to democratize AI' },
        { year: '2019', title: 'First 100 Clients', description: 'Reached our first major milestone' },
        { year: '2021', title: 'Global Expansion', description: 'Expanded operations to 25+ countries' },
        { year: '2023', title: 'Industry Leader', description: 'Recognized as a leader in AI solutions' },
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
                            About Sample AI Services
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            We're on a mission to empower businesses worldwide with intelligent AI solutions
                            that drive growth, efficiency, and innovation.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
                            <div className="space-y-4 text-muted-foreground">
                                <p>
                                    Founded in 2018, Sample AI Services emerged from a simple yet powerful idea:
                                    artificial intelligence should be accessible to every business, regardless of size or industry.
                                </p>
                                <p>
                                    Our founders, a team of AI researchers and business strategists, recognized that while
                                    AI technology was advancing rapidly, most businesses struggled to harness its potential.
                                    We set out to bridge that gap.
                                </p>
                                <p>
                                    Today, we serve over 500 enterprise clients across 50+ countries, processing millions
                                    of AI predictions daily. But our mission remains unchanged: to democratize AI and
                                    empower businesses to achieve extraordinary results.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                                alt="Team collaboration"
                                className="rounded-2xl shadow-2xl"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            The principles that guide everything we do
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center p-6"
                            >
                                <div className="mb-4 p-4 bg-primary/10 rounded-full inline-block">
                                    <value.icon className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                                <p className="text-muted-foreground">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
                        <p className="text-xl text-muted-foreground">Key milestones in our growth</p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        {milestones.map((milestone, index) => (
                            <motion.div
                                key={milestone.year}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="flex gap-8 mb-12 last:mb-0"
                            >
                                <div className="flex-shrink-0 w-24 text-right">
                                    <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                                </div>
                                <div className="flex-grow pb-12 border-l-2 border-primary/20 pl-8 relative">
                                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full" />
                                    <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                                    <p className="text-muted-foreground">{milestone.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Trusted by industry leaders worldwide
                        </p>
                    </div>
                    <AnimatedTestimonials testimonials={testimonials} autoplay />
                </div>
            </section>
        </div>
    )
}
