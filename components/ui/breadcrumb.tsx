import Link from 'next/link';

type Breadcrumb = {
    href: string;
    title: string;
};

interface BreadcrumbsProps {
    items: Breadcrumb[];
}

export function Breadcrumb({ items }: BreadcrumbsProps) {
    return (
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6" aria-label="Breadcrumb">
            {items.map((item, index) => {
                const isLast = index === items.length - 1;
                return (
                    <div key={index} className="flex items-center gap-2">
                        {!isLast ? (
                            <>
                                <Link href={item.href} className="hover:text-foreground transition-colors">
                                    {item.title}
                                </Link>
                                <span>/</span>
                            </>
                        ) : (
                            <span className="text-foreground font-medium">{item.title}</span>
                        )}
                    </div>
                );
            })}
        </nav>
    );
}
