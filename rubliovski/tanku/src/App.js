import logo from './logo.svg';
import './App.css';
import TankuList from "./components/TankuList";
import CreateTank from "./components/CreateTank";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="App">
                <nav>
                    <Link to="/">Home</Link> | <Link to="/create">Create Nail Makeup</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<TankuList/>} exact/>
                    <Route path="/create" element={<CreateTank/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
