import { ThemeProvider } from 'next-themes';

export function AppThemeProvider({ children, ...props }: React.ComponentProps<typeof ThemeProvider>) {
    return <ThemeProvider {...props}>{children}</ThemeProvider>;
}
