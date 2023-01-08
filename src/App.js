import './App.css';
import {Header} from "./components/Header/Header";
import {Nav} from "./components/Nav/Nav";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {Error404} from "./components/Error404/Error404";
import {BookingPage} from "./components/BookingPage/BookingPage";
import {Home} from "./components/Home/Home";
import {Confirmation} from "./components/Confirmation/Confirmation";

function App() {
    return (
                <BrowserRouter>
                    <Header/>
                    <Nav/>
                    <Routes>
                        <Route path={"/"} element={<Navigate to="/Home"/>}/>
                        <Route path ="/Home" element={<Home/>}/>
                        <Route path ="/BookingPage" element={<BookingPage/>}/>
                        <Route path ="/Confirmation" element={<Confirmation/>}/>
                        <Route path ={'/*'} element={<Error404/>}/>
                    </Routes>
                </BrowserRouter>
    );
}

export default App;