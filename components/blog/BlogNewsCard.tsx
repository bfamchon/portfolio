import Image from 'next/image';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import temp from '../../public/temp-placeholder.png';
import { BlogPost } from '../../types/blog-post';

type BlogNewsCardProps = {
  newsletter: BlogPost;
};

export const BlogNewsCard = ({ newsletter }: BlogNewsCardProps) => (
  <div className="flex flex-col md:max-w-sm w-full rounded overflow-hidden shadow-lg bg-gray-50 dark:bg-gray-900">
    <Image
      className="w-full max-h-[280px] object-cover"
      src={temp}
      alt="Website Cook For Adventure"
      placeholder="blur"
    />
    <div>
      <div className="px-6 py-4">
        <h2 className="font-bold text-2xl mb-2">{newsletter.title}</h2>
        <span className="text-gray-700 dark:text-gray-400 text-base">
          <ReactMarkdown>{newsletter.preview}</ReactMarkdown>
        </span>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 dark:bg-gray-700 dark:text-white">
          <a href={`blog/${newsletter.slug}`} className="hover:underline underline-offset-2">
            🔗 Lire la newsletter
          </a>
        </span>
        {newsletter.tags.map((tag) => (
          <span
            key={tag}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 dark:bg-gray-700 dark:text-white"
          >
            🏷 {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);
