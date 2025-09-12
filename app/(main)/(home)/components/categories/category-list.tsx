'use client';
import { useCategories, useToolsStore } from '@/app/(main)/(home)/lib/store/tools-store';
import { AnimatedItem } from '@/components/animation/animated-item';
import { Button } from '@/components/ui/button';

export function CategoryList() {
    const categories = useCategories().filter(cat => cat !== 'all');
    const { setSelectedCategory } = useToolsStore();

    const handleClick = (category: string) => {
        setSelectedCategory(category);

        const toolsSection = document.getElementById('tools');
        if (toolsSection) {
            toolsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
            {categories.map((category, index) => (
                <AnimatedItem key={index}>
                    <Button
                        onClick={() => handleClick(category)}
                        className="w-full h-full p-8 text-center bg-background/50 border border-border/50 rounded-xl transition-all duration-300 hover:bg-primary/10 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
                    >
                        <h3 className="text-lg font-semibold text-foreground capitalize">{category}</h3>
                    </Button>
                </AnimatedItem>
            ))}
        </div>
    );
}
