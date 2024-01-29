import DropdownBar from "../dropdown/DropdownBar";

function ViewContentServices({ filter, data, handleSelection }) {
  return (
    <div className="container col-12 mt-4 text-white">
      <div className="row">
        <div className="headerContentContainer col-12 text-center">
          <h5 className="d-flex">
            SERVICIOS{" "}
            <span className="px-2" style={{ color: "#ffc700" }}>
              {" "}
              |{" "}
            </span>
            <div className="d-inline">
              <div className="d-lg-none">
                <DropdownBar data={data} handleSelection={handleSelection} />
              </div>
              <div className="d-lg-flex d-none">
                <span>EMPORIO</span>
              </div>
            </div>
          </h5>
          <h1 className="d-flex">
            <div className="d-inline">
              <strong>{filter.title}</strong>
            </div>
          </h1>
        </div>
        <div className="bodyContentContainer col-12 my-4 text-justify">
          <span>{filter.description}</span>
        </div>
      </div>
    </div>
  );
}

export default ViewContentServices;
