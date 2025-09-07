import { cn } from '@/lib/utils';

interface InputErrorProps extends React.HTMLAttributes<HTMLParagraphElement> {
    className?: string;
    message?: string;
}

export function InputError({ className, message, ...props }: InputErrorProps) {
    return (
        <p {...props} className={cn('text-xs md:text-sm lg:text-md text-destructive', className)}>
            {message}
        </p>
    );
}
