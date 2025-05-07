import React, { useState } from "react";
import UserModal from "../Modal/Modal";
import "./UserList.css";

const UsersList = ({ users }) => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div>
      <h2>User List</h2>
      {users.length === 0 && <p>User not found!</p>}
      {users.map((user) => (
        <p
          className="userItem"
          key={user.id}
          onClick={() => setSelectedUser(user)}
        >
          {user.name}
        </p>
      ))}

      {selectedUser && (
        <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
    </div>
  );
};

export default UsersList;
