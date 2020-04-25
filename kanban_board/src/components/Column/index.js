import React from "react";
import Card from "../Card";

export default function Column({
  title,
  cardTitles,
  color,
  index,
  handleCardAdd,
  handleCardMove,
  handleCardDelete
}) {
  const promptWindow = () => {
    const input = window.prompt();
    if (input) {
      handleCardAdd(input, index);
    }
  };
  return (
    <div className="column-container">
      <div
        className="column-title"
        style={{
          backgroundColor: color
        }}
      >
        {title}
      </div>
      <div className="column-body">
        {cardTitles.map(
          (cardTitle, i) => (
            <Card
              cardTitle={cardTitle}
              index={index}
              cardIndex={i}
              handleCardMove={
                handleCardMove
              }
              handleCardDelete={
                handleCardDelete
              }
            />
          )
        )}
      </div>
      <div className="column-footer">
        <button onClick={promptWindow}>
          Add a card
        </button>
      </div>
    </div>
  );
}
