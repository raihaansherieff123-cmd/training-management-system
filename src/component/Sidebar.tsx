import { NavLink } from "react-router-dom";

// type menuItem = {
//   id: number;
//   title: string;
// };

// const menuItems: menuItem[] = [
//   { id: 1, title: "Subjects" },
//   { id: 2, title: "Courses" },
//   { id: 3, title: "Students" },
//   { id: 4, title: "Teachers" },
// ];
const Sidebar = () => {
  return (
    <>
      <div
        className="bg-dark text-white p-3"
        style={{ width: "250px", height: "100vh" }}
      >
        <h3 className="mb-4">Dashboard</h3>
        <div className="d-flex flex-column p-2">
          <ul className="list-unstyled">
            <li className="p-2 mb-2 rounded" style={{ cursor: "pointer" }}>
              <NavLink to="/" className="btn  btn-outline-light mb-2 w-100">
                Home
              </NavLink>
            </li>
            <li className="p-2 mb-2 rounded" style={{ cursor: "pointer" }}>
              <NavLink
                to="/subjects"
                className="btn  btn-outline-light mb-2 w-100"
              >
                Subjects
              </NavLink>
            </li>
            <li className="p-2 mb-2 rounded" style={{ cursor: "pointer" }}>
              <NavLink
                to="/courses"
                className="btn  btn-outline-light mb-2 w-100"
              >
                Courses
              </NavLink>
            </li>
            <li className="p-2 mb-2 rounded" style={{ cursor: "pointer" }}>
              <NavLink
                to="/students"
                className="btn  btn-outline-light mb-2 w-100"
              >
                Students
              </NavLink>
            </li>
            <li className="p-2 mb-2 rounded" style={{ cursor: "pointer" }}>
              <NavLink
                to="/teachers"
                className="btn  btn-outline-light mb-2 w-100"
              >
                Teachers
              </NavLink>
            </li>
          </ul>
        </div>
        {/* <ul className="list-unstyled">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className="p-2 mb-2 rounded"
              style={{ cursor: "pointer" }}
            >
              <NavLink to="/subjects" className="btn  btn-outline-light mb-2">
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul> */}
      </div>
    </>
  );
};

export default Sidebar;
