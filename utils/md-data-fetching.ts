import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { MarkdownData } from '../types/markdown';
import { MarkdownDescription } from './../types/markdown';

const contentsDirectory = path.join(process.cwd(), 'contents');

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

export const getAllMarkdownDataAbout = (subject: 'career' | 'studies' | 'about') =>
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
