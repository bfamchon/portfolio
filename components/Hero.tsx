import Image from 'next/image';
import React from 'react';
import styles from '../styles/Hero.module.css';
import { StyledLink } from './Link';

const walk = 100;

const shadow = (e: any) => {
  const hero = document.getElementById('hero');
  const image = document.getElementById('author');
  if (image && hero && e.target) {
    //the measure differs if we resize the window of the browser -responsive element
    //offsetWidth gives the measurement in pixels of the element's CSS width
    //offsetHeight gives the measurement in pixels of the element's CSS height

    //measures of the hero div
    const width = hero.offsetWidth;
    const height = hero.offsetHeight;
    //the exact measure pixel in the hero where the mouse is moving (e -mousemove) in x and y
    let x = e.offsetX;
    let y = e.offsetY;

    //we want  to update the values of x and y exaclty near by the text h1 top left, to start there.
    if (hero !== e.target) {
      x = x + e.target.offsetLeft;
      y = y + e.target.offsetTop;
    }

    //Math.round() method returns  the value of a number rounder to the neareast integer

    const xWalk = Math.round((x / width) * walk - walk / 2);
    const yWalk = Math.round((y / height) * walk - walk / 2);

    //having  already the values of walk of x and y its time to add a style in our h1
    image.style.boxShadow = `
    0 0 50px 1px #000, ${xWalk}px ${yWalk}px 100px 100px rgba(78, 9, 168, 0.67)`;
  }
};

export const Hero = () => {
  React.useEffect(() => {
    const hero = document.getElementById('hero');
    if (hero) {
      hero.addEventListener('mousemove', shadow);
      return () => hero.removeEventListener('mousemove', shadow);
    }
  }, []);
  return (
    <div id="hero" className="flex flex-col min-h-[calc(100vh_-_84px)]">
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
          id="author"
          src={'/me.webp'}
          alt="Picture of the author: Baptiste Famchon"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=`}
          width={200}
          height={200}
          className={`hidden lg:flex rounded-full self-center justify-self-center ${styles.glow}`}
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
          <StyledLink href="#projects" text="Projects" />
        </li>
        <li className="mx-6 my-2">
          <StyledLink href="https://www.linkedin.com/in/baptiste-famchon/" text="Let's talk !" />
        </li>
      </ul>
    </div>
  );
};
