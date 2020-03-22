import React from "react";
import "./card-list.styles.css";
import { Card } from "../card/card.component";
import { CardListItem } from "../../types/cardListItem.model";

type CardListProps = {
  items: CardListItem[];
};

export const CardList = ({ items }: CardListProps) => {
  return (
    <div className="card-list">
      {items.map(item => (
        <Card key={item.id} item={item}></Card>
      ))}
    </div>
  );
};
