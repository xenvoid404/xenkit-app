import Link from 'next/link';

export function AppHeader() {
    return (
        <header className="sticky top-0 z-20 flex h-14 items-center border border-b border-muted">
            <div className="flex w-full items-center justify-between px-6">
                <div className="flex h-full items-center">
                    <Link href="/" aria-label="Xenkit - Go to homepage">
                        <h1 className="text-2xl md:text-3xl font-bold text-primary">Xenkit</h1>
                    </Link>
                </div>
            </div>
        </header>
    );
}
