import React, { useRef } from 'react';
import styled from 'styled-components';

const SketchStyles = styled.main`
  margin: 2rem;
`;
const CanvasContainer = styled.div`
  width: 80vw;
  height: 60rem;
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

const EtchASketch = () => {
  const refContainer = useRef(null);
  const generatePlayerCard = (name, age, height) => {
    const onButtonClick = () => {
      refContainer.current.parentElement.remove();
    };

    return (
      <div className="playerCard">
        <h2>
          {name} — {age}
        </h2>
        <p>
          They are {height} and {age} years old. In Dog years this person would
          be {age * 7}. That would be an old dog!
        </p>
        <Button
          className="removeBtn"
          onClick={onButtonClick}
          type="button"
          ref={refContainer}
        >
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
    <SketchStyles>
      <div className="wrapper">
        <ul>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </ul>
        <img
          src="https://source.unsplash.com/random/300x300/?horses"
          width={300}
          height={300}
          className="cute"
          alt="Cute Puppy"
        />
        <div>
          <p />
          <p className="warning" />
        </div>
        <CanvasContainer className="cards">
          {cards.map((card) => (
            <React.Fragment key={card}> {card} </React.Fragment>
          ))}
        </CanvasContainer>
      </div>
    </SketchStyles>
  );
};

export default EtchASketch;

export const Head = () => <title>Etch-a-Sketch</title>;
