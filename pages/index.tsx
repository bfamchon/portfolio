import type { NextPage } from 'next';
import Image from 'next/image';
import Experiences from '../components/Experiences';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
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
      <div className="mt-6 md:mt-10 md:mb-20 mb-10">
        <section className="grid grid-cols-3 gap-4 justify-center items-start mb-6">
          <div className="col-span-3 lg:col-span-2 flex flex-col h-full justify-center">
            <h1>
              <div className="text-3xl md:text-6xl mb-3 font-light">
                Hi, I&apos;m
                <span className={styles['name-color']}> Baptiste</span>
              </div>
              <span className="text-3xl md:text-6xl font-semibold mb-4">Famchon</span>
            </h1>
            <div className="mb-6">
              Fullstack web developer who values delivering web products with the best user experience.
              <br />
              It&apos;s a pleasure to see you on this portfolio, here you will find many infos on what I do,
              like, and who I am...
              <br />
              So let&apos;s go ! 🚀
            </div>
          </div>
          <Image
            src={'/me.webp'}
            alt="Picture of the author: Baptiste Famchon"
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=`}
            width={400}
            height={400}
            className="hidden lg:flex justify-end items-center content-center h-full rounded-xl"
          />
        </section>
        <section id="career" className="my-8">
          <h2 className="flex pb-6 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl md:text-3xl">
            <span role="img" className="mr-4" aria-label="call-me icon">
              👨🏼‍💻
            </span>
            Career
          </h2>
          <Experiences experiences={formatMarkdownToExperience(experiences)} />
        </section>
        <section id="studies" className="my-8">
          <h2 className="flex pb-6 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl md:text-3xl">
            <span role="img" className="mr-4" aria-label="books icon">
              📚
            </span>
            Studies
          </h2>
          <Experiences experiences={formatMarkdownToExperience(studies)} />
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
