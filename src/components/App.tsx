import * as React from "react";

import Navbar from "./Navbar";

import '../styles/App.scss'
import Home from "./Home";

function App(): any {
    return (
        <div className='App'>
            <Navbar />
            <Home />
        </div>
    );
}

export default App;