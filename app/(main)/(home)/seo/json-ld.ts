import { tools } from '@/lib/tools-data';

export function generateJsonLd() {
    const toolItems = tools.map((tool, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
            '@type': 'SoftwareApplication',
            name: tool.name,
            description: tool.description,
            url: `${process.env.APP_URL}${tool.route}`,
            applicationCategory: 'DeveloperApplication',
            operatingSystem: 'Any'
        }
    }));

    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'WebSite',
                '@id': `${process.env.APP_URL}/#website`,
                url: `${process.env.APP_URL}`,
                name: `${process.env.APP_NAME}`,
                description:
                    'The modern toolkit for developers, featuring a comprehensive suite of utilities for data conversion, generation, and security — all in one place to streamline your workflow.',
                publisher: {
                    '@id': `${process.env.APP_URL}/#organization`
                }
            },
            {
                '@type': 'Organization',
                '@id': `${process.env.APP_URL}/#organization`,
                name: `${process.env.APP_NAME}`,
                url: `${process.env.APP_URL}`,
                logo: {
                    '@type': 'ImageObject',
                    url: `${process.env.APP_URL}/logo.png`,
                    width: 512,
                    height: 512
                }
            },
            {
                '@type': 'WebPage',
                '@id': `${process.env.APP_URL}/#webpage`,
                url: `${process.env.APP_URL}`,
                name: `${process.env.APP_NAME} - Online Developer Tools for Everyday Tasks`,
                description:
                    'The modern toolkit for developers, featuring a comprehensive suite of utilities for data conversion, generation, and security — all in one place to streamline your workflow.',
                isPartOf: {
                    '@id': `${process.env.APP_URL}/#website`
                },
                about: {
                    '@id': `${process.env.APP_URL}/#organization`
                }
            },
            {
                '@type': 'CollectionPage',
                '@id': `${process.env.APP_URL}/#collection`,
                name: 'Online Developer Tools Collection',
                description: 'A free and open-source collection of powerful online tools for security, data conversion, and productivity.',
                mainEntity: {
                    '@type': 'ItemList',
                    name: 'Developer Tools',
                    description: 'Collection of essential developer tools and utilities',
                    itemListElement: toolItems
                }
            }
        ]
    };

    return jsonLd;
}
