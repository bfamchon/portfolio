type BlogLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const BlogLink = (props: BlogLinkProps) => (
  <span className="flex">
    <a {...props} className={'group transition duration-300 font-bold'}>
      {props.children}
      <span
        className={'block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-indigo-500'}
      ></span>
    </a>
  </span>
);
