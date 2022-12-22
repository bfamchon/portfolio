import type { NextPage } from 'next';
import Image from 'next/image';
import About from '../components/About';
import Experiences from '../components/Experiences';
import { Hero } from '../components/Hero';
import Layout from '../components/Layout';
import Section from '../components/Section';
import cfaPicture from '../public/cookforadventure.webp';
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
        <Section id="projects" title="Projects">
          <div className="flex justify-around">
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-50 dark:bg-gray-900">
              <Image
                className="w-full max-h-[280px] object-cover"
                src={cfaPicture}
                alt="Website Cook For Adventure"
                placeholder="blur"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Cook For Adventure</div>
                <p className="text-gray-700 dark:text-gray-400 text-base">
                  Personal blog where I share some sport recipes and adventures stories ⛰
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 dark:bg-gray-700 dark:text-white">
                  <a href="https://cookforadventure.com" className="hover:underline underline-offset-2">
                    🔗 cookforadventure.com
                  </a>
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 dark:bg-gray-700 dark:text-white">
                  🏷 NextJS
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 dark:bg-gray-700 dark:text-white">
                  🏷 Sendinblue
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 dark:bg-gray-700 dark:text-white">
                  🏷 Firebase
                </span>
              </div>
            </div>
          </div>
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
