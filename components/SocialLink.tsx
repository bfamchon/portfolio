import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SocialLink = ({ href, icon, download }: Partial<HTMLAnchorElement> & { icon: IconProp }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    download={download}
    className="flex items-center justify-center w-8 h-8 p-2 mx-2 transition duration-300 rounded-full ring-indigo-500 ring-2 hover:bg-indigo-500 hover:ring-indigo-500 hover:shadow-md hover:text-white"
  >
    <FontAwesomeIcon icon={icon} />
  </a>
);
