import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

type PostListItem = {
    slug: string;
    title: string;
    date: string;
};

function getPosts(): PostListItem[] {
    const postsDirectory = path.join(process.cwd(), 'content');
    const filenames = fs.readdirSync(postsDirectory).filter((name) => name.endsWith('.md'));

    return filenames
        .map((filename) => {
            const slug = filename.replace(/\.md$/, '');
            const filePath = path.join(postsDirectory, filename);
            const fileContents = fs.readFileSync(filePath, 'utf8');
            const { data } = matter(fileContents);

            return {
                slug,
                title: typeof data.title === 'string' ? data.title : slug,
                date: typeof data.date === 'string' ? data.date : '',
            };
        })
        .sort((a, b) => b.date.localeCompare(a.date));
}

export default function BlogPage() {
    const posts = getPosts();

    return (
        <main className="max-w-3xl mx-auto py-20 px-6">
            <h1 className="text-4xl font-bold text-white mb-8">Blog</h1>

            <div className="space-y-4">
                {posts.map((post) => (
                    <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="block bg-slate-700/50 rounded-xl p-5 border border-slate-600/50 hover:border-yellow-300/30 transition-colors"
                    >
                        <h2 className="text-2xl text-white font-semibold">{post.title}</h2>
                        {post.date ? <p className="text-gray-400 mt-1">{post.date}</p> : null}
                    </Link>
                ))}
            </div>
        </main>
    );
}