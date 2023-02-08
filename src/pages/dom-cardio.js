import React, { useRef } from 'react';
import styled from 'styled-components';

const DomStyles = styled.main`
  margin: 2rem;
`;
const CardStyles = styled.main`
  display: grid;
  grid-template-columns: repeat(2, minmax(auto, 1fr));
  .playerCard {
    margin: 2rem;
    padding: 2rem;
    border: 1px slateblue solid;
    border-radius: 10px;
  }
`;
const Button = styled.button`
  padding: 1rem 2rem;
  background: darkcyan;
  color: whitesmoke;
  &:hover {
    background: whitesmoke;
    color: darkcyan;
  }
`;

const DomCardio = () => {
  const refContainer = useRef(null);
  const generatePlayerCard = (name, age, height) => {
    const onButtonClick = () => {
      refContainer.current.parentElement.remove();
    };

    return (
      <div className="playerCard" ref={refContainer}>
        <h2>
          {name} — {age}
        </h2>
        <p>
          They are {height} and {age} years old. In Dog years this person would
          be {age * 7}. That would be an old dog!
        </p>
        <Button className="removeBtn" onClick={onButtonClick} type="button">
          Delete
        </Button>
      </div>
    );
  };

  const cards = [
    generatePlayerCard('Fred', 5, '5\'1"'),
    generatePlayerCard('Ted', 15, '4\'1"'),
    generatePlayerCard('Ed', 25, '6\'1"'),
    generatePlayerCard('Jed', 35, '7\'1"'),
  ];

  return (
    <DomStyles>
      <div className="wrapper">
        <ul>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </ul>
        <img
          src="https://source.unsplash.com/random/?waterfalls"
          width={250}
          className="cute"
          alt="Cute Puppy"
        />
        <div>
          <p />
          <p className="warning" />
        </div>
        <CardStyles className="cards">
          {cards.map((card) => (
            <React.Fragment key={card}>{card} </React.Fragment>
          ))}
        </CardStyles>
      </div>
    </DomStyles>
  );
};

export default DomCardio;

// Original JavaScript
/*
const newDiv = document.createElement(`div`);
newDiv.classList.add('wrapper');
document.body.appendChild(newDiv);
const newUl = document.createElement(`ul`);
const liOne = document.createElement(`li`);
liOne.textContent = `One`;
const liTwo = document.createElement(`li`);
liTwo.textContent = `Two`;
const liThree = document.createElement(`li`);
liThree.textContent = `Three`;
newUl.insertAdjacentElement(`afterbegin`, liTwo);
liTwo.insertAdjacentElement(`beforebegin`, liOne);
liTwo.insertAdjacentElement(`afterend`, liThree);
newDiv.insertAdjacentHTML(`afterbegin`, newUl);
document.body.appendChild(newDiv);

const newImg = document.createElement(`img`);
newImg.src = `https://source.unsplash.com/random/?waterfalls`;
newImg.width = 250;
newImg.classList.add(`cute`);
newImg.alt = `Cute Puppy`;
newDiv.appendChild(newImg);

const newString = `
    <div>
        <p></p>
        <p></p>
    </div>
`;
newUl.insertAdjacentHTML(`beforebegin`, newString);

const fragment = document.createRange().createContextualFragment(newString);
const secondParagraph = fragment.div.lastElementChild;
secondParagraph.classList.add(`warning`);
newUl.insertAdjacentElement('beforebegin', fragment);
fragment.querySelector(`div p:first-child`).remove();
function generatePlayerCard(name, age, height) {
  return `
    <div class="playerCard">
        <h2>${name} — ${age}</h2>
        <p>They are ${height} and ${age} years old. In Dog years this person would be ${
    age * 7
  }. That would be an old dog!</p>
    </div>
    `;
}

const cardContainer = document.createElement(`div`);
cardContainer.classList.add('cards');
const cards = [
  generatePlayerCard(`Fred`, `5`, `5'1"`),
  generatePlayerCard(`Ted`, `15`, `4'1"`),
  generatePlayerCard(`Ed`, `25`, `6'1"`),
  generatePlayerCard(`Jed`, `35`, `7'1"`),
];
cards.forEach((card) => {
  const cardFragment = document.createRange().createContextualFragment(card);
  cardContainer.appendChild(cardFragment);
});
newDiv.insertAdjacentHTML(`beforebegin`, cardContainer);
const createBtn = document.createElement(`button`);
createBtn.classList.add(`removeBtn`);
createBtn.textContent(`Delete`);
const removeBtns = document.querySelectorAll(`.removeBtn`);

removeBtns.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.target.parentElement.remove();
  });
});
*/
