import * as React from 'react';
import { Container } from '../components/container';
import { Layout } from '../components/layout';
import { Seo } from '../components/seo';

function Disclaimer() {
  return (
    <Layout>
      <Container>
        <h1 className="text-5xl font-bold mb-12">Disclaimer</h1>
        <p className="mb-6">Instructions are contributed by volunteers and may be inaccurate.</p>
        <p>We should not be accountable for any misinformation or damaged caused.</p>
      </Container>
    </Layout>
  );
}

export default Disclaimer;

export const Head = () => <Seo title="Disclaimer" />;
