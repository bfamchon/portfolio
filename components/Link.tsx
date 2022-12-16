import Link from 'next/link';

type LinkProps = {
  href: string;
  text: string;
};

export const StyledLink = ({ href, text }: LinkProps) => (
  <Link href={href} scroll={false} className={'group transition duration-300 font-bold uppercase'}>
    {text}
    <span
      className={'block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-indigo-500'}
    ></span>
  </Link>
);
