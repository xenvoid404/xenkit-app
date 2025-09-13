import { AnimatedStaggerSection } from '@/components/motion/animations';
import { Chip } from '@/app/(main)/(home)/components/hero/chip';
import { Headline } from '@/app/(main)/(home)/components/hero/headline';
import { Subheadline } from '@/app/(main)/(home)/components/hero/subheadline';
import { CtaButton } from '@/app/(main)/(home)/components/hero/cta-button';

export function Hero() {
    return (
        <AnimatedStaggerSection className="min-h-svh -mt-10 flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20">
            <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center gap-y-8 text-center">
                    <Chip />
                    <Headline />
                    <Subheadline />
                    <CtaButton />
                </div>
            </div>
        </AnimatedStaggerSection>
    );
}
