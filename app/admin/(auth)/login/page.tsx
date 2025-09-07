'use client';

import AdminAuthLayout from '@/app/admin/(auth)/layout';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '@/lib/actions';
import { LoaderCircle } from 'lucide-react';
import { InputError } from '@/components/ui/input-error';

export default function AdminLogin() {
    const [errorMessage, dispatch] = useFormState(authenticate, undefined);

    return (
        <AdminAuthLayout>
            <div className="space-y-3 text-center">
                <h1 className="text-xl font-semibold">Login Admin</h1>
            </div>
            <form action={dispatch} className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="example@gmail.com" required />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" name="password" type="password" placeholder="password" required />
                </div>
                <LoginButton />
                <InputError message={errorMessage} />
            </form>
        </AdminAuthLayout>
    );
}

function LoginButton() {
    const { pending } = useFormStatus();

    return (
        <Button type="submit" aria-disabled={pending} className="relative">
            {pending && <LoaderCircle className="absolute animate-spin" />}
            <span className={pending ? 'invisible' : 'visible'}>Login</span>
        </Button>
    );
}
