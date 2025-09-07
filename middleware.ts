import NextAuth from 'next-auth';
import { auth } from '@/lib/auth';

export default auth(req => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;

    const isAdminRoute = nextUrl.pathname.startsWith('/admin');
    const isAuthRoute = nextUrl.pathname.startsWith('/admin/login');

    if (isAdminRoute && !isAuthRoute && !isLoggedIn) {
        return Response.redirect(new URL('/admin/login', nextUrl));
    }

    if (isAuthRoute && isLoggedIn) {
        return Response.redirect(new URL('/admin/dashboard', nextUrl));
    }
});

export const config = {
    matcher: ['/admin/:path*']
};
