import "./Spinner.css";

function Spinner() {
  setTimeout(function () {
    const contenedor = document.getElementById("contenedor_loader");
    contenedor.style.visibility = "hidden";
    contenedor.style.opacity = "0";
  }, 3000);
  return (
    // Símbolo de Carga
    <div id="contenedor_loader">
        <div className="jimu-primary-loading"></div>
    </div>
  );
}

export default Spinner;
