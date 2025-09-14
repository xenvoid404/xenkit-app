import { MetadataRoute } from 'next';
import { tools } from '@/lib/tools-data';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://xenkit.my.id';

    const staticRoutes = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 1.0
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.7
        }
    ];

    const toolRoutes = tools.map(tool => ({
        url: `${baseUrl}${tool.route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9
    }));

    return [...staticRoutes, ...toolRoutes];
}
