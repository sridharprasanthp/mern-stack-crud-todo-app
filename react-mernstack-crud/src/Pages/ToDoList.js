import axios from 'axios'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

function ToDoList() {

    function deletedtodo(id) {
        axios.delete(`http://localhost:5000/todos/${id}`).then(res =>alert(res.data));
    }

    const [State, setState] = useState({ todos: [] });
    const time=setTimeout(1);
    useEffect(()=>{
            axios.get('http://localhost:5000/todos').then(res => setState({ todos: res.data }))
    },[time])
    

    const [chang, setChang] = useState('');
    const keys = ['description', 'response', 'piriority']

    return (
        <div id='create'>
            <h1>ToDo List</h1>
            <input type='text' placeholder='Search....' onChange={(e) => setChang(e.target.value)} id='text' /><br />
            <table>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Response</th>
                        <th>Piriority</th>
                        <th>Go to</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {State.todos.filter((todo) =>
                        keys.some((key) =>
                            todo[key].includes(chang)))
                        .map((todo, index) => (
                            <tr key={index}>
                                <td>{todo.description}</td>
                                <td>{todo.response}</td>
                                <td>{todo.piriority}</td>
                                <td><Link to={'/edit/' + todo._id} id='a'>Edit</Link></td>
                                <td><button onClick={() => deletedtodo(todo._id)}>Delete</button></td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
};

export default ToDoList;