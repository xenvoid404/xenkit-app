import { Badge } from '@/components/ui/badge';
import { Wrench } from 'lucide-react';

export default function Home() {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/30">
            <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 sm:px-8 lg:px-12">
                <div className="text-center space-y-12">
                    <Badge variant="outline">
                        <Wrench className="size-4" />
                        25+ Developer Tools Available
                    </Badge>

                    <div className="space-y-8">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1]">
                            <span className="block text-accent">Powerful Tools</span>
                            <span className="block text-foreground">For Modern Developers</span>
                        </h1>
                        <p className="max-w-3xl mx-auto text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed font-light">
                            Your ultimate toolkit with all the essential utilities for development, security and productivity in one place.
                            <span className="text-foreground font-medium block mt-2 sm:inline sm:mt-0"> Free, fast, and secure.</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
