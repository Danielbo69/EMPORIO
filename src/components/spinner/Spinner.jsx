import "./Spinner.css";

function Spinner({setSpinner}) {
  setTimeout(function () {
    setSpinner(false)
  }, 5000);
  return (
    // Símbolo de Carga
    <div id="contenedor_loader">
        <div className="jimu-primary-loading"></div>
    </div>
  );
}

export default Spinner;
