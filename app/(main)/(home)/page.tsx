import { HeroSection } from '@/app/(main)/(home)/components/section/hero-section';
import { ToolsSection } from '@/app/(main)/(home)/components/section/tools-section';

export default function Page() {
    return (
        <div id="main-content" className="flex flex-col">
            <HeroSection />
            <ToolsSection />
        </div>
    );
}
