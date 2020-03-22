import React from "react";
import { CardListItem } from "../../types/cardListItem.model";

import "./card.styles.css";

type CardProps = {
  item: CardListItem;
};
export const Card = ({ item }: CardProps) => (
  <div className="card-container">
    <img src={`https://robohash.org/${item.id}.png?set=set2`} alt="monster" />
    <h1>{item.name}</h1>
    <p>{item.email}</p>
  </div>
);
