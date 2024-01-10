import "./Buttons.css";
function Buttons({ children }) {
  return (
    <div className="w-100 d-flex justify-content-center">
      <button className="buttons">{children}</button>
    </div>
  );
}

export default Buttons;
