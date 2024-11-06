export default function Button({ onClick, buttonType, children }) {
  return (
    <div>
      <button 
      onClick={onClick}
      className={`btn ${buttonType === "secondary" ? "btn--secondary" : ""}`}>
        {children}
      </button>
    </div>
  );
}
