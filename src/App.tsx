import type React from "react"
import Button from "./components/Button"
import { useState, type FormEvent } from "react"

interface User {
  name: string,
  age: number
}

const App = () => {
  const [users, setUsers] = useState<User[]>([]);

  const [userDetails, setUserDetails] = useState({
    name: "",
    age: "",
  });

  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserDetails({
        ...userDetails,
        [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newUser = {
      name: userDetails.name,
      age: Number(userDetails.age),
    };
    if (editIndex !== null) {
      // Update
      const updatedUsers = [...users];
      updatedUsers[editIndex] = newUser;
      setUsers(updatedUsers);
      setEditIndex(null);
    } else {
      // Create
      setUsers([...users, newUser]);
    }
    setUserDetails({ name: "", age: "" });
  }

  const handleDelete = (index: number) => {
    setUsers(users.filter((_, i) => i !== index));
  }

  const handleEdit = (index: number) => {
    setEditIndex(index);
    setUserDetails({
      name: users[index].name,
      age: String(users[index].age),
    });
  }

  return (
    <div style={{ padding: "20px"}}>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" name="name" value={userDetails.name} onChange={handleChange} />
        <input type="number" placeholder="Age" name="age" value={userDetails.age} onChange={handleChange} />
        <Button variant="secondary">{editIndex !== null ? "Update" : "Add"}</Button>
      </form>
      <ul>
        {users.map((user, idx) => (
          <li key={idx} style={{marginTop: '10px'}}>
            {user.name} ({user.age} yosh)
            <Button variant="secondary" onClick={() => handleEdit(idx)} style={{marginLeft: '10px'}}>Edit</Button>
            <Button variant="secondary" onClick={() => handleDelete(idx)} style={{marginLeft: '5px'}}>Delete</Button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
