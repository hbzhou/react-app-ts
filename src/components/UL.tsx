import React from "react";

function UL<T>({ items, render }: { items: T[]; render: (item: T) => React.ReactNode }) {
  return (
    <ul>
      {items.map((item, index) => {
        return <li key={index}>{render(item)}</li>;
      })}
    </ul>
  );
}

export default UL;
