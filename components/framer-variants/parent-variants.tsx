import { type Variants } from 'framer-motion';

export const parentVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2
        }
    }
};
