export function generateJsonLd() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'WebSite',
                '@id': `${process.env.APP_URL}/#website`,
                url: `${process.env.APP_URL}`,
                name: `${process.env.APP_NAME}`,
                description:
                    'The modern toolkit for developers, featuring a comprehensive suite of utilities for data conversion, generation, and security—all in one place to streamline your workflow.',
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
                },
                sameAs: ['https://github.com/xenvoid404']
            },
            {
                '@type': 'WebPage',
                '@id': `${process.env.APP_URL}/#webpage`,
                url: `${process.env.APP_URL}`,
                name: `${process.env.APP_NAME} - Developer Tools for the Web`,
                description: 'Your ultimate toolkit with all the essential utilities for development, security and productivity in one place.',
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
                    name: 'Tool Categories',
                    itemListElement: [
                        {
                            '@type': 'ListItem',
                            position: 1,
                            item: {
                                '@type': 'CreativeWork',
                                name: 'Explore Our Tool Categories',
                                description:
                                    "Discover our most popular utilities organized by category. From generators to converters, we've got everything you need to get the job done."
                            }
                        }
                    ]
                }
            }
        ]
    };

    return jsonLd;
}
