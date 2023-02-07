import React from 'react';
import styled from 'styled-components';

const BodyStyles = styled.div`
  max-width: 100vw;
  position: relative;
  .full {
    margin: 2rem;
    padding: 0;
    position: relative;
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

  max-width: 100vw;
  position: relative;
  .full {
    margin: 2rem;
    padding: 0;
    position: relative;
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
`;

const MobileBodyStyles = styled.div`
  /* Show compressed menu on small screens */
  @media only screen and (min-width: 501px) {
    display: none;
  }
  .inline {
    display: inline-flex;
    a,
    span {
      padding-left: 1rem;
    }
  }
  max-width: 100vw;
  position: relative;
  .full {
    margin: 2rem;
    padding: 0;
    position: relative;
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
`;

// JS testing

// function add(a, b = 3) {
//   const total = a + b;
//   return total;
// }

// converting to arrow function

// const add = (a, b = 3) => a + b;

// attempting to build and unordered list - doesnt work
const buildList = () => {
  // build the unordered list
  const ulist = document.createElement('ul');

  // build the list items
  const itemOne = document.createElement('li');
  itemOne.classList.add('itemOne');
  itemOne.textContent('First Item');

  const itemTwo = document.createElement('li');
  itemTwo.classList.add('itemTwo');
  itemTwo.textContent('Second Item');

  const itemThree = document.createElement('li');
  itemThree.classList.add('itemThree');
  itemThree.textContent('Third Item');

  const itemFour = document.createElement('li');
  itemFour.classList.add('itemFour');
  itemFour.textContent('Fourth Item');

  const itemFive = document.createElement('li');
  itemFive.classList.add('itemFive');
  itemFive.textContent('Fifth Item');

  // insert list items into the unordered list from 1-5
  ulist.insertAdjacentElement('afterbegin', itemThree);
  itemThree.insertAdjacentElement('beforebegin', itemTwo);
  itemThree.insertAdjacentElement('afterend', itemFour);
  itemTwo.insertAdjacentElement('beforebegin', itemOne);
  itemFour.insertAdjacentElement('afterbegin', itemFive);
};

export default function Body() {
  const fullRef = React.createRef();
  return (
    <>
      <BodyStyles>
        <div className="full" ref={fullRef}>
          {/* {buildList.insertAdjacentElement('afterstart', fullRef)} */}
        </div>
      </BodyStyles>
      <TabletBodyStyles>
        <div className="full" />
      </TabletBodyStyles>
      <MobileBodyStyles>
        <div className="full" />
      </MobileBodyStyles>
    </>
  );
}
