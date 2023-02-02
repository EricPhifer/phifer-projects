import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import useContact from '../utils/useContact';
import useForm from '../utils/useForm';

const FooterStyles = styled.footer`
  width: 100vw;
  height: 36rem;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 0;
  background-color: #000;
  color: #fff;
  font-size: 1.5rem;
  ul li:first-child {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    p {
      max-width: 250px;
    }
  }
  .newsletterSignup {
    max-width: 250px;
    margin: 2vmin 7vmin;
  }
  form {
    max-width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, minmax(auto, 1fr));
    input:nth-child(3) {
      width: calc(100% - 16.5px);
      height: 50px;
      border-right: none;
      border-bottom: none;
      border-left: 4px solid var(--orange);
      border-top: 4px solid var(--orange);
      border-radius: 30px 0 0 0;
      padding-left: 1rem;
    }
    .subemail {
      width: calc(100% - 16.5px);
      height: 50px;
      padding-left: 1rem;
      border-left: 0.5px dotted var(--black);
      border-right: 4px solid var(--orange);
      border-top: 4px solid var(--orange);
      border-bottom: none;
      border-radius: 0 30px 0 0;
    }
    button {
      width: 100%;
      height: 35px;
      margin: 0;
      padding: 1rem 0;
      grid-column: 1 / span 2;
      border-radius: 0 0 100px 100px;
      &:hover {
        color: var(--orange);
        border-top: 1px solid var(--orange);
        border-left: 4px solid var(--orange);
        border-right: 4px solid var(--orange);
        border-bottom: 4px solid var(--orange);
      }
    }
  }
  .footerContainer {
    max-width: 1080px;
    margin: 0 auto;
    ul {
      padding: 0;
      margin: 0;
      list-style-type: none;
    }
    .inline {
      display: inline-flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    .column {
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
    }
    .footerCredits {
      margin: 3rem 2.5rem;
      a {
        display: flex;
        color: #fff;
        padding: 0.5rem;
      }
    }
    .footerCredits > li {
      padding-bottom: 0.5rem;
    }
    .linkParser {
      line-height: 0.7;
      border-left: 1px solid var(--orange);
      border-right: 1px solid var(--orange);
    }
    .linkParser li {
      padding: 0.2rem 0.8rem;
    }
    a:hover {
      color: var(--orange);
    }
    a[aria-current='page'] {
      border-bottom: 1px solid var(--yellow);
    }
  }
  @media only screen and (max-width: 325px) {
    .footerCredits {
      font-size: 1.25rem;
    }
  }
`;

export default function Footer() {
  const { footer } = useStaticQuery(graphql`
    query {
      footer: allSanityFooter {
        nodes {
          title
          id
          devlink
          dev
          links {
            pagelink
            pagename
            _key
          }
        }
      }
    }
  `)
  
  const nodes = footer.nodes;
  const { values, updateValue } = useForm({
    name: '',
    subscriber: '',
  });
  const { contact, error, loading, errMessage, submitContact } = useContact({
    values,
  });
  console.log(contact, error, loading, submitContact);
  if (errMessage) {
    return <p>{errMessage}</p>;
  }
  return (
    <FooterStyles>
      {nodes.map((node) => (
        <div className="footerContainer" key={node.id}>
          <ul className="footerCredits column">
            <li>
              <p>If you're a member and want to receive the monthly newsletter, sign up here.</p>
              <div className='newsletterSignup'>
              <form
                  className="container"
                  id="formContainer"
                  method="post"
                  netlify-honeypot="bot-field"
                  data-netlify="true"
                  name="subscriber"
                >
                  <input type="hidden" name="bot-field" />
                  <input type="hidden" name="form-name" value="subscriber" />
                  <input 
                    type='text' 
                    name='name' 
                    id='name' 
                    value={values.name} 
                    onChange={updateValue} 
                    placeholder='Name' 
                  />
                  <input 
                    type='text' 
                    name='subscriber' 
                    id='subscriber' 
                    value={values.subscriber} 
                    onChange={updateValue} 
                    placeholder='Email' 
                    className='subemail'
                  />
                  <button type="submit" value="Submit">
                    Sign Up
                  </button>
                </form>
              </div>
            </li>
            <li>
              &copy; {node.title} {new Date().getFullYear()}
            </li>
            <li>
              <ul className="inline privTerms">
                {node.links.map((link) => (
                  <span className='linkParser' key={link._key}>
                    <Link to={link.pagelink}>
                      <li>
                        {link.pagename}
                      </li>
                    </Link> 
                  </span>
                ))}
              </ul>
            </li>
            <li> 
              <a href={node.devlink} target="_blank" rel="noreferrer">
                Designed &amp; Developed by {node.dev}
              </a>
            </li>
          </ul>
        </div>
      ))}
    </FooterStyles>
  );
}
