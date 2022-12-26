import React from 'react';
import { CardRow } from './cardRow/CardRow.js';
// Add import statements below


export const Board = () => {
  // Add selected data variable and implement below
  

  const numberOfCards = 0;
  const columns = 3;
  const rows = Math.floor(numberOfCards / columns);

  const getRowCards = (row) => {
    const rowCards = [];
    for (let j = 0; j < columns; j++) {
      const cardIndex = row * columns + j;
      // Implement selected data below
      rowCards.push({});
    }
    return rowCards;
  };

  let content = [];
  for (let row = 0; row < rows; row++) {
    const rowCards = getRowCards(row);
    content.push(
      <CardRow 
        key={row} 
        cards={rowCards} 
      />
    );
  }
  return <div className="cards-container">{content}</div>;
};
