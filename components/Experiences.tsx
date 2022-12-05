import ReactMarkdown from 'react-markdown';
import { Experience } from '../types/experience';
import { transformTwoDatesToStringPeriod } from '../utils/date';

type ExperiencesProps = {
  experiences: Experience[];
};

const Experiences = ({ experiences }: ExperiencesProps) => {
  return (
    <>
      {experiences.map((experience, index) => (
        <div key={index} className="mb-4">
          <span className="font-bold text-xl">
            {experience.job} - {experience.company}
          </span>
          <p className="p-1 pl-4 font-mono text-sm text-gray-500 dark:text-gray-400">
            {transformTwoDatesToStringPeriod(experience.from, experience.to)}
          </p>
          <ReactMarkdown>{experience.description}</ReactMarkdown>
        </div>
      ))}
    </>
  );
};

export default Experiences;
