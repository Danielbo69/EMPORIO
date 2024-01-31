import "./viewGlasses.css";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { glasses } from "../../../data/data";
import SideBar from "../../../components/sidebar/SideBar";
import ViewContentGlasses from "../../../components/viewContent/ViewContentGlasses";

function ViewGlasses() {
  const params = useParams();
  const navigate = useNavigate();
  const filterGlasses = glasses.filter((glasses) => glasses.id == params.id);
  const [activeBar, setActiveBar] = useState(params.id);

  const handleSelection = (id) => {
    setActiveBar(id);
    navigate(`/lentes/${id}`);
  };

  return (
    <div className="glassesBody">
      <div className="glassesContent row d-flex flex-column">
        <div className="d-flex align-items-center p-0">
          <SideBar
            glasses={glasses}
            activeBar={activeBar}
            handleSelection={handleSelection}
          />
        </div>
        <div className="col p-0">
          <div className="glassesData">
            {filterGlasses.map((filter) => (
              <div className="text-white" key={filter.id}>
                <ViewContentGlasses
                  filter={filter}
                  data={glasses}
                  handleSelection={handleSelection}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewGlasses;
