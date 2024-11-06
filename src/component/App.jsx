import { useEffect, useState } from "react";
import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";
import { items } from "./lib/constant";

function App() {
  const itemFromLocal = JSON.parse(localStorage.getItem("initialItem"))
  const [initialItem, setInitialItem] = useState(itemFromLocal ||  items);

  const removeAllItem = () => {
    setInitialItem([]);
  };
  const resetToInitial = () => {
    setInitialItem(items);
  };
  const markAllAsIncomplete = () => {
    const newItem = initialItem.map((item) => {
      return { ...item, isPacked: false };
    });
    setInitialItem(newItem);
  };
  const markAllComplete = () => {
    const newItem = initialItem.map((item) => {
      return { ...item, isPacked: true };
    });
    setInitialItem(newItem);
  };
  const handleToggle = (id) => {
    const newItem = initialItem.map((item) => {
      if (item.id === id) {
        return { ...item, isPacked: !item.isPacked };
      }
      return item;
    });
    setInitialItem(newItem);
  };
  const handleDeleteItem = (id) => {
    const newItem = initialItem.filter((item) => item.id !== id);
    setInitialItem(newItem);
  };
  useEffect(() => {
    localStorage.setItem("initialItem", JSON.stringify(initialItem));
  }, [initialItem]);

  return (
    <>
      <BackgroundHeading />
      <main>
        <Header
          numberOfPackedItem={
            initialItem.filter((item) => item.isPacked).length
          }
          totalNumberOfItem={initialItem.length}
        />
        <ItemList
          initialItem={initialItem}
          handleDeleteItem={handleDeleteItem}
          handleToggle={handleToggle}
        />
        <Sidebar
          setInitialItem={setInitialItem}
          removeAllItem={removeAllItem}
          resetToInitial={resetToInitial}
          markAllAsIncomplete={markAllAsIncomplete}
          markAllComplete={markAllComplete}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
