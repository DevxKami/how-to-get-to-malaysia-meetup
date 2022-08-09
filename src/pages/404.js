import * as React from 'react';
import { Container } from '../components/container';
import { Layout } from '../components/layout';
import { Seo } from '../components/seo';

function PageNotFound() {
  return (
    <Layout>
      <Container>
        <h1 className="text-5xl font-bold mb-12">Page Not Found</h1>
        <p className="mb-6">A 404, if you speak Http.</p>
        <p>This is probably our fault, we're sorry.</p>
      </Container>
    </Layout>
  );
}

export default PageNotFound;

export const Head = () => <Seo title="Page Not Found" />;
