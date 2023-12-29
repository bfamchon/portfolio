import { BlogPost } from '../../types/blog-post';
import { BlogNewsCard } from './BlogNewsCard';

type BlogNewsListProps = {
  newsletters: BlogPost[];
};

export const BlogNewsList = ({ newsletters }: BlogNewsListProps) => (
  <ul className="flex flex-wrap justify-center">
    {newsletters.map((newsletter) => (
      <li key={newsletter.slug} className="m-4">
        <BlogNewsCard newsletter={newsletter} />
      </li>
    ))}
  </ul>
);
