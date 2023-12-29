import type { NextPage } from 'next';
import { useCallback, useState } from 'react';
import Layout from '../../components/Layout';
import Section from '../../components/Section';
import { BlogNewsList } from '../../components/blog/BlogNewsList';
import { OramaProvider } from '../../contexts/orama-context';
import { useSearchableData } from '../../hooks/useSearcheableData';
import { BlogPost } from '../../types/blog-post';
import { getAllPosts } from '../../utils/md-data-fetching';
type BlogPageProps = {
  posts: BlogPost[];
};

const Search = ({ posts }) => {
  const [searchTerm, setSearchTerm] = useState('');
  useSearchableData(posts);
  // const { done, results } = useSearch({ term: 'toto' });
  // console.log(done, results);
  const search = useCallback((event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  }, []);
  return (
    <Section id="search" title={'search'}>
      <input type="search" onChange={search}></input>
    </Section>
  );
};

const Blog: NextPage<BlogPageProps> = ({ posts }) => {
  return (
    <OramaProvider schema={{ title: 'string', slug: 'string', tags: 'string[]', content: 'string' }}>
      <Layout>
        <Search posts={posts} />
        <Section id="newsletters" title={'Newsletters'}>
          <BlogNewsList newsletters={posts} />
        </Section>
      </Layout>
    </OramaProvider>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      posts: getAllPosts()
    }
  };
};

export default Blog;
