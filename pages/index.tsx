import type { NextPage } from 'next';
import Experiences from '../components/Experiences';
import { Hero } from '../components/Hero';
import Layout from '../components/Layout';
import { MarkdownData } from '../types/markdown';
import { formatMarkdownToExperience } from '../utils/format';
import { getAllCareerData, getAllStudiesData } from '../utils/md-data-fetching';

type HomePageProps = {
  experiences: MarkdownData[];
  studies: MarkdownData[];
};

const Home: NextPage<HomePageProps> = ({ experiences, studies }) => {
  return (
    <Layout>
      <Hero />
      <div className="flex flex-col mt-6 md:mt-10 md:mb-20 mb-10">
        {/* <section id="about" className="flex flex-col my-4">
          <h2 className="flex pb-6 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl md:text-3xl">
            <span role="img" className="mr-4" aria-label="career icon">
              💡
            </span>
            About
          </h2>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
        </section> */}
        <section id="studies" className="flex flex-col my-4">
          <h2 className="flex pb-6 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl md:text-3xl">
            <span role="img" className="mr-4" aria-label="books icon">
              📚
            </span>
            Studies
          </h2>
          <Experiences experiences={formatMarkdownToExperience(studies)} />
        </section>
        <section id="career" className="flex flex-col my-4">
          <h2 className="flex pb-6 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl md:text-3xl">
            <span role="img" className="mr-4" aria-label="career icon">
              👨🏼‍💻
            </span>
            Career
          </h2>
          <Experiences experiences={formatMarkdownToExperience(experiences)} />
        </section>
      </div>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const careerData = getAllCareerData();
  const studiesData = getAllStudiesData();
  return {
    props: {
      experiences: careerData,
      studies: studiesData
    }
  };
};

export default Home;
