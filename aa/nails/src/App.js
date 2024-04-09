import './App.css';

import React from 'react';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import NailsMakeupList from './NailsMakeupList';
import NailMakeupDetail from './NailMakeupDetail';
import EditNailMakeup from './EditNailMakeup';
import CreateNailMakeup from './CreateNailMakeup';

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link> | <Link to="/create">Create Nail Makeup</Link>
        </nav>
        <Routes>
          <Route path="/" element={<NailsMakeupList/>} exact/>
          <Route path="/nail/:id" element={<NailMakeupDetail/>}/>
          <Route path="/edit/:id" element={<EditNailMakeup/>}/>
          <Route path="/create" element={<CreateNailMakeup/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
