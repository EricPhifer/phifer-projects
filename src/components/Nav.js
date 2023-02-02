import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

const NavStyles = styled.div`
  width: 100vw;
  position: relative;
  .full {
    width: 100vw;
    position: relative;
  }
  .maxWidth {
    max-width: 1080px;
    margin: 0 auto;
  }
  a {
    cursor: pointer;
  }
  nav ul {
    list-style-type: none;
    a {
      padding: 2rem;
      font-size: 2rem;
      font-weight: bold;
      color: #fff;
      &:hover {
        color: var(--brown);
        text-shadow: 1px 0 0 #fff, -1px 0 0 #fff, 0 1px 0 #fff, 0 -1px 0 #fff;
      }
      &[aria-current='page'] {
        background-color: var(--brown);
      }
    }
  }
  .navImg {
    box-shadow: 0 5px 10px #000;
    z-index: 3;
    height: 100%;
    img[data-loading] {
      width: 10px !important; /* must be > 4px to be lazy loaded */
      height: 10px !important; /* must be > 4px to be lazy loaded */
      position: absolute;
      z-index: -10;
      opacity: 0;
      pointerevents: none;
      userselect: none;
    }
  }
  .navBG {
    background-color: var(--orange);
    box-shadow: 0 5px 10px #000;
    z-index: 1;
  }
  .inline {
    display: inline-flex;
    margin: 0;
    padding: 0;
  }
  .flex {
    display: flex;
    flex-flow: column nowrap;
    margin: 0;
    padding: 0;
  }
  .center {
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  @media only screen and (max-height: 450px) {
    .navImg {
      height: 50vmin;
    }
  }
  @media only screen and (max-width: 1080px) {
    .navImg {
      z-index: 1;
    }
    .navBG {
      z-index: 0;
    }
  }

  /* Hide menu on small screens */
  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

const TabletNavStyles = styled.div`
  /* Show compressed menu on small screens */
  @media only screen and (min-width: 901px) {
    display: none;
  }
  @media only screen and (max-width: 500px) {
    display: none;
  }
  .navContainer {
    width: 100vw;
    height: 7rem;
    background-color: var(--orange);
    box-shadow: 0 10px 10px #000;
    position: fixed;
    z-index: 1;

    // // Adjust for Christmas Banner:
    // top: 15px;
  }
  .inline {
    display: inline-flex;
    a, span {
      padding-left: 1rem;
    }
  }
  #menuToggle {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 25px;
    right: 25px;
    z-index: 1;
    -webkit-user-select: none;
    user-select: none;
  }
  #menuToggle input {
    display: flex;
    width: 40px;
    height: 32px;
    position: absolute;
    cursor: pointer;
    opacity: 0;
    z-index: 2;
    bottom: 5px;
  }
  #menuToggle span {
    display: flex;
    position: relative;
    width: 40px;
    height: 5px;
    margin-bottom: 5px;
    border-radius: 3px;
    z-index: 1;
    transform-origin: 5px 0;
    background: #fff;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }
  #menuToggle span:first-child {
    transform-origin: 0% 0%;
  }
  #menuToggle span:nth-last-child(3) {
    transform-origin: 0% 100%;
  }
  #menuToggle input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-10px, -10px);
  }
  #menuToggle input:checked ~ span:nth-last-child(2) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }
  #menuToggle input:checked ~ span:nth-last-child(3) {
    transform: rotate(-45deg) translate(1px, 0);
  }
  #menu {
    height: 100vh;
    width: 100vw;
    margin: 0;
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    box-shadow: 0 0 10px #85888c;
    transform-origin: 0% 0%;
    transform: translate(100%, 0%);
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
    overflow-y: auto;
  }
  #menu li {
    position: relative;
    transition-delay: 2s;
  }
  #menu button {
    background-color: transparent;
    margin: 0;
    padding: 0 2rem;
    box-shadow: none;
  }
  #menuToggle input:checked ~ .menuContainer {
    transform: none;
  }
  ul {
    list-style-type: none;
    max-width: 75%;
    display: flex;
    flex-flow: column nowrap;
    margin: 10rem auto 0;
    padding: 0;
    justify-content: center;
    button a {
      font-size: 3rem;
      font-weight: bold;
    }
    @media only screen and (max-height: 450px) {
      flex-flow: row wrap;
    }
  }
