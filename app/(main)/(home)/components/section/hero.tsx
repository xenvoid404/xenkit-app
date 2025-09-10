import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Wrench, BadgeCheck, Clock, Zap, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { HeroWrapper } from '../wrapper/hero-wrapper';
import { AnimatedHeader } from '../hero/animated-header';
import { AnimatedFeatures } from '../hero/animated-features';
import { AnimatedItem } from '../hero/animated-item';

export function Hero() {
    const badge = (
        <Badge variant="outline" className="gap-3 py-3 px-4 text-primary">
            <Wrench className="size-5" />
            <span>25+ Developer Tools Available</span>
        </Badge>
    );

    const heading = (
        <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
            <span className="block text-primary">Powerful Tools</span>
            <span className="block text-foreground">For Modern Developers</span>
        </h1>
    );

    const paragraph = (
        <p className="mx-auto max-w-3xl font-light leading-relaxed text-muted-foreground sm:text-xl lg:text-2xl">
            Your ultimate toolkit with all the essential utilities for development, security and productivity in one place.
            <span className="mt-2 block font-medium text-foreground sm:mt-0 sm:inline"> Free, fast, and secure.</span>
        </p>
    );

    const keyFeatures = [
        { icon: BadgeCheck, text: 'No signup required' },
        { icon: Clock, text: 'Instant result' },
        { icon: Zap, text: 'Always free' }
    ];

    const features = keyFeatures.map(({ icon: Icon, text }) => (
        <Badge key={text} variant="outline">
            <Icon className="size-5" />
            <span>{text}</span>
        </Badge>
    ));

    const cta = (
        <Button asChild size="lg" className="group">
            <Link href="#featured-tools">
                Explore Tools
                <ArrowRight className="ml-2 size-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
        </Button>
    );

    return (
        <section className="relative flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20">
            <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
                <HeroWrapper>
                    <AnimatedItem>{badge}</AnimatedItem>
                    <AnimatedHeader heading={heading} paragraph={paragraph} />
                    <AnimatedFeatures features={features} />
                    <AnimatedItem>{cta}</AnimatedItem>
                </HeroWrapper>
            </div>
        </section>
    );
}
