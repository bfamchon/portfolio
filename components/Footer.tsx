import { faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { SocialLink } from './SocialLink';

const Footer = () => {
  return (
    <footer className="px-4 sm:px-6 py-6 mt-24">
      <div id="socials" className="flex justify-center my-8">
        <SocialLink href="https://www.linkedin.com/in/baptiste-famchon/" icon={faLinkedinIn} />
        <SocialLink href="https://github.com/bfamchon" icon={faGithub} />
        <SocialLink href="https://twitter.com/bfamchon" icon={faTwitter} />
      </div>
      <div className="text-center text-sm text-gray-500">
        <span className="dark:text-gray-100 text-gray-900 font-bold text-lg mr-2">{'{ bfamchon }'}</span>{' '}
        &copy; {new Date().getFullYear()} All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
