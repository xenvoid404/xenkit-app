import { Coffee } from 'lucide-react';
import { FooterMenu } from '@/components/layout/main/nav-link';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-gradient-to-br from-muted/10 via-background to-muted/10 border-t border-border/50">
            <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
                    <div className="lg:col-span-1">
                        <div className="mb-6">
                            <div className="text-2xl font-bold mb-4 text-primary">Xenkit</div>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                Your ultimate developer toolkit with all the essential utilities for development, security and productivity in one
                                place.
                            </p>
                        </div>
                    </div>

                    <FooterMenu />

                    <div className="lg:col-span-1">
                        <h4 className="font-semibold mb-4 text-foreground">Support</h4>
                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                            If Xenkit has been helpful to you, consider supporting development!
                        </p>
                        <a
                            href="https://buymeacoffee.com/xenvoid404"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 text-sm"
                        >
                            <Coffee className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
                            <span>Buy Me a Coffee</span>
                        </a>
                    </div>
                </div>

                <div className="border-t border-border/30 pt-8">
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
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-primary via-secondary to-accent opacity-60" />
        </footer>
    );
}
