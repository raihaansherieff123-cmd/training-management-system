import { useState } from "react";
interface courses {
  id: number;
  name: string;
}

const Courses = () => {
  const [courses, setCourses] = useState<courses[]>([
    {
      id: 1,
      name: "Front-End",
    },
    {
      id: 2,
      name: "Full-Stack",
    },
  ]);
  const [coursesName, setCoursesName] = useState("");
  const [editId, setEditId] = useState<number | null>(null);
  function addcourses() {
    if (!coursesName.trim()) return;

    const newCourses: courses = {
      id: courses.length + 1,
      name: coursesName,
    };
    setCourses([...courses, newCourses]);
    setCoursesName("");
    console.log(setCourses);
  }

  function change(id: number) {
    const updated = courses.filter((item) => item.id !== id);
    setCourses(updated);
  }
  function editSubject(courses: courses) {
    setCoursesName(courses.name);
    setEditId(courses.id);
  }

  const updateUsers = () => {
    const updated = courses.map((item) =>
      item.id === editId
        ? {
            ...item,
            name: coursesName,
          }
        : item,
    );

    setCourses(updated);

    setEditId(null);
    setCoursesName("");
  };
  return (
    <div>
      <main className="flex-grow-1 p-4 bg light">
        <h1 className="mb-4  display-5 fw-bold">Courses</h1>
        <input
          type="text"
          className="form-control"
          placeholder="add your courses"
          value={coursesName}
          onChange={(e) => setCoursesName(e.target.value)}
        />
        {editId ? (
          <button className="btn btn-warning w-100" onClick={updateUsers}>
            Update
          </button>
        ) : (
          <button onClick={addcourses} className="btn btn-primary mt-3 mb-3">
            Add Subjects
          </button>
        )}
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Courses Name</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {courses.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>

                <td>{item.name}</td>

                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => editSubject(item)}
                  >
                    Edit
                  </button>
                </td>

                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => change(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Courses;
