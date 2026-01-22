import { Link } from '@inertiajs/react';
import { Facebook, Instagram, Linkedin, Mail, Phone, Twitter } from 'lucide-react';

export default function Footer() {
    return (
        <footer id="footer" className="bg-indigo--600 border-t border-border mt-20">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="text-xl font-bold text-primary mb-4">Sekouti Abdelaziz</h3>
                        <p className="text-muted-foreground mb-4">
                            Professional online health services and consultations. Providing accessible healthcare for everyone, everywhere.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Facebook className="h-5 w-5" /></a>
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></a>
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram className="h-5 w-5" /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
                            <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
                            <li><Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
                            <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2">
                            <li><Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Contact Me</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-muted-foreground">
                                <Phone className="h-4 w-4" />
<a  href="tel:+212612236660">+212612236660</a>
                            </li>
                            <li className="flex items-center gap-2 text-muted-foreground">
                                <Mail className="h-4 w-4" />
                                contact@sekouti-health.com
                            </li>
                            <li className="mt-4 p-4 bg-secondary rounded-lg border border-secondary">
                                <p className="text-xs font-medium text-secondary-foreground">
                                    Sekouti Abdelaziz - Online Health Services & Consultations
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border mt-12 pt-8 text-center text-sm text-white">
                    <p>&copy; {new Date().getFullYear()} Sekouti Abdelaziz. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
