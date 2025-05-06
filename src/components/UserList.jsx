import React from "react";

const UsersList = ({ users }) => {
  return (
    <div>
      <h2>Users List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email} - {user.address.city}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
