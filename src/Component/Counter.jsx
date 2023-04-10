import React from 'react';
import { useState } from 'react';

function Counter(props) {
    const [counter, setcounter] = useState(0)

    const Btnclck=()=>{
        setcounter(counter+1)
    }
    const MyBtnClck=()=>{
        setcounter(0)
    }
    const ClckBtn=()=>{
        setcounter(counter-1)
    }
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col">
                    <center><h1>{counter}</h1>
                    <button className="btn btn-primary" onClick={Btnclck}>Increment</button>
                    <button className="btn btn-danger" onClick={MyBtnClck}>Reset</button>
                    <button className="btn btn-success" onClick={ClckBtn}>Decrement</button>
                    </center>
                </div>
            </div>
        </div>
        </>
    );
}

export default Counter;