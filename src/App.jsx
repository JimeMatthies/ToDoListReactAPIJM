import React from "react";
import Todo from "./components/Todo";
import Footer from './components/Footer';

const App = () => {
    return (
        <div className="container">
            <Todo/>
            <Footer/>
        </div>
    )
}

export default App;