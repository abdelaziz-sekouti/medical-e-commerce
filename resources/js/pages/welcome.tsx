import { dashboard, login, register } from '@/routes';
import type { SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import Hero from '@/components/medical/Hero';
import ServiceCard from '@/components/medical/ServiceCard';
import Footer from '@/components/medical/Footer';
import { ArrowRight, BookOpen, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface Service {
    id: number;
    title: string;
    slug: string;
    description: string;
    price: number;
    duration: string;
    service_type: string;
}

interface Article {
    id: number;
    title: string;
    slug: string;
    meta_description: string;
    created_at: string;
}

interface WelcomeProps {
    canRegister?: boolean;
    services: Service[];
    articles: Article[];
}

export default function Welcome({
    canRegister = true,
    services = [],
    articles = [],
}: WelcomeProps) {
    const { auth } = usePage<SharedData>().props;

    return (
        <div className="min-h-screen bg-indigo-600 font-sans antialiased text-foreground">
            <Head title="Premium Online Health Services & Consultations">
                <meta name="description" content="Expert online medical consultations, preventive care, and health services by Sekouti Abdelaziz. Order via WhatsApp for immediate support." />
            </Head>

            {/* Navigation */}
            <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-indigo-600 backdrop-blur supports-backdrop-filter:bg-indigo-600">
                <div className="container mx-auto flex h-16 items-center justify-between px-6">
                    <div className="flex items-center gap-2">
                        <Link href="/" className="text-xl font-bold text-primary tracking-tight">
                            Sekouti <span className="text-foreground">Health</span>
                        </Link>
                    </div>

                    <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                        <a href="#services" className="hover:text-primary transition-colors">Services</a>
                        <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
                        <a href="#footer" className="hover:text-primary transition-colors">Contact</a>
                    </nav>

                    <div className="flex items-center gap-4">
                        {auth.user ? (
                            <Link href={dashboard()}>
                                <Button size="sm" variant="outline">Dashboard</Button>
                            </Link>
                        ) : (
                            <>
                                <Link href={login()} className="text-sm font-medium hover:text-primary transition-colors px-2">Log in</Link>
                                {canRegister && (
                                    <Link href={register()}>
                                        <Button size="sm" className="bg-blue-700 hover:bg-blue-300 hover:text-black  text-white cursor-pointer transition-all duration-300 ease-in-out">Join Now</Button>
                                    </Link>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </header>

            <main>
                {/* Hero Section */}
                <Hero />

                {/* Trust Badges */}
                <section className="bg-indigo-600 py-12 border-y border-border">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            <div className="flex flex-col items-center gap-2">
                                <CheckCircle2 className="h-8 w-8 text-primary" />
                                <h3 className="font-semibold text-lg">Certified Professionals</h3>
                                <p className="text-sm text-muted-foreground">Vetted medical experts for every consultation.</p>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <CheckCircle2 className="h-8 w-8 text-primary" />
                                <h3 className="font-semibold text-lg">Instant WhatsApp Booking</h3>
                                <p className="text-sm text-muted-foreground">Fast, direct communication with our care team.</p>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <CheckCircle2 className="h-8 w-8 text-primary" />
                                <h3 className="font-semibold text-lg">Secure & Confidential</h3>
                                <p className="text-sm text-muted-foreground">Your health data is handled with strict privacy.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section id="services" className="py-24 bg-secondary/20">
                    <div className="container mx-auto px-6">
                        <div className="mb-16 text-center">
                            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">Our Health Services</h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                Tailored consultation packages designed to meet your specific healthcare needs. Order direct via WhatsApp.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {services.map((service) => (
                                <ServiceCard
                                    key={service.id}
                                    title={service.title}
                                    description={service.description}
                                    price={service.price}
                                    duration={service.duration}
                                    serviceType={service.service_type}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Blog Section */}
                <section className="py-24">
                    <div className="container mx-auto px-6">
                        <div className="flex items-center justify-between mb-12">
                            <div>
                                <h2 className="text-3xl font-bold tracking-tight">Latest Health Insights</h2>
                                <p className="text-muted-foreground mt-2">Expert advice on wellness and preventive care.</p>
                            </div>
                            <Link href="/blog" className="hidden md:flex items-center gap-2 text-primary font-semibold hover:underline">
                                View all articles <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {articles.map((article) => (
                                <motion.div
                                    key={article.id}
                                    whileHover={{ y: -5 }}
                                    className="group flex flex-col bg-white border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all"
                                >
                                    <div className="p-6">
                                        <div className="flex items-center gap-2 text-black text-xs font-bold uppercase tracking-wider mb-3">
                                            <BookOpen className="h-3 w-3 text-black" />
                                            Article
                                        </div>
                                        <h3 className="text-xl text-blue-600 font-bold mb-3 group-hover:text-indigo-600 transition-colors">
                                            <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                                        </h3>
                                        <p className="text-muted-foreground hover:text-black text-sm line-clamp-3 mb-6">
                                            {article.meta_description}
                                        </p>
                                        <Link
                                            href={`/blog/${article.slug}`}
                                            className="inline-flex items-center gap-1 text-sm font-semibold  group-hover:text-indigo-600 transition-colors text-indigo-700  hover:text-amber-600  "
                                        >
                                            Read More <ArrowRight className="h-4 w-4 text-indigo-700 hover:text-amber-600 "  />
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-indigo-700 text-white overflow-hidden relative">
                    <div className="container mx-auto px-6 text-center relative z-10">
                        <h2 className="text-3xl font-bold mb-6 text-">Ready to prioritize your health?</h2>
                        <p className="text-amber-200 text-lg mb-10 max-w-xl mx-auto">
                            Start your journey towards better health today. Our team is ready to assist you via WhatsApp for quick and easy consultations.
                        </p>
                        <Button
                            variant="secondary"
                            size="lg"
                            className="bg-white text-amber-500  hover:bg-indigo-600 hover:text-white font-bold px-8 shadow-lg transition-all cursor-pointer"
                            onClick={() => window.open('https://wa.me/212612236660', '_blank')}
                        >
                            Book a Consultation Now
                        </Button>
                    </div>
                    {/* Decorative circles */}
                    <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
