import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    const postsDirectory = path.join(process.cwd(), 'content');
    const filenames = fs.readdirSync(postsDirectory).filter((name) => name.endsWith('.md'));

    return filenames.map((filename) => ({
        slug: filename.replace(/\.md$/, ''),
    }));
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const blogDirectory = path.join(process.cwd(), 'content');
    const filePath = path.join(blogDirectory, `${slug}.md`);

    if (!fs.existsSync(filePath)) {
        notFound();
    }

    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    const title = typeof data.title === 'string' ? data.title : slug;
    const date = typeof data.date === 'string' ? data.date : '';

    return (
        <article className="max-w-2xl mx-auto py-20 px-6">
            <h1 className="text-4xl font-bold text-white">{title}</h1>
            {date ? <p className="text-gray-400 mt-2">{date}</p> : null}
            <hr className="my-8 border-slate-700" />
            <div className="prose prose-invert max-w-none whitespace-pre-wrap">{content}</div>
        </article>
    );
}
