import { useRef, useState } from "react";

export default function AddItemForm({ setInitialItem }) {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!itemText) {
      alert("Item can't be empty! ");
      inputRef.current.focus();
      return;
    }
    const newItem = {
      id: new Date().getTime(),
      name: itemText,
      isPacked: false,
    };
    setInitialItem((prev) => [...prev, newItem]);
    setItemText("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={itemText}
        onChange={(e) => {
          setItemText(e.target.value);
        }}
        autoFocus={true}
      />
      <button className="btn">Add to list</button>
    </form>
  );
}
