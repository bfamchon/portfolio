import { faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { SocialLink } from './SocialLink';

const Footer = () => {
  return (
    <footer className="px-4 py-6 mt-24 sm:px-6">
      <div id="socials" className="flex justify-center my-8">
        <SocialLink href="https://www.linkedin.com/in/baptiste-famchon/" icon={faLinkedinIn} />
        <SocialLink href="https://github.com/bfamchon" icon={faGithub} />
        <SocialLink href="https://twitter.com/bfamchon" icon={faTwitter} />
        <SocialLink href="/cv.pdf" icon={faFilePdf} download='CV_FAMCHON_BAPTISTE' />
      </div>
      <div className="text-sm text-center text-gray-500">
        <span className="mr-2 text-lg font-bold text-gray-900 dark:text-gray-100">{'{ bfamchon }'}</span>{' '}
        &copy; {new Date().getFullYear()} All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
