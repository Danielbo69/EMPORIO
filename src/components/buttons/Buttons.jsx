import "./Buttons.css";
function Buttons({ children, setShow }) {

  return (
    <div className="w-100 d-flex justify-content-center">
      <button className="buttons"  onClick={() => setShow(true)}>{children}</button>
    </div>
  );
}

export default Buttons;
