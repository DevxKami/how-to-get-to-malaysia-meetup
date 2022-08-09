import { Link } from 'gatsby';
import * as React from 'react';
import { useSiteMetadata } from '../hooks/use-site-metadata';

export const Footer = () => {
  const metadata = useSiteMetadata();

  return (
    <footer className="p-12 border-t border-gray-200">
      <div className="flex gap-6">
        <Link to="/disclaimer/" className="text-sm">
          Disclaimer
        </Link>
        <a href={metadata.repositoryUrl} className="text-sm">
          GitHub
        </a>
      </div>
    </footer>
  );
};
