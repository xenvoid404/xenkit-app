import { AppLogoIcon } from '@/components/layout/app-logo-icon';

interface AdminAuthLayoutProps {
    heading: string;
}

export default function AdminAuthLayout({ children, heading }: React.PropsWithChildren<AdminAuthLayoutProps>) {
    return (
        <div className="flex min-h-svh flex-col items-center justify-center gap-4 p-4">
            <div className="w-full max-w-sm">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col items-center gap-2">
                        <AppLogoIcon />
                        <div className="space-y-3 text-center">
                            <h1 className="text-xl font-semibold">{heading}</h1>
                        </div>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
}
