import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
    })
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Here you would typically send the form data to your backend
        console.log('Form submitted:', formData)
        setIsSubmitted(true)
        setTimeout(() => {
            setIsSubmitted(false)
            setFormData({ name: '', email: '', company: '', phone: '', message: '' })
        }, 3000)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const contactInfo = [
        {
            icon: Mail,
            title: 'Email Us',
            details: 'contact@sampleai.com',
            link: 'mailto:contact@sampleai.com',
        },
        {
            icon: Phone,
            title: 'Call Us',
            details: '+1 (555) 123-4567',
            link: 'tel:+15551234567',
        },
        {
            icon: MapPin,
            title: 'Visit Us',
            details: '123 AI Street, Tech City, TC 12345',
            link: 'https://maps.google.com',
        },
    ]

    const offices = [
        {
            city: 'San Francisco',
            address: '123 AI Street, San Francisco, CA 94105',
            phone: '+1 (555) 123-4567',
        },
        {
            city: 'New York',
            address: '456 Tech Avenue, New York, NY 10001',
            phone: '+1 (555) 234-5678',
        },
        {
            city: 'London',
            address: '789 Innovation Road, London, UK EC1A 1BB',
            phone: '+44 20 1234 5678',
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
                            Get in Touch
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Have questions about our AI solutions? We're here to help. Reach out to our team and let's discuss how we can transform your business.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-12">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {contactInfo.map((info, index) => (
                            <motion.a
                                key={info.title}
                                href={info.link}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="p-6 rounded-2xl border border-border bg-card hover:shadow-lg hover:border-primary/50 transition-all duration-300 text-center group"
                            >
                                <div className="mb-4 p-3 bg-primary/10 rounded-lg inline-block group-hover:bg-primary/20 transition-colors">
                                    <info.icon className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                                <p className="text-muted-foreground">{info.details}</p>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form & Map */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                        placeholder="john@company.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                                        Company
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                        placeholder="Your Company"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                        placeholder="+1 (555) 123-4567"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                                        placeholder="Tell us about your project..."
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    size="lg"
                                    className="w-full text-lg group"
                                    disabled={isSubmitted}
                                >
                                    {isSubmitted ? (
                                        <>
                                            <CheckCircle className="mr-2 h-5 w-5" />
                                            Message Sent!
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </Button>
                            </form>
                        </motion.div>

                        {/* Office Locations */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold mb-6">Our Offices</h2>
                            <div className="space-y-6">
                                {offices.map((office, index) => (
                                    <motion.div
                                        key={office.city}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="p-6 rounded-2xl border border-border bg-card hover:shadow-lg hover:border-primary/50 transition-all duration-300"
                                    >
                                        <h3 className="text-xl font-semibold mb-3 text-primary">{office.city}</h3>
                                        <div className="space-y-2 text-muted-foreground">
                                            <p className="flex items-start gap-2">
                                                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                                                {office.address}
                                            </p>
                                            <p className="flex items-center gap-2">
                                                <Phone className="h-5 w-5 flex-shrink-0" />
                                                {office.phone}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Map Placeholder */}
                            <div className="mt-8 rounded-2xl overflow-hidden border border-border">
                                <div className="aspect-video bg-muted/30 flex items-center justify-center">
                                    <div className="text-center">
                                        <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                                        <p className="text-muted-foreground">Interactive Map</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                        <p className="text-xl text-muted-foreground">
                            Quick answers to common questions
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-4">
                        {[
                            {
                                q: 'How quickly can I get started with your AI solutions?',
                                a: 'Most clients are up and running within 2-4 weeks. Our team handles the entire implementation process, from integration to training.',
                            },
                            {
                                q: 'Do you offer custom AI solutions?',
                                a: 'Yes! While we have pre-built solutions, we also develop custom AI models tailored to your specific business needs and industry.',
                            },
                            {
                                q: 'What kind of support do you provide?',
                                a: 'We offer 24/7 technical support, dedicated account managers, and ongoing training for your team. Enterprise clients also get access to our AI specialists.',
                            },
                            {
                                q: 'Is my data secure?',
                                a: 'Absolutely. We use bank-grade encryption, comply with GDPR and SOC 2 standards, and never share your data with third parties.',
                            },
                        ].map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="p-6 rounded-2xl border border-border bg-card"
                            >
                                <h3 className="text-lg font-semibold mb-2">{faq.q}</h3>
                                <p className="text-muted-foreground">{faq.a}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
