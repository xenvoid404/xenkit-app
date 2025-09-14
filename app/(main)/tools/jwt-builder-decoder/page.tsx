import { AnimatedStaggerSection, AnimatedSlideInUp } from '@/components/motion/animations';
import { Headline } from '@/components/shared/headline';
import { SubHeadline } from '@/components/shared/sub-headline';
import { getToolsBySlug } from '@/lib/tools-data';
import { Separator } from '@/components/ui/separator';

export default function Page() {
    const tool = getToolsBySlug('jwt-builder-decoder');

    return (
        <AnimatedStaggerSection className="flex flex-col gap-4 py-8 px-6">
            <AnimatedSlideInUp>
                <Headline as="h1" className="text-2xl sm:text-3xl">
                    <span className="block text-primary">{tool.name}</span>
                </Headline>
            </AnimatedSlideInUp>
            <AnimatedSlideInUp>
                <Separator />
            </AnimatedSlideInUp>
            <AnimatedSlideInUp>
                <SubHeadline>{tool.description}</SubHeadline>
            </AnimatedSlideInUp>
        </AnimatedStaggerSection>
    );
}
