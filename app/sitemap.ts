import { MetadataRoute } from 'next';
import { tools } from '@/data/tools-data';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://xenkit.my.id';
    
    // Base routes
    const routes = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1.0
        },
        {
            url: `${baseUrl}/tools`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9
        }
    ];

    // Tool routes
    const toolRoutes = tools.map(tool => ({
        url: `${baseUrl}${tool.url}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8
    }));

    return [...routes, ...toolRoutes];
}
