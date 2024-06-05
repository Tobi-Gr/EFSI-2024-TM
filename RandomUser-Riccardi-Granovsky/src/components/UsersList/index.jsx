import React, { useEffect, useState } from "react";
import Card from "../Card";
import UserInfo from "../UserInfo";

const UsersList = () => {
  const urlApi = "https://randomuser.me/api/?results=5";
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch(urlApi)
      .then((response) => response.json())
      .then((data) => setUsers(data.results))
      .catch((error) => console.log("Hubo un error " + error));
  }, []);

  const handleShowModal = (user) => {
    setSelectedUser(user);
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
  };

  return (
    <div className="userList">
      {users.map((user) => (
        <Card user={user} onShowModal={handleShowModal} />
      ))}
      {selectedUser && (
        <UserInfo user={selectedUser} onCloseModal={handleCloseModal} />
      )}
    </div>
  );
};

export default UsersList;
