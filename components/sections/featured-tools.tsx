'use client';

import { motion, useInView } from 'framer-motion';
import { type CSSProperties, useRef, useMemo } from 'react';
import Link from 'next/link';
import { ToolCard } from '@/components/ui/tool-card';
import { getRandomTools, getAllCategories } from '@/data/tools-data';
import { FaArrowRight } from 'react-icons/fa';

export function FeaturedTools() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    const featuredTools = useMemo(() => getRandomTools(8), []);
    const categories = useMemo(() => getAllCategories().slice(0, 6), []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1 }
    };

    const titleVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section ref={ref} id="featured-tools" className="relative py-24 bg-gradient-to-b from-muted/5 to-background" aria-labelledby="tools-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={titleVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="text-center mb-16"
                >
                    <h2 id="tools-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                        <span className="text-gradient-neon">Featured Tools</span>
                    </h2>
                    <p className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed">
                        Discover some amazing tools from our collection to boost your productivity and streamline your development workflow.
                    </p>
                </motion.div>

                {/* Category Pills */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {categories.map(category => (
                        <motion.div key={category} variants={itemVariants} transition={{ duration: 0.6, ease: 'easeOut' }}>
                            <Link
                                href={`/tools?category=${encodeURIComponent(category)}`}
                                className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium hover:bg-primary/20 hover:border-primary/40 transition-all duration-300"
                            >
                                {category}
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Tools Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
                >
                    {featuredTools.map((tool, index) => (
                        <motion.div
                            key={tool.id}
                            variants={itemVariants}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                            style={{ animationDelay: `${index * 100}ms` } as CSSProperties}
                        >
                            <ToolCard tool={tool} />
                        </motion.div>
                    ))}
                </motion.div>

                {/* View All Tools Button */}
                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="text-center"
                >
                    <Link href="/tools">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-xl text-lg font-semibold transition-all duration-300 hover:bg-gradient-to-r hover:from-primary/20 hover:to-secondary/20 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/25"
                        >
                            <span>View All Tools ({featuredTools.length * 3})</span>
                            <FaArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
