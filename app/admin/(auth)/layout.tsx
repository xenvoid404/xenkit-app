import { AppLogoIcon } from '@/components/layout/app-logo-icon';

export default function AdminAuthLayout({ children }: React.PropsWithChildren) {
    return (
        <div className="flex min-h-svh flex-col items-center justify-center gap-4 p-4">
            <div className="w-full max-w-sm">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col items-center gap-2">
                        <AppLogoIcon />
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
}
