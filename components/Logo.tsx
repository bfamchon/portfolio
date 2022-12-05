import { CodeBracketSquareIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" className="my-2 flex items-center space-x-1 text-indigo-500">
      <CodeBracketSquareIcon className="h-8 w-8 flex-shrink-0 mr-3" />
      <span className="font-bold text-3xl font-sans tracking-tight whitespace-nowrap">{'{ bfamchon }'}</span>
    </Link>
  );
};

export default Logo;
