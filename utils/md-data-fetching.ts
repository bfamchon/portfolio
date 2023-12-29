import fs from 'fs';
import { glob } from 'glob';
import matter from 'gray-matter';
import path from 'path';
import { BlogPost } from '../types/blog-post';
import { MarkdownData } from '../types/markdown';
import { MarkdownDescription } from './../types/markdown';

const contentsDirectory = path.join(process.cwd(), 'contents');

export const getPathsFor = (directory: string) => {
  const filenames = glob.sync(`${contentsDirectory}/${directory}/**/*.md`);

  const withoutExt = filenames.map((file) => {
    const splitted = file.split('/');
    return splitted[splitted.length - 1].replace(/ /g, '-').slice(0, -3).trim();
  });

  return withoutExt.map((slug: string) => `/${directory}/${slug}`);
};

const getFileNamesForDirectory = (directory: string) => fs.readdirSync(`${contentsDirectory}/${directory}`);

export const getExtendedMarkdown = (filePathInsideContents: string) => {
  const fileContent = fs.readFileSync(`${contentsDirectory}/${filePathInsideContents}`, 'utf8');
  const { data, content } = matter(fileContent);
  return { metadata: data, content };
};

export const getAllExtendedMarkdownFromDirectory = (directoryPathInsideContents: string) => {
  const filenames = getFileNamesForDirectory(directoryPathInsideContents);

  return filenames.map((filename) => {
    const fileContent = getExtendedMarkdown(`${directoryPathInsideContents}/${filename}`);
    return { ...fileContent };
  });
};

export const getMarkdown = (filePathInsideContents: string) => {
  const fileContent = fs.readFileSync(`${contentsDirectory}/${filePathInsideContents}`, 'utf8');
  const { data, content } = matter(fileContent);
  return { metadata: data, content };
};

export const getAllMarkdownDataAbout = (subject: 'career' | 'studies' | 'about' | 'blog') =>
  getAllExtendedMarkdownFromDirectory(subject);

export const getAllCareerData = (): MarkdownData[] =>
  getAllMarkdownDataAbout('career').map((md) => ({
    description: md.content,
    job: md.metadata.job as string,
    company: md.metadata.company as string,
    from: md.metadata.from as string,
    to: md.metadata.to || null
  }));

export const getAllStudiesData = (): MarkdownData[] =>
  getAllMarkdownDataAbout('studies').map((md) => ({
    description: md.content,
    job: md.metadata.job as string,
    company: md.metadata.company as string,
    from: md.metadata.from as string,
    to: md.metadata.to || null
  }));

export const getAllDescriptionsData = (): MarkdownDescription[] =>
  getAllMarkdownDataAbout('about').map((md) => ({
    text: md.content,
    id: md.metadata.id
  }));

export const getAllPosts = (): BlogPost[] =>
  getAllMarkdownDataAbout('blog').map((md) => ({
    content: md.content,
    title: md.metadata.title,
    preview: md.metadata.preview,
    tags: md.metadata.tags,
    slug: md.metadata.slug
  }));

export const getABlogArticle = (slug: string): BlogPost => {
  const md = getMarkdown(`blog/${slug}.md`);
  return {
    content: md.content,
    title: md.metadata.title,
    preview: md.metadata.preview,
    tags: md.metadata.tags,
    slug: md.metadata.slug
  };
};
export const getAllBlogPaths = (): string[] => getPathsFor('blog');
