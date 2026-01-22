import Footer from '@/components/medical/Footer';
import { Head, Link } from '@inertiajs/react';
import { ArrowLeft, Clock, User, Calendar } from 'lucide-react';

interface Article {
    title: string;
    slug: string;
    content: string;
    meta_title: string;
    meta_description: string;
    created_at: string;
}

interface ShowProps {
    article: Article;
}

export default function BlogShow({ article }: ShowProps) {
    // Generate Schema.org Article markup
    const schemaMarkup = {
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        "headline": article.title,
        "description": article.meta_description,
        "author": {
            "@type": "Person",
            "name": "Sekouti Abdelaziz"
        },
        "datePublished": article.created_at,
        "publisher": {
            "@type": "MedicalBusiness",
            "name": "Sekouti Health",
            "logo": {
                "@type": "ImageObject",
                "url": "https://sekouti-health.com/logo.png" // Fallback
            }
        }
    };

    return (
        <div className="min-h-screen bg-background font-sans text-foreground">
            <Head title={article.meta_title || article.title}>
                <meta name="description" content={article.meta_description} />
                <script type="application/ld+json">
                    {JSON.stringify(schemaMarkup)}
                </script>
            </Head>

            {/* Navigation Placeholder */}
            <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur">
                <div className="container mx-auto flex h-16 items-center justify-between px-6">
                    <Link href="/" className="text-xl font-bold text-primary tracking-tight">
                        Sekouti <span className="text-foreground">Health</span>
                    </Link>
                    <nav className="flex items-center gap-8 text-sm font-medium">
                        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                        <Link href="/blog" className="hover:text-primary transition-colors text-primary">Blog</Link>
                    </nav>
                </div>
            </header>

            <main className="container mx-auto px-6 py-16">
                <div className="max-w-3xl mx-auto">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-12 transition-colors uppercase font-bold tracking-widest"
                    >
                        <ArrowLeft className="h-4 w-4" /> Back to Blog
                    </Link>

                    <article>
                        <header className="mb-12">
                            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8 leading-tight">
                                {article.title}
                            </h1>

                            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-y border-border py-4">
                                <div className="flex items-center gap-2">
                                    <User className="h-4 w-4" />
                                    By <span className="text-foreground font-semibold">Sekouti Abdelaziz</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4" />
                                    {new Date(article.created_at).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="h-4 w-4" />
                                    5 min read
                                </div>
                            </div>
                        </header>

                        <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary dark:prose-invert">
                            {article.content.split('\n').map((para, i) => (
                                <p key={i} className="mb-6 leading-relaxed">
                                    {para}
                                </p>
                            ))}
                        </div>
                    </article>

                    <div className="mt-20 p-8 bg-secondary rounded-2xl border border-secondary text-center">
                        <h3 className="text-xl font-bold mb-4">Questions about this topic?</h3>
                        <p className="text-muted-foreground mb-6">
                            Sekouti Abdelaziz is available for direct health consultations via WhatsApp. Get personalized advice today.
                        </p>
                        <button
                            className="bg-primary text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-primary/90 transition-all"
                            onClick={() => window.open(`https://wa.me/212612236660?text=Hello, I read your article "${article.title}" and have some questions.`, '_blank')}
                        >
                            Ask Me on WhatsApp
                        </button>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
