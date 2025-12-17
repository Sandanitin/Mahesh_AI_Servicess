import { motion } from 'framer-motion'
import { Briefcase, MapPin, Clock, DollarSign, Users, Rocket, Heart, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Career() {
    const benefits = [
        {
            icon: DollarSign,
            title: 'Competitive Salary',
            description: 'Industry-leading compensation packages with equity options',
        },
        {
            icon: Heart,
            title: 'Health & Wellness',
            description: 'Comprehensive health insurance and wellness programs',
        },
        {
            icon: Rocket,
            title: 'Growth Opportunities',
            description: 'Continuous learning and career advancement paths',
        },
        {
            icon: Users,
            title: 'Collaborative Culture',
            description: 'Work with talented teams on cutting-edge AI projects',
        },
        {
            icon: Clock,
            title: 'Work-Life Balance',
            description: 'Flexible hours and remote work options',
        },
        {
            icon: TrendingUp,
            title: 'Innovation Focus',
            description: 'Access to latest AI tools and technologies',
        },
    ]

    const openings = [
        {
            title: 'Senior AI/ML Engineer',
            department: 'Engineering',
            location: 'San Francisco, CA / Remote',
            type: 'Full-time',
            description: 'Build and deploy cutting-edge machine learning models for our AI platform. Work with large-scale datasets and modern ML frameworks.',
            requirements: [
                '5+ years of experience in ML/AI development',
                'Strong Python and TensorFlow/PyTorch skills',
                'Experience with cloud platforms (AWS/GCP/Azure)',
                'PhD or Master\'s in Computer Science or related field',
            ],
        },
        {
            title: 'Product Manager - AI Solutions',
            department: 'Product',
            location: 'New York, NY / Remote',
            type: 'Full-time',
            description: 'Lead product strategy and roadmap for our AI-powered business solutions. Work closely with engineering and customers.',
            requirements: [
                '3+ years of product management experience',
                'Understanding of AI/ML technologies',
                'Strong analytical and communication skills',
                'Experience with B2B SaaS products',
            ],
        },
        {
            title: 'AI Research Scientist',
            department: 'Research',
            location: 'Boston, MA / Remote',
            type: 'Full-time',
            description: 'Conduct cutting-edge research in natural language processing and computer vision. Publish papers and develop novel AI algorithms.',
            requirements: [
                'PhD in Computer Science, AI, or related field',
                'Published research in top-tier conferences',
                'Expertise in deep learning and neural networks',
                'Strong mathematical and statistical background',
            ],
        },
        {
            title: 'Customer Success Manager',
            department: 'Customer Success',
            location: 'Austin, TX / Remote',
            type: 'Full-time',
            description: 'Help enterprise clients maximize value from our AI platform. Drive adoption, retention, and customer satisfaction.',
            requirements: [
                '3+ years in customer success or account management',
                'Technical aptitude and ability to learn AI concepts',
                'Excellent communication and presentation skills',
                'Experience with enterprise SaaS customers',
            ],
        },
        {
            title: 'DevOps Engineer',
            department: 'Engineering',
            location: 'Seattle, WA / Remote',
            type: 'Full-time',
            description: 'Build and maintain infrastructure for our AI platform. Ensure scalability, reliability, and security of our systems.',
            requirements: [
                '4+ years of DevOps/SRE experience',
                'Expertise in Kubernetes, Docker, and CI/CD',
                'Experience with cloud infrastructure (AWS/GCP)',
                'Strong scripting and automation skills',
            ],
        },
        {
            title: 'AI Solutions Architect',
            department: 'Solutions',
            location: 'Chicago, IL / Remote',
            type: 'Full-time',
            description: 'Design and implement AI solutions for enterprise clients. Bridge the gap between technical capabilities and business needs.',
            requirements: [
                '5+ years in solutions architecture or consulting',
                'Deep understanding of AI/ML technologies',
                'Strong customer-facing and presentation skills',
                'Experience with enterprise integrations',
            ],
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
                            Join Our Mission to Democratize AI
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8">
                            Build the future of artificial intelligence with a team of world-class engineers,
                            researchers, and innovators.
                        </p>
                        <Button size="lg" className="text-lg px-8 py-6">
                            View Open Positions
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* Why Join Us */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Why Work With Us</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            We offer more than just a job - we offer a chance to shape the future of AI
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="p-6 rounded-2xl border border-border bg-card hover:shadow-lg hover:border-primary/50 transition-all duration-300"
                            >
                                <div className="mb-4 p-3 bg-primary/10 rounded-lg inline-block">
                                    <benefit.icon className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                                <p className="text-muted-foreground">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Open Positions</h2>
                        <p className="text-xl text-muted-foreground">
                            Find your next opportunity with us
                        </p>
                    </div>

                    <div className="max-w-5xl mx-auto space-y-6">
                        {openings.map((job, index) => (
                            <motion.div
                                key={job.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg hover:border-primary/50 transition-all duration-300"
                            >
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                            <span className="flex items-center gap-1">
                                                <Briefcase className="h-4 w-4" />
                                                {job.department}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <MapPin className="h-4 w-4" />
                                                {job.location}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock className="h-4 w-4" />
                                                {job.type}
                                            </span>
                                        </div>
                                    </div>
                                    <Button>Apply Now</Button>
                                </div>

                                <p className="text-muted-foreground mb-6">{job.description}</p>

                                <div>
                                    <h4 className="font-semibold mb-3">Requirements:</h4>
                                    <ul className="space-y-2">
                                        {job.requirements.map((req) => (
                                            <li key={req} className="flex items-start gap-2 text-muted-foreground">
                                                <span className="text-primary mt-1">•</span>
                                                <span>{req}</span>
                                            </li>
                                        ))}
                                    </ul>
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
                        <h2 className="text-4xl font-bold mb-6">Don't See the Right Role?</h2>
                        <p className="text-xl text-muted-foreground mb-8">
                            We're always looking for talented individuals. Send us your resume and let's talk about how you can contribute to our mission.
                        </p>
                        <Button size="lg" className="text-lg px-8 py-6">
                            Send Your Resume
                        </Button>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
