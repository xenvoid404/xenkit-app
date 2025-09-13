"use client";
import { AnimatedSlideUp } from "@/components/motion/animations";
import { type ReactNode } from "react";

interface HeadingProps {
    title: ReactNode;
    description: ReactNode;
    titleComponent?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export function Heading({
    title,
    description,
    titleComponent: TitleComponent = "h1",
}: HeadingProps) {
    return (
        <>
            <AnimatedSlideUp>
                <TitleComponent className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                    {title}
                </TitleComponent>
            </AnimatedSlideUp>
            <AnimatedSlideUp>
                <p className="mx-auto max-w-4xl font-light leading-relaxed text-muted-foreground sm:text-xl lg:text-2xl">
                    {description}
                </p>
            </AnimatedSlideUp>
        </>
    );
}