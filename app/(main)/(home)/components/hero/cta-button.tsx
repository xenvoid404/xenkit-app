import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { AnimatedSlideInUp } from '@/components/motion/animations';

export function CtaButton() {
    return (
        <AnimatedSlideInUp>
            <Button size="lg" asChild>
                <Link href="#tools">
                    Explore Tools
                    <ArrowRight className="ml-2 size-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
            </Button>
        </AnimatedSlideInUp>
    );
}
