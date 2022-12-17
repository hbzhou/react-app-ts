const List: React.FC<{ items: Array<string>; onClick?: (item: string) => void }> = ({ items, onClick }) => (
  <ul>
    {items.map((item, index) => {
      return (
        <li key={index} onClick={() => onClick?.(item)}>
          {item}
        </li>
      );
    })}
  </ul>
);

export default List;
