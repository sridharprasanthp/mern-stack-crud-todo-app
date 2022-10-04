import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from 'react'
import axios from "axios";

function EditToDo() {

    const { id } = useParams();

    const [Describe, setDescribe] = useState('');
    const [Response, setResponse] = useState('');
    const [Piriority, setPiriority] = useState('');



    const [state, setState] = useState({ todos: [] });
    const time=setTimeout(1);
    useEffect(() => {
        axios.get('http://localhost:5000/todos').then(res => setState({ todos: res.data })); 
    }, [time])

    const filterTodo = state.todos.filter((todo) => todo._id === id);

    function update(id) {
        axios.patch(`http://localhost:5000/todos/update/${id}`,
            { description: Describe, response: Response, piriority: Piriority })
            .then(res => alert(res.data));
        setDescribe('');
        setResponse('');
        setPiriority('');
    }

    const navigate = useNavigate();
    function goto() {
        navigate('/todolist')
    }
    return (
        <div id='create'>
            <h1>Edit ToDo</h1>
            {filterTodo.map((todo, index) => (
                <div key={index}>
                    <form>
                        <label>Description</label>
                        <input type='text' value={Describe} placeholder={todo.description} onChange={(e) => setDescribe(e.target.value)} />
                        <label>Responsible</label>
                        <input type='text' value={Response} placeholder={todo.response} onChange={(e) => setResponse(e.target.value)} />
                        <label>Piriority:&nbsp;{todo.piriority}</label>
                        <div>
                            <input type='radio' value='Low' name='one' onChange={(e) => setPiriority(e.target.value)} checked={Piriority === 'Low'} />
                            <label>Low</label>
                            <input type='radio' value='Medium' name='one' onChange={(e) => setPiriority(e.target.value)} checked={Piriority === 'Medium'} />
                            <label>Medium</label>
                            <input type='radio' value='High' name='one' onChange={(e) => setPiriority(e.target.value)} checked={Piriority === 'High'} />
                            <label>High</label>
                        </div>
                        <input type='button' value='Update' onClick={() => { update(todo._id) }}/>
                    </form>
                </div>
            ))}
            <br />
            <button onClick={goto}>View List</button>
        </div>
    )
};

export default EditToDo;