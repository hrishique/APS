import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/private/'], // Add any paths you want to hide from search engines
        },
        sitemap: 'https://anjaneyaprintpacksolutions.com/sitemap.xml',
    };
}
