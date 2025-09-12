import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Wrench, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { LazyContainer, AnimatedSlideUp } from '@/components/motion/animations';

export function HeroSection() {
    return (
        <LazyContainer>
            <section className="relative min-h-svh flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20">
                <div className="relative z-10 mx-auto max-w-8xl px-4 py-20 sm:px-6 lg:px-8">
                    <AnimatedSlideUp>
                        <Badge variant="outline" className="gap-3 py-3 px-4 text-primary text-xs">
                            <Wrench className="size-5" />
                            <span>25+ Developer Tools Available</span>
                        </Badge>
                    </AnimatedSlideUp>
                    <AnimatedSlideUp>
                        <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                            <span className="block text-primary">Powerful Tools</span>
                            <span className="block text-foreground">For Modern Developers</span>
                        </h1>
                    </AnimatedSlideUp>
                    <AnimatedSlideUp>
                        <p className="mx-auto max-w-4xl font-light leading-relaxed text-muted-foreground sm:text-xl lg:text-2xl">
                            Your ultimate toolkit with all the essential utilities for development, security and productivity in one place.
                            <span className="mt-2 block font-medium text-foreground sm:mt-0 sm:inline"> Free, fast, and secure.</span>
                        </p>
                    </AnimatedSlideUp>
                    <AnimatedSlideUp>
                        <Button asChild size="lg" className="group">
                            <Link href="#featured-tools">
                                Explore Tools
                                <ArrowRight className="ml-2 size-5 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                        </Button>
                    </AnimatedSlideUp>
                </div>
            </section>
        </LazyContainer>
    );
}
