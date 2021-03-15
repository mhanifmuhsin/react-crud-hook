import React,{useState} from 'react';
import './App.css';
import userList from './data';
import UserTable from './UserTable';

function App() {
  //state, data default diambil dari data.js
  const [users, setUser] = useState(userList);
  return (
     <div className="container">
        <h1>React CRUD App with Hooks without Database</h1>
        <div className="row">
            <div className="five columns">
              <h2>Add user</h2>
            </div>
            <div className="seven columns">
              <h2>View users</h2>
              <UserTable users={users} />
            </div>

        </div>
     </div>
  );
}

export default App;
