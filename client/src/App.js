import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import UserList from './pages/UserList';
// import EditUser from './pages/EditUser';
import AddUser from './pages/AddUser';
import UserManagement from './pages/UserManagement';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<UserList />} /> */}
        <Route path="/add" element={<AddUser />} /> 
        <Route path="/" element={<UserManagement />} />
        {/* <Route path="/edit/:id" element={<EditUser />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
