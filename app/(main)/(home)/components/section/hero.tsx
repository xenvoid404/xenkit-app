import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Wrench, BadgeCheck, Clock, Zap, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
    return (
        <section className="relative min-h-dvh flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20">
            <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
                <div className="text-center flex flex-col items-center gap-y-12">
                    <HeroBadge />
                    <HeroHeader />
                    <KeyFeaturesList />
                    <CtaButton />
                </div>
            </div>
        </section>
    );
}

const HeroBadge = () => {
    <Badge variant="outline" className="text-primary">
        <Wrench className="size-5" />
        <span>25+ Developer Tools Available</span>
    </Badge>;
};

const HeroHeader = () => {
    <header className="space-y-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1]">
            <span className="block text-primary">Powerful Tools</span>
            <span className="block text-foreground">For Modern Developers</span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed font-light">
            Your ultimate toolkit with all the essential utilities for development, security and productivity in one place.
            <span className="text-foreground font-medium block mt-2 sm:inline sm:mt-0"> Free, fast, and secure.</span>
        </p>
    </header>;
};

const KeyFeaturesList = () => {
    const keyFeatures = [
        { icon: BadgeCheck, text: 'No signup required' },
        { icon: Clock, text: 'Instant result' },
        { icon: Zap, text: 'Always free' }
    ];

    return (
        <ul className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-sm text-muted-foreground">
            {keyFeatures.map(({ icon: Icon, text }) => (
                <li key={text}>
                    <Badge variant="outline">
                        <Icon className="size-5" />
                        <span>{text}</span>
                    </Badge>
                </li>
            ))}
        </ul>
    );
};

const CtaButton = () => {
    <Button asChild size="lg" className="group">
        <Link href="#featured-tools">
            Explore Tools
            <ArrowRight className="size-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
    </Button>;
};
