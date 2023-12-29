import type { NextPage } from 'next';
import { Hero } from '../components/Hero';
import Layout from '../components/Layout';
import { MarkdownData, MarkdownDescription } from '../types/markdown';
import { getAllCareerData, getAllDescriptionsData, getAllStudiesData } from '../utils/md-data-fetching';

type HomePageProps = {
  experiences: MarkdownData[];
  studies: MarkdownData[];
  descriptions: MarkdownDescription[];
};

const Home: NextPage<HomePageProps> = ({ experiences, studies, descriptions }) => {
  return (
    <>
      <Layout>
        <Hero />
        <div id="custom-substack-embed"></div>
      </Layout>
    </>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      experiences: getAllCareerData(),
      studies: getAllStudiesData(),
      descriptions: getAllDescriptionsData()
    }
  };
};

export default Home;
