import { Coffee } from 'lucide-react';
import { FooterNavigationMenu, FooterSocialMenu } from '@/components/layout/main/nav-link';
import { AnimatedSlideInUp, AnimatedStaggerDiv } from '@/components/motion/animations';
import { Button } from '@/components/ui/button';
import { Headline } from '@/components/shared/headline';
import { SubHeadline } from '@/components/shared/sub-headline';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <AnimatedStaggerDiv>
            <footer className="relative bg-gradient-to-br from-muted/10 via-background to-muted/10 border-t border-border/50">
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
                    <div className="flex flex-col text-center gap-4">
                        <AnimatedSlideInUp>
                            <Headline as="h2">
                                <span className="block text-primary">Xenkit</span>
                            </Headline>
                        </AnimatedSlideInUp>
                        <AnimatedSlideInUp>
                            <SubHeadline>Your go-to collection of free and secure online utilities.</SubHeadline>
                        </AnimatedSlideInUp>
                    </div>
                    <AnimatedSlideInUp className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12 mt-10">
                        <FooterNavigationMenu />
                        <FooterSocialMenu />
                    </AnimatedSlideInUp>
                    <AnimatedSlideInUp className="flex flex-col text-center gap-2">
                        <h4 className="font-semibold text-foreground">Enjoying Xenkit?</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            If this collection of tools has been helpful to you, consider supporting its development!
                        </p>
                        <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 w-fit mx-auto" asChild>
                            <a href="https://buymeacoffee.com/xenvoid404" target="_blank" rel="noopener noreferrer">
                                <Coffee className="size-4 mr-2" />
                                <span>Buy Me a Coffee</span>
                            </a>
                        </Button>
                    </AnimatedSlideInUp>

                    <AnimatedSlideInUp className="border-t border-border/30 pt-8 mt-12">
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                            <div className="text-sm text-muted-foreground text-center">
                                © {currentYear} Xenkit. All rights reserved. Made with ❤️ by{' '}
                                <a
                                    href="https://github.com/xenvoid404"
                                    className="text-primary hover:text-primary/80 hover:underline transition-colors duration-300"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    xenvoid404
                                </a>
                            </div>
                        </div>
                    </AnimatedSlideInUp>
                </div>
            </footer>
        </AnimatedStaggerDiv>
    );
}
