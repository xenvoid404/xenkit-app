import { AnimatedSlideInUp } from '@/components/motion/animations';
import { Wrench } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function Chip() {
    return (
        <AnimatedSlideInUp>
            <Badge variant="outline" className="gap-3 py-3 px-4 text-primary text-xs">
                <Wrench className="size-5" />
                <span>25+ Developer Tools Available</span>
            </Badge>
        </AnimatedSlideInUp>
    );
}
