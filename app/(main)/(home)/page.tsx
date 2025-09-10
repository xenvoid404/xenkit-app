import { Hero } from '@/app/(main)/(home)/components/section/hero';
import { FeaturedTools } from '@/components/sections/featured-tools';

export default function Page() {
    return (
        <div id="main-content" className="flex flex-col">
            <Hero />
            <FeaturedTools />
        </div>
    );
}
