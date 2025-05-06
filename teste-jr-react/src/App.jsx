import { useEffect, useState } from "react";
import "./App.css";
import { getUsers } from "./services/api";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import UsersList from "./components/UsersList";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  const handleSearch = (searchTerm) => {
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setUsers(filteredUsers);
  };

  const clearUsers = () => {
    setUsers([]);
  };

  return (
    <div className="App">
      <Header />
      <SearchBar onSearch={handleSearch} onClear={clearUsers} />
      <h1>Users</h1>
      <UsersList users={users} />
    </div>
  );
}

export default App;