`;

const MobileNavStyles = styled.div`
  /* Show compressed menu on small screens */
  @media only screen and (min-width: 501px) {
    display: none;
  }
  .navContainer {
    width: 100vw;
    height: 7rem;
    background: var(--orange);
    box-shadow: 0 10px 10px #000;
    position: fixed;
    z-index: 1;

    // // Adjust for Christmas Banner
    // top: 15px;
  }
  .inline {
    display: inline-flex;
    a, span {
      padding-left: 1rem;
    }
  }
  #menuToggle {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 25px;
    right: 25px;
    z-index: 1;
    -webkit-user-select: none;
    user-select: none;
  }
  #menuToggle input {
    display: flex;
    width: 40px;
    height: 32px;
    position: absolute;
    cursor: pointer;
    opacity: 0;
    z-index: 2;
    bottom: 5px;
    right: 5px;
  }
  #menuToggle span {
    display: flex;
    position: relative;
    width: 40px;
    height: 5px;
    margin-bottom: 5px;
    border-radius: 3px;
    z-index: 1;
    transform-origin: 5px 0;
    background: #fff;
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
    transform: rotate(45deg) translate(-6px, -12px);
  }
  #menuToggle input:checked ~ span:nth-last-child(2) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }
  #menuToggle input:checked ~ span:nth-last-child(3) {
    transform: rotate(-45deg) translate(1px, 0);
  }
  #menu {
    height: 100vh;
    width: 100vw;
    margin: 0;
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    box-shadow: 0 0 10px #85888c;
    transform-origin: 0% 0%;
    transform: translate(100%, 0%);
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
    overflow-y: auto;
  }
  #menu li {
    transition-delay: 2s;
  }
  #menu button {
    background-color: transparent;
    margin: 0;
    padding: 0;
    box-shadow: none;
    text-shadow: 1px 1px 5px #c2c2c2;
  }
  #menuToggle input:checked ~ .menuContainer {
    transform: none;
  }
  ul {
    list-style-type: none;
    max-width: 75%;
    display: flex;
    flex-flow: row wrap;
    margin: 10rem auto 0;
    padding: 0;
    justify-content: center;
    button {
      width: 100%;
        a {
        font-size: 3rem;
        font-weight: bold;
      }
    }
  }
`;


export default function Nav() {
  const { navigation } = useStaticQuery(graphql`
    query {
      navigation: allSanityNavigation {
          nodes {
            id
          }
        }
      }
  `)

const nodes = navigation.nodes;
const [checked, setChecked] = React.useState(false || '');

  return (
    <>
      {nodes.map((node) => (
        <div className="nodeParser" key={node.id}>
          <NavStyles>
            <div className="full navBG">
              <div className="maxWidth center">
                <nav>
                  <ul className='inline center'>
 
                  </ul>
                </nav>
              </div>
            </div>
          </NavStyles>
          <TabletNavStyles>
            <div className="navContainer">
              <div id="menuToggle">
                <input 
                  type="checkbox" 
                  checked={checked}
                  onClick={() => {setChecked(old => !old)}} 
                />
                <span />
                <span />
                <span />
                <div id="menu" className="menuContainer">
                  <nav className="upperNav">
                    <ul>
         
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </TabletNavStyles>
          <MobileNavStyles>
            <div className="navContainer">
              <div id="menuToggle">
                <input 
                  type="checkbox" 
                  checked={checked}
                  onClick={() => {setChecked(old => !old)}} 
                />
                <span />
                <span />
                <span />
                <div id="menu" className="menuContainer">
                  <nav className="upperNav">
                    <ul>
                
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </MobileNavStyles>
        </div>
      ))} 
    </>
  );
}
