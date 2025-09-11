import { Hero } from '@/app/(main)/(home)/components/section/hero';
import { CategoriesSection } from '@/app/(main)/(home)/components/section/categories-section';
import { ToolsSection } from '@/app/(main)/(home)/components/section/tools-section';

export default function Page() {
    return (
        <div id="main-content" className="flex flex-col">
            <Hero />
            <CategoriesSection />
            <ToolsSection />
        </div>
    );
}
