import { AnimatedStaggerSection, AnimatedSlideInUp } from '@/components/motion/animations';
import { Chip } from '@/app/(main)/(home)/components/hero/chip';
import { Headline } from '@/components/shared/headline';
import { SubHeadline } from '@/components/shared/sub-headline';
import { CtaButton } from '@/app/(main)/(home)/components/hero/cta-button';

export function Hero() {
    return (
        <AnimatedStaggerSection className="min-h-svh -mt-10 flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20">
            <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center gap-y-8 text-center">
                    <Chip />
                    <AnimatedSlideInUp>
                        <Headline as="h1">
                            <span className="block text-primary">Online Tools</span>
                            <span className="block text-foreground">In One Place</span>
                        </Headline>
                    </AnimatedSlideInUp>
                    <AnimatedSlideInUp>
                        <SubHeadline>
                            A free and open-source collection of powerful online tools for security, data conversion, and productivity.
                            <span className="mt-2 block font-medium text-foreground sm:mt-0 sm:inline"> Built for the tech-savvy user.</span>
                        </SubHeadline>
                    </AnimatedSlideInUp>
                    <CtaButton />
                </div>
            </div>
        </AnimatedStaggerSection>
    );
}
