import { useState, useEffect } from "react";

interface users {
  id: number;
  name: string;
}

const Subject = () => {
  const [users, setUsers] = useState<users[]>(() => {
    const savedSubjects = localStorage.getItem("subjects");

    return savedSubjects
      ? JSON.parse(savedSubjects)
      : [
          {
            id: 1,
            name: "Tamil",
          },
          {
            id: 2,
            name: "English",
          },
          {
            id: 3,
            name: "Hindi",
          },
          {
            id: 4,
            name: "Maths",
          },
        ];
  });

  const [usersName, setUsersName] = useState("");
  const [editId, setEditId] = useState<number | null>(null);

  useEffect(() => {
    localStorage.setItem("subjects", JSON.stringify(users));
  }, [users]);

  function addUser() {
    if (!usersName.trim()) {
      alert("Please fill all fields");
      return;
    }

    const newUser: users = {
      id: users.length + 1,
      name: usersName,
    };

    setUsers([...users, newUser]);
    setUsersName("");
  }

  function change(id: number) {
    const updated = users.filter((item) => item.id !== id);
    setUsers(updated);
  }

  function editSubject(user: users) {
    setUsersName(user.name);
    setEditId(user.id);
  }

  const updateUsers = () => {
    if (!usersName.trim()) {
      alert("Please enter a subject name");
      return;
    }

    const updated = users.map((item) =>
      item.id === editId
        ? {
            ...item,
            name: usersName,
          }
        : item,
    );

    setUsers(updated);
    setEditId(null);
    setUsersName("");
  };

  return (
    <div>
      <main className="flex-grow-1 p-4">
        <h1 className="mb-4 display-5 fw-bold">Subjects</h1>

        <input
          type="text"
          className="form-control"
          placeholder="Add your subject"
          value={usersName}
          onChange={(e) => setUsersName(e.target.value)}
        />

        {editId ? (
          <button
            className="btn btn-warning w-100 mt-3 mb-3"
            onClick={updateUsers}
          >
            Update
          </button>
        ) : (
          <button onClick={addUser} className="btn btn-primary mt-3 mb-3">
            Add Subject
          </button>
        )}

        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Subject Name</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {users.map((item) => (
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

export default Subject;
