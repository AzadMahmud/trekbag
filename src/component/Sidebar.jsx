import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function Sidebar({
  setInitialItem,
  removeAllItem,
  resetToInitial,
  markAllAsIncomplete,
  markAllComplete
}) {
  return (
    <div className="sidebar">
      <AddItemForm setInitialItem={setInitialItem} />
      <ButtonGroup 
      removeAllItem={removeAllItem}
      resetToInitial={resetToInitial}
      markAllAsIncomplete={markAllAsIncomplete}
      markAllComplete={markAllComplete}
      />
    </div>
  );
}
