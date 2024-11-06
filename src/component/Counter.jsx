export default function Counter({numberOfPackedItem, totalNumberOfItem}) {
  return (
    <div>
      <b>{numberOfPackedItem} </b> / {totalNumberOfItem} items packed
    </div>
  );
}
