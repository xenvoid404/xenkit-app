import Link from 'next/link';
import Image from 'next/image';

export function AppLogoIcon() {
    return (
        <Link href="/" className="flex aspect-square size-16 rounded-full object-cover">
            <Image src="/next.svg" alt="Next.JS Logo" width={100} height={100} />
        </Link>
    );
}
