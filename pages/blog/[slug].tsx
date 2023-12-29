import type { NextPage } from 'next';
import ReactMarkdown from 'react-markdown';
import Layout from '../../components/Layout';
import { BlogLink } from '../../components/blog/BlogLink';
import { BlogPost } from '../../types/blog-post';
import { getABlogArticle, getAllBlogPaths } from '../../utils/md-data-fetching';

type BlogArticlePageProps = {
  article: BlogPost;
};

const BlogArticle: NextPage<BlogArticlePageProps> = ({ article }) => {
  return (
    <Layout>
      <h1 className="text-3xl md:text-6xl mb-3 font-bold my-4 text-center">{article.title}</h1>
      <ReactMarkdown
        components={{
          p: ({ node, className, children, ...props }) => (
            <p {...props} className={'text-lg my-3'}>
              {children}
            </p>
          ),
          ul: ({ node, className, children, ...props }) => (
            <ul {...props} className={'text-lg my-10 list-disc'}>
              {children}
            </ul>
          ),
          li: ({ node, className, children, ...props }) => (
            <li {...props} className={'mx-8'}>
              {children}
            </li>
          ),
          a: ({ node, className, children, ...props }) => <BlogLink {...props}>{children}</BlogLink>
        }}
      >
        {article.content}
      </ReactMarkdown>
    </Layout>
  );
};

export default BlogArticle;

export const getStaticProps = async ({ ...ctx }) => {
  const { slug } = ctx.params;
  const article = getABlogArticle(slug);
  return {
    props: {
      article
    }
  };
};
export async function getStaticPaths() {
  return {
    paths: getAllBlogPaths(),
    fallback: false
  };
}
