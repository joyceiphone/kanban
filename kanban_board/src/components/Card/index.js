import React from "react";

export default function Card({
  cardTitle,
  index,
  cardIndex,
  handleCardMove,
  handleCardDelete
}) {
  return (
    <div className="card-container">
      {index != 0 && (
        <div className="previous">
          <button
            onClick={() =>
              handleCardMove(
                index,
                index - 1,
                cardIndex
              )
            }
          >
            Previous
          </button>
        </div>
      )}
      <div className="card-title">
        {cardTitle}
      </div>
      {index != 3 && (
        <div className="next">
          <button
            onClick={() =>
              handleCardMove(
                index,
                index + 1,
                cardIndex
              )
            }
          >
            next
          </button>
        </div>
      )}
      <div className="delete">
        <button
          onClick={() =>
            handleCardDelete(
              index,
              cardIndex
            )
          }
        >
          x
        </button>
      </div>
    </div>
  );
}
