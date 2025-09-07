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
                </div>
            </div>
        </section>
    );
}
