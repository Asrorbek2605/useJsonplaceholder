import React from "react";
import {Route,Switch,Link} from "react-router-dom";
import Todos from "./pages/Todos";
import Users from "./pages/Users";
import Posts from "./pages/Posts";
import OnePost from "./pages/OnePost";
function App(){
    return(
        <div className="container">
<h1>Json placeholder</h1>
            <Link to="/posts"><button className="btn btn-success float-left ml-3">posts</button></Link>
            <Link to="/todos"><button className="btn btn-success float-left ml-3">todos</button></Link>
            <Link to="/users"><button className="btn btn-success float-left ml-3">users</button></Link>
            <hr/>
            <Switch>
                <Route path={"/posts/:id"} component={OnePost}/>
                <Route path={"/posts"} component={Posts}/>
            <Route path={"/todos"} component={Todos}/>
            <Route path={"/users"} component={Users}/>
            </Switch>

        </div>
    )
}
export default App;

