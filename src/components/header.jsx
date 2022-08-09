import { Link } from 'gatsby';
import * as React from 'react';
import { useSiteMetadata } from '../hooks/use-site-metadata';

export function Header() {
  const { title } = useSiteMetadata();

  return (
    <header className="px-12 py-4 shadow">
      <Link to="/">{title}</Link>
    </header>
  );
}
