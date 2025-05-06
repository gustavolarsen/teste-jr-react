import React from 'react';

const UsersList = ({ users }) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} - {user.email} - {user.address.city}
        </li>
      ))}
    </ul>
  );
};

export default UsersList;