import { Hero } from '@/app/(main)/(home)/components/section/hero';
import { CategoriesSection } from '@/app/(main)/(home)/components/section/categories-section';
import { FeaturedTools } from '@/app/(main)/(home)/components/section/featured-tools';

export default function Page() {
    return (
        <div id="main-content" className="flex flex-col">
            <Hero />
            <CategoriesSection />
            <FeaturedTools />
        </div>
    );
}
