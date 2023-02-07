import React, { useState } from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

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

const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: bold;

  &:hover {
    color: darkgray;
  }
`;

const NavToggle = styled.button`
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;

  @media (max-width: 600px) {
    display: block;
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

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityProjectPages {
        edges {
          node {
            path
          }
        }
      }
    }
  `);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <NavList>
        {data.allSanityProjectPages.edges.map(({ node }) => (
          <NavItem key={node.path}>
            <NavLink to={node.path}>{node.path}</NavLink>
          </NavItem>
        ))}
      </NavList>
      <NavToggle onClick={() => setIsOpen(!isOpen)}>&#9776;</NavToggle>
      <NavCollapse isOpen={isOpen}>
        <NavList>
          {data.allSanityProjectPages.edges.map(({ node }) => (
            <NavItem key={node.path}>
              <NavLink to={node.path}>{node.path}</NavLink>
            </NavItem>
          ))}
        </NavList>
      </NavCollapse>
    </Nav>
  );
};
