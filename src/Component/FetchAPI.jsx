import React, { Component } from 'react';

class FetchAPI extends Component {
    constructor()
    {
        super()
        console.log("constructor called");
        this.state={status:"Pending....."}
    }
    componentDidMount()
        { 
            fetch('https://jsonplaceholder.typicode.com/posts').then(res=>
            // console.log(res)
            res.json()
            )
            .then((Response)=>{
                console.log(Response);
                this.setState({status:"Success"})
                this.setState({fetchdata:Response})
            })
        }
    render() {
        console.log("render called");
        
        
        return (
            <>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col">
                        {this.state.status}
                            {this.state.status=="Success"?<div>{JSON.stringify(this.state.fetchdata)}
                            </div>:"No Data Found"}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default FetchAPI;