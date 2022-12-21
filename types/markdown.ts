export type MarkdownDescription = {
  id: string;
  text: string;
};

export type MarkdownData = {
  from: string;
  to: string | null;
  job: string;
  company: string;
  description: string;
};
