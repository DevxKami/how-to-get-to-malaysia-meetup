import { graphql } from 'gatsby';
import * as React from 'react';
import { Accordion } from '../components/accordion';
import { Container } from '../components/container';
import { GridItem, GridList } from '../components/grid';
import { Layout } from '../components/layout';
import { Seo } from '../components/seo';
import { Step } from '../components/step';

const VenueTemplate = ({ data: { details } }) => {
  return (
    <Layout>
      <Container>
        <h1 className="text-5xl font-bold mb-12">Getting To {details.name}</h1>
        {details.googleMapUrl && (
          <p className="mb-6">
            <a href={details.googleMapUrl} className="text-blue-800 underline">
              Google Map
            </a>
          </p>
        )}
        <h2 className="text-3xl text-gray-600">Detailed Instructions</h2>
        <div className="flex flex-col gap-3 py-6">
          {details.lrt && (
            <Accordion
              summary={<h3 className="text-xl">By LRT</h3>}
              details={
                <GridList>
                  {details.lrt.map((step, index) => (
                    <GridItem key={index}>
                      <Step
                        stepNumber={index + 1}
                        description={step.description}
                        photo={step.photo}
                      />
                    </GridItem>
                  ))}
                </GridList>
              }
            />
          )}
          {details.driving && (
            <Accordion
              summary={<h3 className="text-xl">Driving There</h3>}
              details={
                <GridList>
                  {details.driving.map((step, index) => (
                    <GridItem key={index}>
                      <Step
                        stepNumber={index + 1}
                        description={step.description}
                        photo={step.photo}
                      />
                    </GridItem>
                  ))}
                </GridList>
              }
            />
          )}
          {details.grab && (
            <Accordion
              summary={<h3 className="text-xl">Grab There</h3>}
              details={
                <GridList>
                  {details.grab.map((step, index) => (
                    <GridItem key={index}>
                      <Step
                        stepNumber={index + 1}
                        description={step.description}
                        photo={step.photo}
                      />
                    </GridItem>
                  ))}
                </GridList>
              }
            />
          )}
        </div>
      </Container>
    </Layout>
  );
};

export default VenueTemplate;

export const pageQuery = graphql`
  query VenueById($id: String!) {
    details: detailsYaml(id: { eq: $id }) {
      name
      googleMapUrl
      lrt {
        description
        photo {
          name
          childImageSharp {
            fluid(maxWidth: 510) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      driving {
        description
        photo {
          name
          childImageSharp {
            fluid(maxWidth: 510) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      grab {
        description
        photo {
          name
          childImageSharp {
            fluid(maxWidth: 510) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;

export const Head = ({ data: { details } }) => (
  <Seo
    title={`Getting To ${details.name}`}
    description={`Detailed instructions getting to ${details.name}`}
    keywords={[details.name, 'detailed instructions']}
  />
);
