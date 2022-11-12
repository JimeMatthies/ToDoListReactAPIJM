import React from "react";
import Todo from "./components/Todo";
import Footer from './components/Footer';

const App = () => {
    return (
        <div className="container">
            <h1 className="title">To Do List</h1>
            <Todo/>
            <Footer/>
        </div>
    )
}

export default App;