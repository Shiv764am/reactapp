import React from 'react';
import About from './About';
import Contact from './Contact';
import Navbar from './layout/navbar';
import UserList from './UserList';
import AddUser from './AddUser';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      {/* <h1>Hello from react App.js Home Page</h1>
      <About />
      <Contact /> */}
      <Navbar />
      <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/UserList" element={<UserList />} />
          <Route exact path="/AddUsers" element={<AddUser />} />
        
        
      </Routes>
    </div>
    </Router>
  );
}

export default App;
 