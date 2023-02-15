import React from "react";
import { useParams } from "react-router-dom";
import data from "../data";

function ItemDetail() {

    const items = data

    const { id } = useParams()

    const item = items.find(item => item.id == id)

  return (
    <div className="item-detail">
        <div> {item.brand} {item.title}  </div>
    </div>
  );
}

export default ItemDetail;
