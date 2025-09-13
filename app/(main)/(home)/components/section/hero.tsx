import { LazyContainer, AnimatedStaggerSection } from '@/components/motion/animations';
import { HeroBadge } from '@/app/(main)/(home)/components/hero/hero-badge';
import { Heading } from '@/app/(main)/(home)/components/hero/heading';
import { CtaButton } from '@/app/(main)/(home)/components/hero/cta-button';

export function Hero() {
    return (
        <LazyContainer>
            <AnimatedStaggerSection className="min-h-svh -mt-12 flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20">
                <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center gap-y-8 text-center">
                        <HeroBadge />
                        <Heading />
                        <CtaButton />
                    </div>
                </div>
            </AnimatedStaggerSection>
        </LazyContainer>
    );
}
