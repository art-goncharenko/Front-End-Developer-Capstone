import './App.css';
import {Header} from "./Header";
import {Nav} from "./Nav";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {Error404} from "./Error404";
import {ReserveATable} from "./ReserveATable";
import {Home} from "./Home";

function App() {
    return (
                <BrowserRouter>
                    <Header/>
                    <Nav/>
                    <Routes>
                        <Route path={"/"} element={<Navigate to="/Home"/>}/>
                        <Route path ="/Home" element={<Home/>}/>
                        <Route path ="/ReserveATable" element={<ReserveATable/>}/>
                        <Route path ={'/*'} element={<Error404/>}/>
                    </Routes>
                </BrowserRouter>
    );
}

export default App;