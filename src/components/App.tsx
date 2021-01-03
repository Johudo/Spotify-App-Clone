import * as React from "react";

import Navbar from "./Navbar";
import Home from "./Home";
import LogIn from "./LogIn";

import '../styles/App.scss'


function App(): any {
    return (
        <div className='App'>
            {/* <Navbar />
            <Home /> */}
            <LogIn />
        </div>
    );
}

export default App;