import React, { Component } from 'react';

class FetchAPI extends Component {
    constructor()
    {
        super()
        // console.log("constructor called");
        this.state={status:"Pending....."}
    }
    componentDidMount()
        { 
            fetch('https://jsonplaceholder.typicode.com/posts').then(res=>
            // console.log(res)
            res.json()
            )
            .then((Response)=>{
                // console.log(Response);
                this.setState({status:"Success"})
                this.setState({fetchdata:Response})
            })
        }
    render() {
        // console.log("render called");
        
        
        return (
            <>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col">
                        {this.state.status}
                        <table>
                            <thead>
                            <tr>
                                <th>Id</th>
                                <th>UserId</th>
                                <th>Title</th>
                                <th>Body</th>
                            </tr>
                            </thead>
                            
                        
                            {this.state.status=="Success"?<>
                                {
                                // JSON.stringify(this.state.fetchdata)
                                
                                this.state.fetchdata.map((res,i)=>(
                                    <tbody key={i}>
                                <tr key={i}>
                                    <td>{res.id}</td>
                                    <td>{res.userId}</td>
                                    <td>{res.title}</td>
                                    <td>{res.body}</td>
                                </tr>
                                </tbody>
                                ))
                                
                                }
                            </>:"No Data Found"}
                          
                            </table>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default FetchAPI;