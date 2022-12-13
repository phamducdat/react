import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/home";
import {Counter} from 'counter/Counter';


const App = () => {
    return (
        <BrowserRouter>

            <Routes>
                <Route index element={<Home/>}/>
                <Route path="home/*" element={<Home/>}/>
                <Route path="counter/*" element={<Counter datpd={"datpd"}/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
