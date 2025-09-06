import AdminAuthLayout from '@/admin/(auth)/layout';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/Button';

export default function AdminLogin() {
    return (
        <AdminAuthLayout heading="Login Admin">
            <form className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="example@gmail.com" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor>Password</Label>
                    <Input id="password" type="email" placeholder="password" />
                </div>

                <Button type="submit">Login</Button>
            </form>
        </AdminAuthLayout>
    );
}
