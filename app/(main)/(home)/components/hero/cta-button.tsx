'use client';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { m } from 'framer-motion';
import { slideUpVariants } from '@/lib/motion';

export function CtaButton() {
    return (
        <m.div variants={slideUpVariants}>
            <Button asChild size="lg" className="group">
                <Link href="#tools">
                    Explore Tools
                    <ArrowRight className="ml-2 size-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
            </Button>
        </m.div>
    );
}
