import { useEffect, useState } from "react";
import "./App.css";
import { getUsers } from "./services/api";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import UsersList from "./components/UserList/UserList";

function App() {
  const [users, setUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const data = await getUsers();
        setUsers(data);
        setAllUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleSearch = (searchTerm) => {
    const filteredUsers = allUsers.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setUsers(filteredUsers);
  };

  const clearUsers = () => {
    setUsers(allUsers);
  };

  return (
    <div className="App">
      <Header />
      <SearchBar onSearch={handleSearch} onClear={clearUsers} />
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <UsersList users={users} />
      )}
    </div>
  );
}

export default App;
