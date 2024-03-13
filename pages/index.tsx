import type { NextPage } from 'next';
import Image, { StaticImageData } from 'next/image';
import { ReactNode } from 'react';
import About from '../components/About';
import Experiences from '../components/Experiences';
import { Hero } from '../components/Hero';
import Layout from '../components/Layout';
import Section from '../components/Section';
import cfaPicture from '../public/cookforadventure.webp';
import ligolangPicture from '../public/ligolang.webp';
import { MarkdownData, MarkdownDescription } from '../types/markdown';
import { formatMarkdownToExperience } from '../utils/format';
import { getAllCareerData, getAllDescriptionsData, getAllStudiesData } from '../utils/md-data-fetching';

type HomePageProps = {
  experiences: MarkdownData[];
  studies: MarkdownData[];
  descriptions: MarkdownDescription[];
};

type Project = {
  name: string;
  description: ReactNode;
  image: StaticImageData;
  link: string;
  tags: string[];
};

const Project = ({ name, description, image, link, tags }: Project) => (
  <div className="max-w-sm m-2 overflow-hidden rounded shadow-lg bg-gray-50 dark:bg-gray-900">
    <Image
      className="w-full h-full max-h-[280px] object-cover"
      src={image}
      alt={`Website ${name}`}
      placeholder="blur"
    />
    <div className="px-6 py-4">
      <div className="mb-2 text-xl font-bold">{name}</div>
      <p className="text-base text-gray-700 dark:text-gray-400">{description}</p>
    </div>
    <div className="px-6 pt-4 pb-2">
      <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-white">
        <a href={link} className="hover:underline underline-offset-2">
          🔗 {link.replace('https://', '')}
        </a>
      </span>
      {tags.map((tag) => (
        <span
          key={tag}
          className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-white"
        >
          🏷 {tag}
        </span>
      ))}
    </div>
  </div>
);

const projects: Project[] = [
  {
    name: 'Cook For Adventure',
    description: 'Personal blog where I share some sport recipes and adventures stories ⛰',
    image: cfaPicture,
    link: 'https://cookforadventure.com',
    tags: ['NextJS', 'Sendinblue', 'Firebase']
  },
  {
    name: 'Ligolang',
    description: 'A simple smart-contract language built for Tezos, made for developers. 🔗',
    image: ligolangPicture,
    link: 'https://ligolang.org',
    tags: ['Docusaurus', 'CSS', 'DX']
  }
];

const Home: NextPage<HomePageProps> = ({ experiences, studies, descriptions }) => {
  return (
    <Layout>
      <Hero />
      <div className="flex flex-col mt-6 mb-10 md:mt-10 md:mb-20">
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
          <div className="flex flex-wrap justify-evenly">
            {projects.map((project) => (
              <Project key={project.name} {...project} />
            ))}
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
