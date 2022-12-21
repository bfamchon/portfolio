import React from 'react';

type SectionProps = {
  id: string;
  children: React.ReactNode;
  title: string;
};

const Section = ({ id, children, title }: SectionProps) => (
  <section id={id} className="flex flex-col my-24">
    <h2 className="flex justify-center mb-12 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 md:text-6xl">
      {title}
    </h2>
    {children}
  </section>
);

export default Section;
