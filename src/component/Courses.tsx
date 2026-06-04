import { useState, useEffect } from "react";

interface courses {
  id: number;
  name: string;
}

const Courses = () => {
  const [courses, setCourses] = useState<courses[]>(() => {
    const savedCourses = localStorage.getItem("courses");

    return savedCourses
      ? JSON.parse(savedCourses)
      : [
          {
            id: 1,
            name: "Front-End",
          },
          {
            id: 2,
            name: "Full-Stack",
          },
        ];
  });

  const [coursesName, setCoursesName] = useState("");
  const [editId, setEditId] = useState<number | null>(null);

  useEffect(() => {
    localStorage.setItem("courses", JSON.stringify(courses));
  }, [courses]);

  function addcourses() {
    if (!coursesName.trim()) {
      alert("Please enter a course name");
      return;
    }

    const newCourses: courses = {
      id: courses.length + 1,
      name: coursesName,
    };

    setCourses([...courses, newCourses]);
    setCoursesName("");
  }

  function change(id: number) {
    const updated = courses.filter((item) => item.id !== id);
    setCourses(updated);
  }

  function editSubject(course: courses) {
    setCoursesName(course.name);
    setEditId(course.id);
  }

  const updateUsers = () => {
    if (!coursesName.trim()) {
      alert("Please enter a course name");
      return;
    }

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
      <main className="flex-grow-1 p-4">
        <h1 className="mb-4 display-5 fw-bold">Courses</h1>

        <input
          type="text"
          className="form-control"
          placeholder="Add your course"
          value={coursesName}
          onChange={(e) => setCoursesName(e.target.value)}
        />

        {editId ? (
          <button
            className="btn btn-warning w-100 mt-3 mb-3"
            onClick={updateUsers}
          >
            Update
          </button>
        ) : (
          <button onClick={addcourses} className="btn btn-primary mt-3 mb-3">
            Add Course
          </button>
        )}

        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Course Name</th>
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
