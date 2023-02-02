import React from 'react';
import styled from 'styled-components';

const BodyStyles = styled.div`
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

  /* Hide menu on small screens */
  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

const TabletBodyStyles = styled.div`
  /* Show compressed menu on small screens */
  @media only screen and (min-width: 901px) {
    display: none;
  }
  @media only screen and (max-width: 500px) {
    display: none;
  }
 
`;

const MobileBodyStyles = styled.div`
  /* Show compressed menu on small screens */
  @media only screen and (min-width: 501px) {
    display: none;
  }
  .inline {
    display: inline-flex;
    a, span {
      padding-left: 1rem;
    }
  }
`;


export default function Body() {
  return (
    <>
      {nodes.map((node) => (
        <div className="nodeParser" key={node.id}>
          <BodyStyles>
            <div className="full">
      
            </div>
          </BodyStyles>
          <TabletBodyStyles>
            <div className="full">
             
            </div>
          </TabletBodyStyles>
          <MobileBodyStyles>
            <div className="full">
              
            </div>
          </MobileBodyStyles>
        </div>
      ))} 
    </>
  );
}
