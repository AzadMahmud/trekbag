import Counter from "./Counter";
import Logo from "./Logo";

export default function Header({numberOfPackedItem,totalNumberOfItem }) {
  return (
    <header>
      <Logo />
      <Counter numberOfPackedItem={numberOfPackedItem} totalNumberOfItem={totalNumberOfItem}/>
    </header>
  );
}
