import { LazyContainer, AnimatedStaggerSection } from '@/components/motion/animations';
import { HeroBadge } from '@/app/(main)/(home)/components/hero/hero-badge';
import { Heading } from '@/app/(main)/(home)/components/heading';
import { CtaButton } from '@/app/(main)/(home)/components/hero/cta-button';

export function HeroSection() {
    return (
        <LazyContainer>
            <AnimatedStaggerSection className="min-h-svh -mt-12 flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20">
                <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center gap-y-8 text-center">
                        <HeroBadge />
                        <Heading
                            titleComponent="h1"
                            title={
                                <>
                                    <span className="block text-primary">Powerful Tools</span>
                                    <span className="block text-foreground">For Modern Developers</span>
                                </>
                            }
                            description={
                                <>
                                    Your ultimate toolkit with all the essential utilities for development, security and productivity in one place.
                                    <span className="mt-2 block font-medium text-foreground sm:mt-0 sm:inline"> Free, fast, and secure.</span>
                                </>
                            }
                        />
                        <CtaButton />
                    </div>
                </div>
            </AnimatedStaggerSection>
        </LazyContainer>
    );
}
