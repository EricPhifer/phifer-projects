import React, { useState } from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery, Link } from 'gatsby';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: 100vw;
  height: 50px;
  background: lightgray;
  box-shadow: 1px 1px 10px var(--black);

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const NavItem = styled.li`
  margin: 0 1rem;
`;

const NavLink = styled((props) => <Link {...props} />)`
  text-decoration: none;
  color: black;
  font-weight: bold;

  &:hover {
    color: darkgray;
  }
`;

const NavToggle = styled.div`
  #menuToggle {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 40px;
    right: 25px;
    z-index: 1;
    -webkit-user-select: none;
    user-select: none;
  }
  .menuInput {
    display: flex;
    width: 40px;
    height: 32px;
    position: absolute;
    cursor: pointer;
    opacity: 0;
    z-index: 2;
    bottom: 0;
    right: 0;
  }
  #menuToggle span {
    display: flex;
    position: relative;
    width: 50px;
    height: 5px;
    margin-bottom: 5px;
    border-radius: 3px;
    box-shadow: 3px 3px 5px var(--black);
    z-index: 1;
    transform-origin: 5px 0;
    background: var(--white);
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }
  #menuToggle span:first-child {
    transform-origin: 0% 0%;
  }
  #menuToggle span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }
  #menuToggle input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-10px, -17px);
    box-shadow: none;
  }
  #menuToggle input:checked ~ span:nth-last-child(2) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }
  #menuToggle input:checked ~ span:nth-last-child(3) {
    transform: rotate(-45deg) translate(1px, 0);
  }
  #menu {
    width: 50%;
    height: 100%;
    margin: 0;
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    box-shadow: 0 0 10px #85888c;
    transform-origin: 0% 0%;
    transform: translate(100%, 0%);
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
    overflow-y: auto;
    overflow-x: hidden;
    @media only screen and (max-width: 600px) {
      width: 100%;
    }
  }
  #menu li {
    transition-delay: 2s;
  }
  #menuToggle input:checked ~ .menuContainer {
    transform: none;
  }
  ul {
    list-style-type: none;
    max-width: 75%;
    display: flex;
    flex-flow: row wrap;
    margin: 10% auto 0;
    padding: 0;
    justify-content: start;
    button {
      width: 100%;
        a {
        font-size: 3rem;
        font-weight: bold;
      }
    }
  }
  nav {
    height: 100%;
    background-color: var(--red); 
  }
  nav ul {
    height: 100%;
    list-style-type: none;
    padding: 0;
    li {
      padding: 2rem;
      font-size: 2rem;
      font-weight: bold; 
      color: var(--white);
    }
    a {
      font-size: 2rem;
      color: var(--white);
      font-weight: bold;
      cursor: pointer;
      transition: all 0.5s ease;
      &:hover {
        border-bottom: var(--white);
      }
      &[aria-current='page'] {
        border-bottom: var(--white);
      }
    }
    @media only screen and (max-width: 325px) {
      a {
        font-size: 1.8rem;
      }
    }
  }
  .navBG {
    width: 100%;
    height: 100%;
    background-color: var(--red);
    box-shadow: 3px 5px 10px #000;
    z-index: 1;
  }
  .inline {
    display: inline-flex;
  }
  .flex {
    display: flex;
    flex-flow: column nowrap;
  }
  .center {
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .inputFlex {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top 1.5rem;
  }
  #dropmenu {
    width: 80%;
    margin: 0 auto;
    background-color: var(--red);
    position: absolute;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    box-shadow: 0 0 10px #85888c;
    transform-origin: 0% 0%;
    transform: translate(120%, -20%);
    transition: all 0.5s ease;
    overflow-y: auto;
    overflow-x: hidden;
    opacity: 0;
    z-index: 3;
  }
  #dropmenu li {
    transition-delay: 2s;
    margin-top: 1rem;
  }
  #dropToggle input:checked ~ .dropContainer {
    opacity: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  .dropContainer .caretRight {
    position: absolute;
    right: 0;
    top: 50%;
  }
  /* Landscape Mode */
  @media only screen and (max-height: 500px) {
    ul {
      margin: 0 auto;
      justify-content: start;
    }
    .icons {
      width: 100px;
      height: 100%;
      display: flex;
      flex-flow: column nowrap;
    }
    #dropmenu {
      transform: translate(135%, 0%);
    }
    .inputFlex {
      margin-top: 1.5rem;
      align-items: end;
    }
  }
  @media only screen and (max-height: 375px) {
    height: 75px;
    background-color: rgba(215, 238,246, 0.5);
    #menuToggle {
      top: 25px;
      img {
        width: 80px;
      }
    }
  }
  /* Hide menu on small screens */
  @media only screen and (min-width: 976px) {
    display: none;
  }
`;

const NavCollapse = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  transition: all 0.3s;

  @media (max-width: 600px) {
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 0;
    background-color: white;
    border: 1px solid lightgray;
    padding: 1rem;
    width: 100%;
    height: ${(props) => (props.isOpen ? 'auto' : '0')};
    overflow: hidden;
  }
`;

export default function Navbar() {
  const { pages } = useStaticQuery(graphql`
    query {
      pages: allSanityProjectPages {
        nodes {
          id
          nativelinks {
            _key
            pagelink
            pagename
          }
        }
      }
    }
  `);
  const { nodes } = pages;
  const [isOpen, setIsOpen] = useState(false);
  return nodes.map((node) => (
    <Nav key={node.id}>
      <NavList>
        {node.nativelinks.map((item) => (
          <NavItem key={item._key}>
            <NavLink to={item.pagelink}>{item.pagename}</NavLink>
          </NavItem>
        ))}
      </NavList>
      <NavToggle onClick={() => setIsOpen(!isOpen)}>
        <NavCollapse isOpen={isOpen}>
          <NavList>
            {node.nativelinks.map((item) => (
              <NavItem key={item._key}>
                <NavLink to={item.pagelink}>{item.pagename}</NavLink>
              </NavItem>
            ))}
          </NavList>
        </NavCollapse>
      </NavToggle>
    </Nav>
  ));
}
