import Button from "./Button";

export default function ButtonGroup({
  removeAllItem,
  resetToInitial,
  markAllAsIncomplete,
  markAllComplete,
}) { 
const secondaryButton = [
  {
    text : "Mark all as complete",
    onClick : markAllComplete
  },
  {
    text : "Mark all as incomplete",
    onClick : markAllAsIncomplete
  },
  {
    text : "Reset to initial",
    onClick : resetToInitial
  },
  {
    text : "Remove all items",
    onClick : removeAllItem
  },

  ]

  return (
    <section className="button-group">
      {
        secondaryButton.map(({text, onClick}) => (
          <Button key={text} buttonType="secondary" onClick={onClick}>{text}</Button>
        ))
      }
    </section>
  );
}
