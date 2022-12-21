import Image from 'next/image';
import { StyledLink } from './Link';

export const Hero = () => (
  <div className="flex flex-col min-h-[calc(100vh_-_84px)]">
    <section className="grid grid-cols-3 gap-4 mb-6 flex-1">
      <div className="col-span-3 lg:col-span-2 flex flex-col h-full justify-center">
        <p className={`font-mono`}>Hello, my name is</p>
        <h1 className="text-3xl md:text-6xl mb-3 font-bold my-4">
          Baptiste Famchon.
          <p className={`text-3xl md:text-6xl mb-3 font-bold text-indigo-500 my-4`}>
            I transform ideas into web products.
          </p>
        </h1>

        <p className="mb-6">
          It&apos;s a pleasure to see you on this portfolio !
          <br />
          Here you will find many infos on what I do, like, and who I am...
          <br />
        </p>
      </div>
      <Image
        src={'/me.webp'}
        alt="Picture of the author: Baptiste Famchon"
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=`}
        width={200}
        height={200}
        className="hidden lg:flex rounded-full self-center justify-self-center border-4 border-black dark:border-white"
      />
    </section>
    <ul className="flex flex-wrap my-6 justify-center content-end">
      <li className="mx-6 my-2">
        <StyledLink href="#about" text="About" />
      </li>
      <li className="mx-6 my-2">
        <StyledLink href="#studies" text="Studies" />
      </li>
      <li className="mx-6 my-2">
        <StyledLink href="#career" text="Career" />
      </li>
      <li className="mx-6 my-2">
        <StyledLink href="https://www.linkedin.com/in/baptiste-famchon/" text="Let's talk !" />
      </li>
    </ul>
  </div>
);
