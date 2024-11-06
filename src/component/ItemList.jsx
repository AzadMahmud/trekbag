import Select from "react-select";
import EmptyView from "./EmptyView";
import { useMemo, useState } from "react";

const sortingOptions = [
  {
    label: "Sort by default",
    value: "default",
  },
  {
    label: "Sort by packed",
    value: "packed",
  },
  {
    label: "Sort by unpacked",
    value: "unpacked",
  },
];
export default function ItemList({
  initialItem,
  handleDeleteItem,
  handleToggle,
}) {
  const [sortBy, setSortBy] = useState("default");
  const sortedItems = useMemo(
    () =>
      [...initialItem].sort((a, b) => {
        if (sortBy == "packed") {
          return b.isPacked - a.isPacked;
        }
        if (sortBy == "unpacked") {
          return a.isPacked - b.isPacked;
        }
        return;
      }),
    [initialItem, sortBy]
  );
  return (
    <ul className="item-list">
      {initialItem.length === 0 ? <EmptyView /> : null}
      {initialItem.length > 0 ? (
        <section className="sorting">
          <Select
            onChange={(option) => setSortBy(option.value)}
            defaultValue={sortingOptions[0]}
            options={sortingOptions}
          />
        </section>
      ) : null}
      {sortedItems.map((item) => {
        return (
          <Item
            handleToggle={handleToggle}
            handleDeleteItem={handleDeleteItem}
            key={item.id}
            item={item}
          />
        );
      })}
    </ul>
  );
}
function Item({ item, handleDeleteItem, handleToggle }) {
  return (
    <li className="item">
      <label>
        <input
          onChange={() => handleToggle(item.id)}
          checked={item.isPacked}
          type="checkbox"
        />{" "}
        {item.name}
      </label>
      <button onClick={() => handleDeleteItem(item.id)}>❌</button>
    </li>
  );
}
