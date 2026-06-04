import { useState, useEffect } from "react";

interface Student {
  id: number;
  name: string;
  subject: string;
}

const Students = () => {
  const subjects = ["Math", "Science", "History", "English"];
  const [students, setStudents] = useState<Student[]>(() => {
    const savedStudents = localStorage.getItem("students");

    return savedStudents ? JSON.parse(savedStudents) : [];
  });

  const [studentName, setStudentName] = useState("");

  const [subject, setSubject] = useState("");

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const addStudent = () => {
    if (studentName.trim() === "" || subject === "") {
      alert("Please fill all fields");
      return;
    }

    const newStudent: Student = {
      id: students.length + 1,
      name: studentName,
      subject: subject,
    };

    setStudents([...students, newStudent]);

    setStudentName("");
    setSubject("");
  };

  return (
    <div className="container">
      <h2 className="mb-4  display-5 fw-bold">Student Management</h2>

      <div className="row mb-3">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Student Name"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
          />
        </div>

        <div className="col-md-4">
          <select
            className="form-select"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          >
            <option value="">Select Subject</option>

            {subjects.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-4">
          <button className="btn btn-success w-100" onClick={addStudent}>
            Add Student
          </button>
        </div>
      </div>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Student Name</th>
            <th>Subject</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.subject}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Students;
