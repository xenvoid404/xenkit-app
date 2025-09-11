import { type Variants } from 'framer-motion';

export const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1
        }
    }
};
