import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./component/Sidebar";
import Subject from "./component/Subject";
import Courses from "./component/Courses";
import Students from "./component/Students";
import Teachers from "./component/Teachers";
import Homepage from "./component/Homepage";

const App = () => {
  return (
    <BrowserRouter>
      <div className="d-flex">
        <Sidebar />
        <div className="col-10 p-4">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/subjects" element={<Subject />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/students" element={<Students />} />
            <Route path="/teachers" element={<Teachers />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
