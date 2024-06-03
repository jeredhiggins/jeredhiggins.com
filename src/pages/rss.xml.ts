import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';

export async function GET(context: APIContext) {
    const posts = await getCollection('posts');
    const sortedPosts = posts.sort(
        (a, b) => Number(new Date(b.data.date)) - Number(new Date(a.data.date))
    );
    return rss({
        title: 'Jered Higgins - Writing',
        description:
            'Technical SEO with 15+ years experience. I make Python 🐍 SEO Tools and offer Technical SEO consulting/services.',
        site: context.site || 'https://jeredhiggins.com',
        items: sortedPosts.map((post) => ({
            title: post.data.title,
            pubDate: post.data.date,
            description: post.data.description,
            link: `/writing/${post.slug}/`,
        })),
        customData: `<language>en-us</language>`,
    });
}
