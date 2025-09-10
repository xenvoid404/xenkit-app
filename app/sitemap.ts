import { MetadataRoute } from 'next';
import { tools } from '@/data/tools-data';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://xenkit.my.id';
    const routes = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 1
        },
        {
            url: `${baseUrl}/tools`,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 0.9
        }
    ];

    const toolRoutes = tools.map(tool => ({
        url: `${baseUrl}${tool.url}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.6
    }));

    return [...routes, ...toolRoutes];
}
