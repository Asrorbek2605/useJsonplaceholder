import React, {useEffect, useState} from "react";
import {doGet} from "../service";
function Users() {
    const [users,setUsers]= useState([]);
    async function getUsers (){
        const res = await doGet('/users')
        setUsers(res)

    }
    useEffect(()=>{
getUsers()
    },[])
    return(
<div>
    <h3 className="text-center">Users</h3>

    <table border className={"table"}>
        <thead>
        <tr>
            <th>N</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Username</th>
            <th>Website</th>
            <th>Address</th>
            <th>Company</th>
        </tr>
        </thead>
        <tbody>
        {users.map((item,index)=>
            <tr key={index}>
                <td>{index+1}</td>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td>{item.username}</td>
                <td>{item.website}</td>
                <td>{item.address.city}</td>
                <td>{item.company.name}</td>
        </tr>)}
        </tbody>
    </table>
</div>
    )
}
export default Users;