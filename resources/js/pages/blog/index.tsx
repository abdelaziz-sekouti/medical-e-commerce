import Footer from '@/components/medical/Footer';
import { Head, Link } from '@inertiajs/react';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

interface Article {
    id: number;
    title: string;
    slug: string;
    meta_description: string;
    created_at: string;
}

interface IndexProps {
    articles: Article[];
}

export default function BlogIndex({ articles = [] }: IndexProps) {
    return (
        <div className="min-h-screen bg-background font-sans text-foreground">
            <Head title="Medical Health Blog & Insights">
                <meta name="description" content="Read latest articles on tele-health, preventive care, and medical education from Sekouti Abdelaziz." />
            </Head>

            {/* Navigation Placeholder - Should ideally be a shared component */}
            <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur">
                <div className="container mx-auto flex h-16 items-center justify-between px-6">
                    <Link href="/" className="text-xl font-bold text-primary tracking-tight">
                        Sekouti <span className="text-foreground">Health</span>
                    </Link>
                    <nav className="flex items-center gap-8 text-sm font-medium">
                        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                        <Link href="/blog" className="text-primary transition-colors">Blog</Link>
                    </nav>
                </div>
            </header>

            <main className="container mx-auto px-6 py-20">
                <div className="max-w-4xl mx-auto mb-16 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 mt-12">Medical Insights & <br /><span className="text-primary italic">Health Education</span></h1>
                    <p className="text-lg text-muted-foreground">
                        Stay informed with professional advice on wellness, preventive healthcare, and the latest trends in digital medicine.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {articles.map((article) => (
                        <motion.article
                            key={article.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white border border-border rounded-2xl overflow-hidden hover:shadow-2xl hover:border-primary/20 transition-all flex flex-col h-full group"
                        >
                            <div className="p-8 flex flex-col h-full">
                                <div className="flex items-center gap-3  text-xs font-bold uppercase tracking-widest mb-4 text-indigo-600">
                                    <BookOpen className="h-3.4 w-3.5" />
                                    Education
                                </div>
                                <h2 className="text-2xl text-black font-bold mb-4 group-hover:text-indigo-600 transition-colors">
                                    <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                                </h2>
                                <p className="text-amber-900 mb-8 line-clamp-3 leading-relaxed">
                                    {article.meta_description}
                                </p>
                                <div className="mt-auto flex items-center justify-between pt-6 border-t border-border">
                                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                        <Clock className="h-3 w-3" />
                                        {new Date(article.created_at).toLocaleDateString()}
                                    </div>
                                    <Link
                                        href={`/blog/${article.slug}`}
                                        className="inline-flex items-center gap-1.5 text-sm font-bold text-foreground group-hover:gap-2 transition-all"
                                    >
                                        READ <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}
