import Dropdown from "react-bootstrap/Dropdown";
import NavLink from "react-bootstrap/NavLink";
import NavItem from "react-bootstrap/NavItem";

function DropdownBar({ data, handleSelection }) {
  return (
    <Dropdown as={NavItem}>
      <Dropdown.Toggle split as={NavLink} id="dropdown-split-basic">
        Menu{" "}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {data.map((data) => (
          <div key={data.title}>
            <Dropdown.Item onClick={() => handleSelection(data.id)}>
              {data.title}
            </Dropdown.Item>
          </div>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownBar;
