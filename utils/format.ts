import { Experience } from '../types/experience';
import { MarkdownData } from './../types/markdown';

export const byDate = (a: Date | undefined, b: Date | undefined) => {
  if (!a) return -1;
  if (!b) return 1;

  return b.getTime() - a.getTime();
};

export const formatMarkdownToExperience = (data: MarkdownData[]): Experience[] =>
  data
    .map((md) => ({
      job: md.job,
      company: md.company,
      from: new Date(md.from),
      to: md.to ? new Date(md.to) : undefined,
      description: md.description
    }))
    .sort((a, b) => byDate(a.to, b.to));
