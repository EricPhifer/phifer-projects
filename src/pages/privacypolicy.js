import { defaultComponents, PortableText } from '@portabletext/react';
import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Seo from '../components/Seo';

const PolicyStyles = styled.div`
  position: absolute;
  left: 100px;
  word-wrap: break-word;
  .overlord {
    max-width: 900px;
    width: calc(100vw - 100px);
    height: 100vh;
    margin: 0 auto;
    background-color: #fff;
    padding: 1rem 0;
    overflow: scroll;
    @media only screen and (max-width: 900px) {
      width: calc(100vw - 50px);
    }
  }
  p:first-child {
    padding: 0;
    margin: 0;
  }
  .policyContainer {
    max-width: 600px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  .updateDate, h1 {
    text-align: center;
  }
  @media only screen and (max-width: 900px) {
    left: 50px;
  }
  @media only screen and (max-width: 500px) {
    p {
      font-size: 1.25rem;
    }
    h1 {
      font-size: 2rem;
    }
  }
`;

export default function PrivacyPolicy({ data }) {
  const policies = data.policies.nodes;
  return (
    <>
      <Seo title="Privacy Policy" />
      <PolicyStyles>
        <div className='overlord'>
          <p className="updateDate">Last updated: May 17, 2022</p>
          {policies.map((policy) => (
            <section key={policy.id}>
              <h1>{policy.title}</h1>
              <section className="policyContainer">
                <PortableText 
                  value={policy._rawContent}
                  components={defaultComponents}
                  className="answer flex"
                  />
              </section>
            </section>
          ))}
        </div>
      </PolicyStyles>
    </>
  );
}

export const query = graphql`
  query {
    policies: allSanityPrivacyPolicy {
      nodes {
        id
        title
        _rawContent
      }
    }
  }
`;
