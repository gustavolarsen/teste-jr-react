import { useEffect, useState } from "react";
import "./App.css";
import { getUsers } from "./services/api";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import UsersList from "./components/UserList";

function App() {
  const [users, setUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]); // Estado para armazenar todos os usuários

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers();
      setUsers(data);
      setAllUsers(data); // Armazena os dados originais
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
      <UsersList users={users} />
    </div>
  );
}

export default App;
