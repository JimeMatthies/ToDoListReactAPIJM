import React, { useState, useEffect } from "react";

const Todo = () => {

    const [inputValue, setInputValue] = useState("");
    const [tasks, setTasks] = useState([]);
    const [disable, setDisable] = useState(false);
    const URL_API = "https://assets.breatheco.de/apis/fake/todos/user/jimematthies";

    useEffect(() => {
        getTasks(URL_API)
        return () => { }
    }, []);

    const getTasks = (url, options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }) => {
        fetch(url, options)
            .then((response) => {
                console.log(response);
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setTasks(data);
            }).catch(error => {
                console.log(error);
            });
    };

    const putTasks = (url, options = {
        method: 'PUT',
        body: JSON.stringify(tasks),
        headers: {
            'Content-Type': 'application/json',
        },
    }) => {
        fetch(url, options)
            .then((response) => {
                console.log(response);
                return response.json();
            })
            .then((data) => {
                console.log(data);
            }).catch(error => {
                console.log(error);
            });
    };

    const handleChange = e => {
        setInputValue(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (inputValue.trim() != "" && inputValue != null) {
            setTasks([...tasks, { label: inputValue, done: true }]);
            putTasks(URL_API);
            setInputValue.setTasks;
        };
    };

    const deleteItem = key => {
        const newList = tasks.filter(task => {
            return task.label != key;
        });
        setTasks(newList);
        fetch(URL_API,
            {
                method: "PUT",
                body: JSON.stringify(newList),
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
            .then((response) => {
                console.log(response);
                return response.json();
            })
            .then((data) => {
                console.log(data);
            }).catch(error => {
                console.log(error);
            });
    };

    const deleteAll = () => {
        setTasks([
            {
                label: "",
                done: false
            }
        ]);
        fetch(
            "https://assets.breatheco.de/apis/fake/todos/user/jimematthies",
            {
                method: "PUT",
                body: JSON.stringify(tasks),
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
            .then((response) => {
                console.log(response);
                return response.json();
            })
            .then((data) => {
                console.log(data);
            }).catch(error => {
                console.log(error);
            });
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
                        if (task.label != "") {
                            return <li className="task d-flex justify-content-between aling-text-center" key={index} onMouseOver={(e) => {
                                setDisable(true)
                            }} onMouseOut={(e) => {
                                setDisable(false)
                            }}>{task.label}<a key={index} className={disable ? "trash" : "trash disable"} onClick={() => deleteItem(task.label)}>X</a></li>
                        }
                    })}
                    <div className="counter">{tasks.length === 0 ? "No tasks, add a task" : tasks.length + " tasks left"}</div>
                </ul>
            </div>
            <div className="delete-btn d-flex justify-content-center">
                <button className="delete-btn" onClick={() => { deleteAll() }}>Remove All</button>
            </div>
        </div>
    );
}

export default Todo;