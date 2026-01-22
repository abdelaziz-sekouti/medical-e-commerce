import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-indigo-400 py-20 lg:py-32 min-h-[600px] flex items-center">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/hero-bg.png"
                    alt="Healthcare indigo-400"
                    className="h-full w-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-linear-to-r from-indigo-600 via-indigo-400 to-transparent"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-start text-left max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-6 inline-flex items-center rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-sm font-bold text-primary uppercase tracking-wider"
                    >
                        <span>Transforming Healthcare Online</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mb-6 text-5xl font-extrabold tracking-tight text-foreground sm:text-7xl leading-[1.1]"
                    >
                        Professional Consultations <br />
                        <span className="text-primary italic">At Your Fingertips</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-10 max-w-xl text-xl text-muted-foreground font-medium leading-relaxed"
                    >
                        Access top-quality medical consultations and preventive care services from the comfort of your home. Trusted by Sekouti Abdelaziz for reliable online healthcare.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-wrap items-center gap-4"
                    >
                        <Button
                            size="lg"
                            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold h-14 px-8 text-lg shadow-lg shadow-indigo-500/20 cursor-pointer transition-all duration-300 ease-in-out"
                            onClick={() => {
                                const contactSection = document.getElementById('services');
                                contactSection?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            Explore Services
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="border-primary/50 text-foreground hover:bg-primary/5 font-bold h-14 px-8 text-lg"
                            onClick={() => {
                                window.open('https://wa.me/212612236660?text=Hello,%20I%20would%20like%20to%20inquire%20about%20your%20health%20services.', '_blank');
                            }}
                        >
                            Order on WhatsApp
                        </Button>
                    </motion.div>
                </div>
            </div>

            {/* Soft decorative blur */}
            <div className="absolute top-0 right-0 z-0 h-full w-full opacity-10 pointer-events-none">
                <div className="absolute top-1/4 right-0 h-[500px] w-[500px] rounded-full bg-blue-300 blur-[320px]"></div>
                <div className="absolute bottom-1/4 left-1/4 h-[300px] w-[300px] rounded-full bg-indigo-600 blur-[210px]"></div>
            </div>
        </section>
    );
}
