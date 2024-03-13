import Image from 'next/image';
import React, { FormEvent } from 'react';
import ReactMarkdown from 'react-markdown';
import styles from '../styles/About.module.css';
import { MarkdownDescription } from '../types/markdown';
type BioLength = 'little' | 'medium' | 'aLot';

const TEXT = {
  little: "I'm cool",
  medium: "I'm very cool",
  aLot: "I'm very very cool"
} as const;

const Label = ({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) => (
  <label htmlFor={htmlFor} className="mt-1 font-sans text-sm tracking-widest cursor-pointer">
    {children}
  </label>
);

const RadioInput = ({
  id,
  name,
  value,
  onChange,
  defaultChecked = false
}: {
  id: string;
  name: string;
  value: string;
  defaultChecked?: boolean;
  onChange: (event: FormEvent<HTMLInputElement>) => void;
}) => (
  <input
    className="w-4 h-4 cursor-pointer"
    type="radio"
    id={id}
    name={name}
    value={value}
    onChange={onChange}
    defaultChecked={defaultChecked}
  />
);

const About = ({ descriptions }: { descriptions: MarkdownDescription[] }) => {
  const [text, setText] = React.useState('');

  const onOptionSelected = React.useCallback(
    (event: FormEvent<HTMLInputElement>) => {
      const selected = event.currentTarget.value as BioLength;
      const description = descriptions.find((desc) => desc.id === selected)?.text || '';
      setText(description);
    },
    [descriptions]
  );

  return (
      <div className="flex flex-wrap justify-around min-h-[500px]">
        <div className="flex flex-col flex-1 max-w-lg mx-6 text-center justify-top">
          <form className="" id="biolength">
            <fieldset className="bio-fieldset">
              <legend className="font-mono text-sm text-gray-500 dark:text-gray-400">
                How much are you curious ?
              </legend>
              <div className="flex justify-center my-6">
                <div className="flex flex-col items-start">
                  <RadioInput id="length-short" name="biolength" value="little" onChange={onOptionSelected} />
                  <Label htmlFor="length-short">little</Label>
                </div>

                <div className="flex flex-col items-center mx-10">
                  <RadioInput
                    id="length-medium"
                    name="biolength"
                    value="medium"
                    onChange={onOptionSelected}
                  />
                  <Label htmlFor="length-medium">medium</Label>
                </div>

                <div className="flex flex-col items-end">
                  <RadioInput id="length-longer" name="biolength" value="aLot" onChange={onOptionSelected} />
                  <Label htmlFor="length-longer">a lot</Label>
                </div>
              </div>
            </fieldset>
          </form>
          <div id="description" className={`my-6 ${styles.description}`}>
            {!text && (
              <span>
                <i>Tell me more about how curious you are...</i>
              </span>
            )}
            {text && <ReactMarkdown>{text}</ReactMarkdown>}
          </div>
        </div>
        <div className="flex max-w-[400px] max-h-[400px] self-center">
          <Image
            src={'/me2.webp'}
            alt="Picture of the author: Baptiste Famchon"
            placeholder="blur"
            width={400}
            height={400}
            blurDataURL={`data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=`}
            className="border-4 border-black align-self-center rounded-xl dark:border-white"
          />
        </div>
      </div>
  );
};

export default About;
