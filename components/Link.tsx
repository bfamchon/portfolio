import Link, { LinkProps } from 'next/link';

type StyledLinkProps = LinkProps & {
  children?: React.ReactNode;
};

export const StyledLink = (props: StyledLinkProps) => (
  <Link {...props} scroll={false} className={'group transition duration-300 font-bold uppercase'}>
    {props.children}
    <span
      className={'block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-indigo-500'}
    ></span>
  </Link>
);
