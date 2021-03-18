import React, { useState } from 'react';
import AddUserForm from './AddUserForm';
import EditUserForm from './EditUserForm';
import userList from './data';
import UserTable from './UserTable';

function App() {
  //state, data default diambil dari data.js
  const [users, setUsers] = useState(userList);

  // add user
  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  // delete user
  const deleteUser = (id) => setUsers(users.filter(user => user.id !== id));

  // edit user
  const [editing, setEditing] = useState(false);

  const initialUser = { id: null, name: "", username: "" };

  const [currentUser, setCurrentUser] = useState(initialUser);

  const editUser = (id, user) => {
    setEditing(true);
    setCurrentUser(user);
  };

  const updateUser = (newUser) => {
    setUsers(
      users.map((user) => (user.id === currentUser.id ? newUser : user))
    );
    setCurrentUser(initialUser);
    setEditing(false);
  };

  return (
    <div>
    <div className="container">
      <h1>React CRUD App with Hooks without Database</h1>
      <div className="row">
        {editing ? (
          <div>
            <EditUserForm
              currentUser={currentUser}
              setEditing={setEditing}
              updateUser={updateUser}
            />
          </div>
        ) : (
          <div>
            <AddUserForm addUser={addUser} />
          </div>
        )}

      </div>
         
    </div>
    
    <div style={{ display:'flex', justifyContent: 'center' }}>
          
          <UserTable users={users} deleteUser={deleteUser} editUser={editUser} />
        </div>
        </div>

  );
};

export default App;
