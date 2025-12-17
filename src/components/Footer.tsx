import { Link } from 'react-router-dom'
import { Brain, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react'

export function Footer() {
    const currentYear = new Date().getFullYear()

    const footerLinks = {
        company: [
            { name: 'About Us', href: '/about' },
            { name: 'Services', href: '/services' },
            { name: 'Career', href: '/career' },
            { name: 'Contact', href: '/contact' },
        ],
        services: [
            { name: 'Sales AI', href: '/services#sales' },
            { name: 'Customer Service AI', href: '/services#service' },
            { name: 'Marketing AI', href: '/services#marketing' },
            { name: 'Commerce AI', href: '/services#commerce' },
        ],
        legal: [
            { name: 'Privacy Policy', href: '#' },
            { name: 'Terms of Service', href: '#' },
        ],
    }

    return (
        <footer className="bg-muted/30 border-t border-border">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <Link to="/" className="flex items-center space-x-2 group">
                            <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                                <Brain className="h-6 w-6 text-primary" />
                            </div>
                            <span className="text-lg font-bold bg-gradient-to-r from-primary to-primary-600 bg-clip-text text-transparent">
                                Sample AI Services
                            </span>
                        </Link>
                        <p className="text-sm text-muted-foreground">
                            Empowering businesses with cutting-edge AI solutions for the future of work.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Github className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Company</h3>
                        <ul className="space-y-2">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.href}
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Services</h3>
                        <ul className="space-y-2">
                            {footerLinks.services.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.href}
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Contact</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start space-x-3 text-sm text-muted-foreground">
                                <Mail className="h-5 w-5 text-primary mt-0.5" />
                                <span>contact@sampleai.com</span>
                            </li>
                            <li className="flex items-start space-x-3 text-sm text-muted-foreground">
                                <Phone className="h-5 w-5 text-primary mt-0.5" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-start space-x-3 text-sm text-muted-foreground">
                                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                                <span>123 AI Street, Tech City, TC 12345</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-border">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-sm text-muted-foreground text-center md:text-left">
                            © {currentYear} Sample AI Services. All rights reserved. | Designed and developed by{' '}
                            <a
                                href="https://www.vikrin.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline"
                            >
                                Vikrin
                            </a>
                        </p>
                        <div className="flex space-x-6">
                            {footerLinks.legal.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
