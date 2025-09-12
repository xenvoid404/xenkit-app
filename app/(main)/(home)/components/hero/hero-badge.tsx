'use client';
import { Badge } from '@/components/ui/badge';
import { Wrench } from 'lucide-react';
import { slideUpVariants } from '@/lib/motion';
import { m } from 'framer-motion';

export function HeroBadge() {
    return (
        <m.div variants={slideUpVariants}>
            <Badge variant="outline" className="gap-3 py-3 px-4 text-primary text-xs">
                <Wrench className="size-5" />
                <span>25+ Developer Tools Available</span>
            </Badge>
        </m.div>
    );
}
