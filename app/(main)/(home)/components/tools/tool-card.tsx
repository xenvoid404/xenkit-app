'use client';
import Link from 'next/link';
import { type Tool } from '@/app/(main)/(home)/lib/tools-data';
import { LuExternalLink } from 'react-icons/lu';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AnimatedSlideInUp } from '@/components/motion/animations';

interface ToolCardProps {
    tool: Tool;
    className?: string;
}

export function ToolCard({ tool, className }: ToolCardProps) {
    const IconComponent = tool.icon;

    return (
        <AnimatedSlideInUp>
            <Card>
                <CardHeader className="relative">
                    <div className="flex size-14 items-center justify-center rounded-xl border border-primary/15 bg-primary/10">
                        <IconComponent className="size-7 text-primary" />
                    </div>
                </CardHeader>
                <CardContent className="relative flex-grow space-y-4">
                    <div className="space-y-2">
                        <CardTitle className="leading-tight">{tool.name}</CardTitle>
                        <CardDescription className="line-clamp-3 leading-relaxed">{tool.description}</CardDescription>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {tool.categories.slice(0, 3).map(category => (
                            <Badge key={category} variant="secondary" className="cursor-default">
                                {category}
                            </Badge>
                        ))}
                        {tool.categories.length > 3 && (
                            <Badge variant="secondary" title={`${tool.categories.length - 3} more categories`}>
                                +{tool.categories.length - 3}
                            </Badge>
                        )}
                    </div>
                </CardContent>
                <CardFooter className="relative z-10 pt-4">
                    <Button asChild className="w-full">
                        <Link href={tool.route} aria-label={`Open ${tool.name}`}>
                            Open Tool
                            <LuExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
        </AnimatedSlideInUp>
    );
}
