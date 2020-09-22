// npm install bootstrap react-router-dom

import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home/Home';
import About from './components/About/About';


class App extends Component {
    render () {
        return (
            <BrowserRouter>
                <Navbar />
                {/* <Route path="/" exact render={()=>{
                    return (
                        <h1>Home Page</h1>
                    )
                }}></Route> */}

                <Route path="/" exact component={Home}></Route>
                <Route path="/about" component={About}></Route>
            </BrowserRouter>
            
        )
    }
}

export default App;