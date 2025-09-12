'use client';
import { slideUpVariants } from '@/lib/motion';
import { m } from 'framer-motion';

export function Heading() {
    return (
        <>
            <m.div variants={slideUpVariants}>
                <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                    <span className="block text-primary">Tools</span>
                </h1>
            </m.div>
            <m.div variants={slideUpVariants}>
                <p className="mx-auto max-w-4xl font-light leading-relaxed text-muted-foreground sm:text-xl lg:text-2xl">
                    Discover our most popular developer tools organized by category. From generators to formatters, we&apos;ve got everything you
                    need.
                </p>
            </m.div>
        </>
    );
}
