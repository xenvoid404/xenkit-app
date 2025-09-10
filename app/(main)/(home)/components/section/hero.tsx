'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Wrench, BadgeCheck, Clock, Zap, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { m, LazyMotion, domAnimation, type Variants } from 'framer-motion';

// A consistent transition for a smooth "ease-out" effect
const smoothTransition = {
    duration: 0.6,
    ease: [0.43, 0.13, 0.23, 0.96]
};

// Main container variant for staggering children
const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2
        }
    }
};

// Generic item variant, animates from bottom
const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: smoothTransition
    }
};

export function Hero() {
    return (
        <LazyMotion features={domAnimation}>
            <section className="relative flex min-h-dvh items-center justify-center bg-gradient-to-br from-background via-background to-muted/20">
                <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
                    <m.div
                        className="flex flex-col items-center gap-y-12 text-center"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <HeroBadge />
                        <HeroHeader />
                        <KeyFeaturesList />
                        <CtaButton />
                    </m.div>
                </div>
            </section>
        </LazyMotion>
    );
}

const HeroBadge = () => (
    <m.div variants={itemVariants}>
        <Badge variant="outline" className="text-primary">
            <Wrench className="size-5" />
            <span>25+ Developer Tools Available</span>
        </Badge>
    </m.div>
);

const HeroHeader = () => {
    const headerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    // Title variant, animates from bottom
    const titleSpanVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: smoothTransition
        }
    };

    return (
        <m.header className="space-y-8" variants={headerVariants}>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                <m.span className="block text-primary" variants={titleSpanVariants}>
                    Powerful Tools
                </m.span>
                <m.span className="block text-foreground" variants={titleSpanVariants}>
                    For Modern Developers
                </m.span>
            </h1>
            <m.p
                className="mx-auto max-w-3xl font-light leading-relaxed text-muted-foreground sm:text-xl lg:text-2xl"
                variants={itemVariants}
            >
                Your ultimate toolkit with all the essential utilities for development, security and productivity in one place.
                <span className="mt-2 block font-medium text-foreground sm:mt-0 sm:inline"> Free, fast, and secure.</span>
            </m.p>
        </m.header>
    );
};

const KeyFeaturesList = () => {
    const keyFeatures = [
        { icon: BadgeCheck, text: 'No signup required' },
        { icon: Clock, text: 'Instant result' },
        { icon: Zap, text: 'Always free' }
    ];

    const listContainerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    // List item variant, animates from bottom
    const listItemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: smoothTransition
        }
    };

    return (
        <m.ul
            className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground sm:gap-8"
            variants={listContainerVariants}
        >
            {keyFeatures.map(({ icon: Icon, text }) => (
                <m.li key={text} variants={listItemVariants}>
                    <Badge variant="outline">
                        <Icon className="size-5" />
                        <span>{text}</span>
                    </Badge>
                </m.li>
            ))}
        </m.ul>
    );
};

const CtaButton = () => (
    <m.div variants={itemVariants}>
        <Button asChild size="lg" className="group">
            <Link href="#featured-tools">
                Explore Tools
                <ArrowRight className="ml-2 size-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
        </Button>
    </m.div>
);