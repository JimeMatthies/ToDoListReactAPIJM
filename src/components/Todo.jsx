import React, { useState } from "react";

const Todo = () => {

    const [inputValue, setInputValue] = useState("");
    const [tasks, setTasks] = useState([]);
    const [disable, setDisable] = useState(false);

    const handleChange = e => {
        setInputValue(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (inputValue === "") return;
        setTasks([...tasks, inputValue]);
        setInputValue("");
    };

    return (
        <div className="todo-container">
            <div className="form-container d-flex justify-content-center">
                <form onSubmit={handleSubmit}>
                    <input className="form-task" placeholder="What needs to be done?" type="text" value={inputValue} onChange={handleChange} />
                </form>
            </div>
            <div className="list-container d-flex justify-content-start">
                <ul>
                    {tasks.map((task, index) => {
                        return <li className="d-flex justify-content-between aling-text-center" key={index} onMouseOver={(e) => {
                            setDisable(true)
                        }} onMouseOut={(e) => {
                            setDisable(false)
                        }}>{task}<a key={index} className={disable ? "trash" : "trash disable"} onClick={(e) => {
                            setTasks(tasks.filter((task, id) => {
                                return index !== id
                            }))
                        }}>X</a></li>
                    })}
                    <div className="counter">{tasks.length === 0 ? "No tasks, add a task" : tasks.length + " tasks left"}</div>
                </ul>
            </div>
            <div className="delete-btn d-flex justify-content-center">
                <button>Remove All</button>
            </div>
        </div>
    );
}

export default Todo;