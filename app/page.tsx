'''
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Wrench, BadgeCheck, Clock, Zap, ArrowRight } from 'lucide-react';

// Data untuk fitur-fitur utama, lebih mudah dikelola di sini.
const keyFeatures = [
    { icon: BadgeCheck, text: 'No signup required' },
    { icon: Clock, text: 'Instant results' },
    { icon: Zap, text: 'Always free' }
];

/**
 * Komponen untuk bagian header utama (judul dan subjudul).
 * Menggunakan tag <header> untuk semantic grouping.
 */
const HeroHeader = () => (
    <header className="space-y-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1]">
            <span className="block text-accent">Powerful Tools</span>
            <span className="block text-foreground">For Modern Developers</span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed font-light">
            Your ultimate toolkit with all the essential utilities for development, security and productivity in one place.
            <span className="text-foreground font-medium block mt-2 sm:inline sm:mt-0"> Free, fast, and secure.</span>
        </p>
    </header>
);

/**
 * Komponen untuk daftar fitur utama.
 * Menggunakan <ul> dan <li> untuk struktur daftar yang semantik.
 */
const KeyFeaturesList = () => (
    <ul className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-sm text-muted-foreground">
        {keyFeatures.map(({ icon: Icon, text }) => (
            <li key={text}>
                <Badge variant="outline" className="gap-3 py-1.5 px-4">
                    <Icon className="size-4" />
                    <span>{text}</span>
                </Badge>
            </li>
        ))}
    </ul>
);

export default function Home() {
    return (
        <section className="relative min-h-dvh flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20">
            <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
                <div className="text-center flex flex-col items-center gap-y-12">
                    <Badge variant="outline" className="gap-3 py-1.5 px-4">
                        <Wrench className="size-4" />
                        <span>25+ Developer Tools Available</span>
                    </Badge>

                    <HeroHeader />

                    <KeyFeaturesList />

                    <Button asChild size="lg" className="group">
                        <Link href="#featured-tools">
                            Explore Tools
                            <ArrowRight className="size-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
'''