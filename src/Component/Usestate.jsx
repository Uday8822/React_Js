import React from 'react';
import { useState } from 'react';

function Usestate(props) {
    const [name, setname] = useState("Tony Stark")

    const BtnClck=()=>{
        setname("Iron Man")
    }
    return (
       <>
       <div className="container">
        <div className="row">
            <div className="col">
                <h2>{name}</h2>
                <button className="btn btn-danger" onClick={BtnClck}>Click Me</button>
            </div>
        </div>
       </div>
       </>
    );
}

export default Usestate;