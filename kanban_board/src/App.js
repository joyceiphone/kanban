import React from "react";
import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import initialData from "./data";
import Column from "./components/Column";

function App() {
  const [
    columns,
    setColumns
  ] = useState(initialData);

  const handleCardAdd = (
    input,
    index
  ) => {
    const nextColumns = [...columns];
    nextColumns[index].card.push(input);
    setColumns(nextColumns);
  };
  const handleCardMove = (
    indexStart,
    indexEnd,
    i
  ) => {
    const nextColumns = [...columns];
    const info = nextColumns[
      indexStart
    ].card.splice(i, 1);
    nextColumns[indexEnd].card.push(
      info
    );
    setColumns(nextColumns);
  };

  const handleCardDelete = (
    index,
    cardIndex
  ) => {
    const nextColumns = [...columns];
    nextColumns[index].card.splice(
      cardIndex,
      1
    );
    setColumns(nextColumns);
  };
  return (
    <div className="App">
      <div className="columns-container">
        {columns.map(
          (column, index) => (
            <Column
              title={column.title}
              cardTitles={column.card}
              color={column.color}
              index={index}
              handleCardAdd={
                handleCardAdd
              }
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
    </div>
  );
}

export default App;
