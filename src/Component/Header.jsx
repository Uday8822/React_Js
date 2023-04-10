import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
import Classcomponents from './classcomponents';
import Functioncomponents from './functioncomponents';
import Usestate from './Usestate';
import Listview from './Listview';
import Counter from './Counter';
import TableApi from './TableApi'
import FetchAPI from './FetchAPI';

function Header(props) {
    const Menu = {'./classcomponents':'Classcomponents','./functioncomponents':'Functioncomponents','./usestate':'Usestate',
                './listview':'Listview','./counter':'Counter','./tableapi':'TableApi','./fetchapi':'FetchAPI'}
        const ReturnData = Object.entries(Menu).map((res,i)=>{
            return <li className="nav-item" key={i}>
            <Link className='nav-link' to={res[0]}>{res[1]}</Link>
          </li>
        })
    return (
        <>
        <Router>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Logo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
        {ReturnData}
      </ul>
    </div>
  </div>
</nav>
        <Routes>
            <Route path='/classcomponents' element={<Classcomponents/>}/>
            <Route path='/functioncomponents' element={<Functioncomponents/>}/>
            <Route path='/Usestate' element={<Usestate/>}/>
            <Route path='/Listview' element={<Listview/>}/>
            <Route path='/Counter' element={<Counter/>}/>
            <Route path='/TableApi' element={<TableApi/>}/>
            <Route path='/FetchAPI' element={<FetchAPI/>}/>
        </Routes>
        </Router>
        </>
    );
}

export default Header;