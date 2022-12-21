import type { NextPage } from 'next';
import About from '../components/About';
import Experiences from '../components/Experiences';
import { Hero } from '../components/Hero';
import Layout from '../components/Layout';
import Section from '../components/Section';
import { MarkdownData, MarkdownDescription } from '../types/markdown';
import { formatMarkdownToExperience } from '../utils/format';
import { getAllCareerData, getAllDescriptionsData, getAllStudiesData } from '../utils/md-data-fetching';

type HomePageProps = {
  experiences: MarkdownData[];
  studies: MarkdownData[];
  descriptions: MarkdownDescription[];
};

const Home: NextPage<HomePageProps> = ({ experiences, studies, descriptions }) => {
  return (
    <Layout>
      <Hero />
      <div className="flex flex-col mt-6 md:mt-10 md:mb-20 mb-10">
        <Section id="about" title={'About me'}>
          <About descriptions={descriptions} />
        </Section>
        <Section id="studies" title="Studies">
          <Experiences experiences={formatMarkdownToExperience(studies)} />
        </Section>
        <Section id="career" title="Career">
          <Experiences experiences={formatMarkdownToExperience(experiences)} />
        </Section>
      </div>
    </Layout>
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
