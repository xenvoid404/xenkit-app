'use client';
import Link from 'next/link';
import { type CSSProperties } from 'react';
import { type Tool } from '@/app/(main)/(home)/lib/tools-data';
import { LuExternalLink } from 'react-icons/lu';

interface ToolCardProps {
    tool: Tool;
    className?: string;
    style?: CSSProperties;
}

export function ToolCard({ tool, className = '', style }: ToolCardProps) {
    const IconComponent = tool.icon;

    return (
        <article
            className={`group relative overflow-hidden rounded-xl bg-background/70 backdrop-blur-sm border border-border/50 p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 hover-lift hover-scale-sm animate-fade-in-up ${className}`}
            style={style}
        >
            {/* Background gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-secondary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 space-y-5">
                {/* Header with icon */}
                <header className="flex items-start justify-between">
                    <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary/8 border border-primary/15 group-hover:bg-primary/12 group-hover:border-primary/25 group-hover:scale-110 transition-all duration-300">
                        <IconComponent className="w-7 h-7 text-primary transition-colors duration-300" />
                    </div>
                </header>

                {/* Title and description */}
                <div className="space-y-3">
                    <h3 className="text-lg font-semibold leading-tight group-hover:text-primary transition-colors duration-300 line-clamp-2">
                        {tool.name}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{tool.description}</p>
                </div>

                {/* Categories */}
                <div className="flex flex-wrap gap-2">
                    {tool.categories.slice(0, 3).map(category => (
                        <span
                            key={category}
                            className={`text-xs px-3 py-1.5 rounded-full border transition-all duration-300 cursor-default hover:scale-105 font-medium bg-muted/50 text-muted-foreground border-border'
                            }`}
                            title={`Category: ${category}`}
                        >
                            {category}
                        </span>
                    ))}
                    {tool.categories.length > 3 && (
                        <span
                            className="text-xs px-3 py-1.5 rounded-full bg-muted/50 text-muted-foreground border border-border font-medium"
                            title={`${tool.categories.length - 3} more categories`}
                        >
                            +{tool.categories.length - 3}
                        </span>
                    )}
                </div>

                {/* Action button */}
                <Link href={tool.route} className="block mt-6">
                    <button
                        className="w-full group/btn relative overflow-hidden bg-gradient-to-r from-primary/8 to-secondary/8 border border-primary/15 rounded-lg px-4 py-3 text-sm font-medium transition-all duration-300 hover:from-primary/15 hover:to-secondary/15 hover:border-primary/30 hover:shadow-md hover-scale-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background active:scale-95"
                        aria-label={`Open ${tool.name} tool`}
                    >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            <span>Open Tool</span>
                            <LuExternalLink className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                        </span>

                        {/* Button hover effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/15 to-secondary/15 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                    </button>
                </Link>
            </div>
        </article>
    );
}
