import { Hero } from '@/app/(main)/(home)/components/section/hero';
import { Tools } from '@/app/(main)/(home)/components/section/tools';

export default function Page() {
    return (
        <div id="main-content" className="flex flex-col">
            <Hero />
            <Tools />
        </div>
    );
}
