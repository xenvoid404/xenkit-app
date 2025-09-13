'use client';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { AnimatedSlideUp } from '@/components/motion/animations';

export function CtaButton() {
    return (
        <AnimatedSlideUp>
            <Button asChild size="lg" className="group">
                <Link href="#tools">
                    Explore Tools
                    <ArrowRight className="ml-2 size-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
            </Button>
        </AnimatedSlideUp>
    );
}
