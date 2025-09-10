import { Hero } from '@/app/(main)/(home)/components/section/hero';
import { FeaturedTools } from '@/components/sections/featured-tools';

export default function Page() {
    return (
        <div id="main-content">
            <Hero />
            <FeaturedTools />
        </div>
    );
}
