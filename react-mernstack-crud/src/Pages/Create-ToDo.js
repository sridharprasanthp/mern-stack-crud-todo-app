import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

function CreateToDo() {

    const nav = useNavigate();
    function goto() {
        nav('/todolist')
    }

    const [Describe, setDescribe] = useState('');
    const [Response, setResponse] = useState('');
    const [Piriority, setPiriority] = useState('');

    function submit(e) {
        e.preventDefault();
        console.log(`Description:${Describe},Response:${Response},Piriority:${Piriority}`);

        var data = {
            description: Describe,
            response: Response,
            piriority: Piriority
        };

        axios.post('http://localhost:5000/todos/add', data).then(res => alert(res.data));
        setDescribe("");
        setResponse("");
        setPiriority("");
        //}
    }

    function des(e) {
        setDescribe(e.target.value);
    }

    function res(e) {
        setResponse(e.target.value)
    }

    function pir(e) {
        setPiriority(e.target.value);
    }


    return (
        <div id='create'>
            <h1>Create ToDo</h1>
            <form onSubmit={submit}>
                <label>Description</label>
                <input type='text' value={Describe} onChange={des} />
                <label>Response</label>
                <input type='text' value={Response} onChange={res} />
                <div>
                    <input type='radio' name='click' value='Low' checked={Piriority === 'Low'} onChange={pir} />
                    <label>Low</label>
                    <input type='radio' name='click' value='Medium' checked={Piriority === 'Medium'} onChange={pir} />
                    <label>Medium</label>
                    <input type='radio' name='click' value='High' checked={Piriority === 'High'} onChange={pir} />
                    <label>High</label>
                </div>
                <input type='submit' value='Save' />
            </form><br></br>
            <button onClick={goto}>View List</button>
        </div>
    )
};

export default CreateToDo;