import { graphql, Link } from 'gatsby';
import * as React from 'react';
import { Container } from '../components/container';
import { Layout } from '../components/layout';
import { Seo } from '../components/seo';

const HomePage = ({ data }) => {
  return (
    <Layout>
      <Container>
        <h1 className="text-5xl font-extrabold">How to Get To Meetup At:</h1>
        <ul className="flex flex-col gap-6 py-12">
          {data.venues.nodes.map((venue) => (
            <li key={venue.id}>
              <Link to={`/getting-to/${venue.id}/`} className="text-3xl hover:underline">
                {venue.name}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </Layout>
  );
};

export const pageQuery = graphql`
  {
    venues: allDetailsYaml(sort: { fields: name, order: ASC }) {
      nodes {
        id: yamlId
        name
      }
    }
  }
`;

export default HomePage;

export const Head = () => <Seo />;
