import type React from "react"
import Button from "./components/Button"
import { useState } from "react"

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserDetails({
        ...userDetails,
        [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setUsers([...users, userDetails]);
  }

  return (
    <div style={{ padding: "20px"}}>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" name="name" onInput={handleChange} />
        <input type="number" placeholder="Age" name="age" onInput={handleChange} />
      <Button variant="secondary">Hello</Button>
      </form>
    </div>
  )
}

export default App
